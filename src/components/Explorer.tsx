"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { NodeKind, Subject } from "@/data/types";
import { KIND_LABELS } from "@/data/types";
import { ancestors, buildIndex, descendants } from "@/lib/graph";
import { CHIP_W, computeLayout } from "@/lib/layout";
import { GraphCanvas } from "./GraphCanvas";
import { DetailPanel } from "./DetailPanel";
import { Legend } from "./Legend";
import { KindGlyph } from "./KindGlyph";

const KIND_ORDER: NodeKind[] = [
  "idea",
  "observation",
  "experiment",
  "instrument",
  "theory",
  "synthesis",
];

export function Explorer({ subject }: { subject: Subject }) {
  const layout = useMemo(() => computeLayout(subject), [subject]);
  const index = useMemo(() => buildIndex(subject), [subject]);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [kinds, setKinds] = useState<Set<NodeKind>>(new Set());
  const [surprisesOnly, setSurprisesOnly] = useState(false);
  const [lineage, setLineage] = useState(true);
  const [tourStep, setTourStep] = useState<number | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  const selected = selectedId ? subject.nodes.find((n) => n.id === selectedId) ?? null : null;

  const upstream = useMemo(
    () => (selectedId ? ancestors(index, selectedId) : new Set<string>()),
    [index, selectedId],
  );
  const downstream = useMemo(
    () => (selectedId ? descendants(index, selectedId) : new Set<string>()),
    [index, selectedId],
  );

  const matched = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtering = q.length > 0 || kinds.size > 0 || surprisesOnly;
    if (!filtering) return null;
    const set = new Set<string>();
    for (const n of subject.nodes) {
      if (kinds.size > 0 && !kinds.has(n.kind)) continue;
      if (surprisesOnly && !n.surprise) continue;
      if (q) {
        const haystack = [
          n.title,
          n.summary,
          n.people.join(" "),
          n.place ?? "",
          n.displayYear ?? String(n.year),
          (n.tags ?? []).join(" "),
          n.question,
          n.found,
          n.meaning,
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) continue;
      }
      set.add(n.id);
    }
    return set;
  }, [query, kinds, surprisesOnly, subject.nodes]);

  const centreOn = useCallback(
    (id: string) => {
      const el = scrollRef.current;
      const node = layout.byId.get(id);
      if (!el || !node) return;
      el.scrollTo({
        left: Math.max(0, node.x + CHIP_W / 2 - el.clientWidth / 2),
        top: Math.max(0, node.cy - el.clientHeight / 2),
        behavior: "smooth",
      });
    },
    [layout],
  );

  const select = useCallback(
    (id: string | null, { centre = false }: { centre?: boolean } = {}) => {
      setSelectedId(id);
      if (id && centre) centreOn(id);
    },
    [centreOn],
  );

  // Panel-driven navigation should bring the node into view; clicking a chip
  // that is already on screen should not yank the canvas around.
  const selectFromPanel = useCallback(
    (id: string) => {
      setTourStep(null);
      select(id, { centre: true });
    },
    [select],
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelectedId(null);
        setTourStep(null);
      }
      if (e.key === "/" && !(e.target instanceof HTMLInputElement)) {
        e.preventDefault();
        document.getElementById("hos-search")?.focus();
      }
      if (tourStep !== null) {
        if (e.key === "ArrowRight") stepTour(1);
        if (e.key === "ArrowLeft") stepTour(-1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  function stepTour(delta: number) {
    const next = (tourStep ?? -1) + delta;
    if (next < 0 || next >= subject.tour.length) {
      if (next >= subject.tour.length) setTourStep(null);
      return;
    }
    setTourStep(next);
    select(subject.tour[next].nodeId, { centre: true });
  }

  function toggleKind(kind: NodeKind) {
    setKinds((prev) => {
      const next = new Set(prev);
      if (next.has(kind)) next.delete(kind);
      else next.add(kind);
      return next;
    });
  }

  const surpriseCount = subject.nodes.filter((n) => n.surprise).length;
  const tour = tourStep !== null ? subject.tour[tourStep] : null;

  return (
    <div className="flex h-full flex-col">
      <header className="z-30 border-b border-line bg-bg-raised px-5 py-3">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <div className="mr-auto">
            <h1 className="flex items-baseline gap-2.5 text-[15px] font-semibold tracking-tight text-ink">
              <span className="font-mono text-[11px] tracking-[0.2em] text-ink-faint">HOS</span>
              {subject.title}
            </h1>
            <p className="mt-0.5 text-[11.5px] text-ink-faint">{subject.tagline}</p>
          </div>

          <div className="relative">
            <input
              id="hos-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search people, places, ideas…"
              className="w-[220px] rounded-md border border-line bg-bg-chip py-1.5 pl-2.5 pr-7 text-[12px] text-ink placeholder:text-ink-faint focus:border-sky-500/60 focus:outline-none"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded px-1 text-ink-faint hover:text-ink"
                aria-label="Clear search"
              >
                ×
              </button>
            ) : (
              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 font-mono text-[10px] text-ink-faint">
                /
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            {KIND_ORDER.map((k) => {
              const on = kinds.has(k);
              return (
                <button
                  key={k}
                  type="button"
                  onClick={() => toggleKind(k)}
                  title={KIND_LABELS[k]}
                  aria-pressed={on}
                  className={`flex items-center gap-1.5 rounded-md border px-2 py-1.5 text-[11px] transition-colors ${
                    on
                      ? "border-sky-500/60 bg-sky-500/10 text-ink"
                      : "border-line bg-bg-chip text-ink-dim hover:border-ink-faint"
                  }`}
                >
                  <KindGlyph kind={k} color={on ? "#38bdf8" : "#8ea3c4"} size={9} />
                  <span className="hidden lg:inline">{KIND_LABELS[k]}</span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setSurprisesOnly((v) => !v)}
            aria-pressed={surprisesOnly}
            className={`flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-[11px] transition-colors ${
              surprisesOnly
                ? "border-amber-400/60 bg-amber-400/10 text-ink"
                : "border-line bg-bg-chip text-ink-dim hover:border-ink-faint"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-[#f0b429]" />
            Surprises
            <span className="font-mono text-[10px] text-ink-faint">{surpriseCount}</span>
          </button>

          <button
            type="button"
            onClick={() => setLineage((v) => !v)}
            aria-pressed={lineage}
            className={`rounded-md border px-2.5 py-1.5 text-[11px] transition-colors ${
              lineage
                ? "border-line bg-bg-chip text-ink"
                : "border-line bg-bg-chip text-ink-faint hover:text-ink-dim"
            }`}
            title="On selection, highlight everything the moment rests on and everything it led to"
          >
            Trace lineage
          </button>

          <button
            type="button"
            onClick={() => (tourStep === null ? stepTour(1) : setTourStep(null))}
            className="rounded-md border border-sky-500/40 bg-sky-500/10 px-2.5 py-1.5 text-[11px] text-sky-300 transition-colors hover:bg-sky-500/20"
          >
            {tourStep === null ? "Guided tour" : "Exit tour"}
          </button>

          <Legend />
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        <div className="flex min-w-0 flex-1 flex-col">
          {!selected && tourStep === null && (
            <div className="border-b border-line-soft bg-bg-raised/40 px-5 py-2">
              <p className="text-[11.5px] leading-snug text-ink-dim">
                {subject.intro}{" "}
                <span className="text-ink-faint">
                  Click any moment to open it. Colour is the thread, shape is how we came to
                  know it, and an amber dot means the result was not what anyone ordered.
                </span>
              </p>
            </div>
          )}

          {lineage && selected && (
            <div className="flex items-center gap-4 border-b border-line-soft bg-bg-raised/40 px-5 py-2 text-[11.5px]">
              <span className="flex items-center gap-1.5 text-ink-dim">
                <span className="h-2.5 w-2.5 rounded-sm border border-[#f0b429]" />
                rests on {upstream.size}
              </span>
              <span className="flex items-center gap-1.5 text-ink-dim">
                <span className="h-2.5 w-2.5 rounded-sm border border-[#34d399]" />
                led to {downstream.size}
              </span>
              <span className="text-ink-faint">
                {upstream.size + downstream.size + 1} of {subject.nodes.length} moments are
                connected to this one.
              </span>
            </div>
          )}

          <GraphCanvas
            ref={scrollRef}
            subject={subject}
            layout={layout}
            state={{ selectedId, hoverId, matched, upstream, downstream, lineage }}
            onSelect={(id) => {
              setTourStep(null);
              select(id);
            }}
            onHover={setHoverId}
          />

          {tour && (
            <div className="fade-up flex items-center gap-4 border-t border-line bg-bg-raised px-5 py-3">
              <span className="font-mono text-[11px] text-ink-faint">
                {String(tourStep! + 1).padStart(2, "0")} / {subject.tour.length}
              </span>
              <p className="flex-1 text-[12.5px] leading-relaxed text-ink-dim">{tour.beat}</p>
              <div className="flex shrink-0 gap-1.5">
                <button
                  type="button"
                  onClick={() => stepTour(-1)}
                  disabled={tourStep === 0}
                  className="rounded-md border border-line bg-bg-chip px-3 py-1.5 text-[11px] text-ink-dim transition-colors hover:text-ink disabled:opacity-35"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => stepTour(1)}
                  className="rounded-md border border-sky-500/40 bg-sky-500/10 px-3 py-1.5 text-[11px] text-sky-300 transition-colors hover:bg-sky-500/20"
                >
                  {tourStep === subject.tour.length - 1 ? "Finish" : "Next →"}
                </button>
              </div>
            </div>
          )}
        </div>

        {selected && (
          <DetailPanel
            node={selected}
            subject={subject}
            index={index}
            upstreamCount={upstream.size}
            downstreamCount={downstream.size}
            onSelect={selectFromPanel}
            onClose={() => {
              setSelectedId(null);
              setTourStep(null);
            }}
          />
        )}
      </div>
    </div>
  );
}
