"use client";

import type { Link, MomentNode, Subject } from "@/data/types";
import { KIND_LABELS, LINK_STYLES } from "@/data/types";
import type { GraphIndex } from "@/lib/graph";
import { KindGlyph } from "./KindGlyph";

function Field({
  label,
  children,
  accent,
}: {
  label: string;
  children: React.ReactNode;
  accent?: string;
}) {
  return (
    <div className="border-l-2 pl-3" style={{ borderColor: accent ?? "var(--line)" }}>
      <div
        className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em]"
        style={{ color: accent ?? "var(--ink-faint)" }}
      >
        {label}
      </div>
      <p className="text-[13px] leading-relaxed text-ink-dim">{children}</p>
    </div>
  );
}

function LinkRow({
  link,
  other,
  direction,
  subject,
  onSelect,
}: {
  link: Link;
  other: MomentNode;
  direction: "in" | "out";
  subject: Subject;
  onSelect: (id: string) => void;
}) {
  const style = LINK_STYLES[link.kind];
  const track = subject.tracks.find((t) => t.id === other.track)!;
  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(other.id)}
        className="group w-full rounded-md border border-line-soft bg-bg-chip/50 p-2.5 text-left transition-colors hover:border-line hover:bg-bg-chip"
      >
        <div className="flex items-center gap-1.5">
          <span
            className="font-mono text-[9.5px] uppercase tracking-wider"
            style={{ color: style.color }}
          >
            {/* Both read as "this moment <verb> that one". */}
            {direction === "in" ? style.verbIn : style.verbOut}
          </span>
        </div>
        <div className="mt-1 flex items-start gap-1.5">
          <span className="mt-[3px]">
            <KindGlyph kind={other.kind} color={track.color} />
          </span>
          <span className="text-[12.5px] font-medium leading-snug text-ink group-hover:text-white">
            {other.title}
            <span className="ml-1.5 font-mono text-[10px] text-ink-faint">
              {other.displayYear ?? other.year}
            </span>
          </span>
        </div>
        <p className="mt-1.5 text-[11.5px] leading-relaxed text-ink-faint">{link.note}</p>
      </button>
    </li>
  );
}

export function DetailPanel({
  node,
  subject,
  index,
  upstreamCount,
  downstreamCount,
  onSelect,
  onClose,
}: {
  node: MomentNode;
  subject: Subject;
  index: GraphIndex;
  upstreamCount: number;
  downstreamCount: number;
  onSelect: (id: string) => void;
  onClose: () => void;
}) {
  const track = subject.tracks.find((t) => t.id === node.track)!;
  const nodesById = new Map(subject.nodes.map((n) => [n.id, n]));
  const incoming = index.incoming.get(node.id) ?? [];
  const outgoing = index.outgoing.get(node.id) ?? [];

  return (
    <aside
      key={node.id}
      className="thin-scroll fade-up flex w-[400px] shrink-0 flex-col overflow-y-auto border-l border-line bg-bg-raised"
    >
      <div className="sticky top-0 z-10 border-b border-line bg-bg-raised/95 px-5 py-4 backdrop-blur">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <KindGlyph kind={node.kind} color={track.color} size={12} />
            <span
              className="text-[10px] font-semibold uppercase tracking-[0.15em]"
              style={{ color: track.color }}
            >
              {KIND_LABELS[node.kind]} · {track.label}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="-mr-1 -mt-1 rounded p-1 text-ink-faint transition-colors hover:text-ink"
            aria-label="Close panel"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <h2 className="mt-2 text-[19px] font-semibold leading-tight text-ink">{node.title}</h2>
        <div className="mt-1.5 flex flex-wrap items-baseline gap-x-2 gap-y-0.5 font-mono text-[11px] text-ink-faint">
          <span className="text-ink-dim">{node.displayYear ?? node.year}</span>
          <span>·</span>
          <span>{node.people.join(", ")}</span>
          {node.place && (
            <>
              <span>·</span>
              <span>{node.place}</span>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4 px-5 py-5">
        <p className="text-[13.5px] leading-relaxed text-ink">{node.summary}</p>

        <div className="flex flex-col gap-3.5">
          <Field label="The question">{node.question}</Field>
          <Field label="What was expected">{node.expected}</Field>
          <Field label="What happened" accent={track.color}>
            {node.found}
          </Field>
          {node.surprise && (
            <Field label="The surprise" accent="#f0b429">
              {node.surprise}
            </Field>
          )}
          <Field label="Why it mattered">{node.meaning}</Field>
        </div>

        {node.quote && (
          <blockquote className="rounded-md border border-line-soft bg-bg-chip/50 px-4 py-3">
            <p className="text-[13px] italic leading-relaxed text-ink-dim">
              “{node.quote.text}”
            </p>
            <footer className="mt-1.5 font-mono text-[10.5px] text-ink-faint">
              — {node.quote.by}
            </footer>
          </blockquote>
        )}

        {incoming.length > 0 && (
          <section>
            <h3 className="mb-2 flex items-baseline gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-dim">
              Rests on
              <span className="font-mono text-[10px] font-normal normal-case tracking-normal text-ink-faint">
                {incoming.length} direct · {upstreamCount} in total upstream
              </span>
            </h3>
            <ul className="flex flex-col gap-1.5">
              {incoming.map((link, i) => {
                const other = nodesById.get(link.from);
                if (!other) return null;
                return (
                  <LinkRow
                    key={`${link.from}-${i}`}
                    link={link}
                    other={other}
                    direction="in"
                    subject={subject}
                    onSelect={onSelect}
                  />
                );
              })}
            </ul>
          </section>
        )}

        {outgoing.length > 0 && (
          <section>
            <h3 className="mb-2 flex items-baseline gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-dim">
              Led to
              <span className="font-mono text-[10px] font-normal normal-case tracking-normal text-ink-faint">
                {outgoing.length} direct · {downstreamCount} downstream
              </span>
            </h3>
            <ul className="flex flex-col gap-1.5">
              {outgoing.map((link, i) => {
                const other = nodesById.get(link.to);
                if (!other) return null;
                return (
                  <LinkRow
                    key={`${link.to}-${i}`}
                    link={link}
                    other={other}
                    direction="out"
                    subject={subject}
                    onSelect={onSelect}
                  />
                );
              })}
            </ul>
          </section>
        )}

        {node.sources && node.sources.length > 0 && (
          <section className="border-t border-line-soft pt-4">
            <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-faint">
              Read further
            </h3>
            <ul className="flex flex-col gap-1">
              {node.sources.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[12px] text-sky-400 underline-offset-2 hover:underline"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </aside>
  );
}
