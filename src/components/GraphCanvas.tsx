"use client";

import { forwardRef, useMemo } from "react";
import type { Link, Subject } from "@/data/types";
import { LINK_STYLES } from "@/data/types";
import {
  CHIP_H,
  CHIP_W,
  edgePath,
  type Layout,
  type PositionedNode,
} from "@/lib/layout";
import { KindGlyph } from "./KindGlyph";

export type Emphasis = "selected" | "upstream" | "downstream" | "neighbour" | "match" | null;

export interface CanvasState {
  selectedId: string | null;
  hoverId: string | null;
  /** ids that survive the current filters; null means "no filter active" */
  matched: Set<string> | null;
  upstream: Set<string>;
  downstream: Set<string>;
  lineage: boolean;
}

const EMPHASIS_RING: Record<Exclude<Emphasis, null>, string> = {
  selected: "#ffffff",
  upstream: "#f0b429",
  downstream: "#34d399",
  neighbour: "#8ea3c4",
  match: "#38bdf8",
};

interface Props {
  subject: Subject;
  layout: Layout;
  state: CanvasState;
  onSelect: (id: string | null) => void;
  onHover: (id: string | null) => void;
}

export const GraphCanvas = forwardRef<HTMLDivElement, Props>(function GraphCanvas(
  { subject, layout, state, onSelect, onHover },
  ref,
) {
  const { selectedId, hoverId, matched, upstream, downstream, lineage } = state;
  const focusId = hoverId ?? selectedId;

  const activeLinks = useMemo(() => {
    if (!focusId) return new Set<Link>();
    const set = new Set<Link>();
    for (const l of subject.links) {
      if (l.from === focusId || l.to === focusId) set.add(l);
      else if (
        lineage &&
        selectedId &&
        !hoverId &&
        (upstream.has(l.from) || l.from === selectedId) &&
        (upstream.has(l.to) || l.to === selectedId)
      )
        set.add(l);
      else if (
        lineage &&
        selectedId &&
        !hoverId &&
        (downstream.has(l.from) || l.from === selectedId) &&
        (downstream.has(l.to) || l.to === selectedId)
      )
        set.add(l);
    }
    return set;
  }, [subject.links, focusId, lineage, selectedId, hoverId, upstream, downstream]);

  function emphasisFor(node: PositionedNode): Emphasis {
    if (node.id === selectedId) return "selected";
    if (lineage && selectedId) {
      if (upstream.has(node.id)) return "upstream";
      if (downstream.has(node.id)) return "downstream";
    }
    if (focusId && (upstreamOf(node.id) || downstreamOf(node.id))) return "neighbour";
    if (matched?.has(node.id)) return "match";
    return null;
  }

  function upstreamOf(id: string) {
    return subject.links.some((l) => l.to === focusId && l.from === id);
  }
  function downstreamOf(id: string) {
    return subject.links.some((l) => l.from === focusId && l.to === id);
  }

  const anyFocus = Boolean(focusId) || Boolean(matched);

  return (
    <div
      ref={ref}
      className="thin-scroll relative flex-1 overflow-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onSelect(null);
      }}
    >
      <div
        className="relative"
        style={{ width: layout.width, height: layout.height }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onSelect(null);
        }}
      >
        <svg
          width={layout.width}
          height={layout.height}
          className="absolute inset-0 pointer-events-none"
          aria-hidden
        >
          <defs>
            {Object.entries(LINK_STYLES).map(([kind, style]) => (
              <marker
                key={kind}
                id={`arrow-${kind}`}
                viewBox="0 0 8 8"
                refX="7"
                refY="4"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 7.5 4 L 0 7 z" fill={style.color} />
              </marker>
            ))}
          </defs>

          {/* Track bands */}
          {layout.bands.map((band) => (
            <g key={band.id}>
              <rect
                x={0}
                y={band.top}
                width={layout.width}
                height={band.height}
                fill={band.color}
                opacity={0.028}
              />
              <line
                x1={0}
                x2={layout.width}
                y1={band.top}
                y2={band.top}
                stroke={band.color}
                strokeOpacity={0.16}
              />
            </g>
          ))}

          {/* Time axis */}
          {layout.ticks.map((tick) => (
            <g key={tick.label}>
              <line
                x1={tick.x}
                x2={tick.x}
                y1={34}
                y2={layout.height - 8}
                stroke="#8ea3c4"
                strokeOpacity={tick.major ? 0.13 : 0.06}
                strokeDasharray={tick.major ? undefined : "2 7"}
              />
              <text
                x={tick.x}
                y={24}
                fill="#5f6b80"
                fontSize={10.5}
                textAnchor="middle"
                fontFamily="var(--font-geist-mono), monospace"
              >
                {tick.label}
              </text>
            </g>
          ))}

          {/* Edges */}
          <g>
            {subject.links.map((link, i) => {
              const a = layout.byId.get(link.from);
              const b = layout.byId.get(link.to);
              if (!a || !b) return null;
              const style = LINK_STYLES[link.kind];
              const hot = activeLinks.has(link);
              const opacity = hot ? 0.92 : anyFocus ? 0.04 : 0.18;
              return (
                <path
                  key={`${link.from}-${link.to}-${i}`}
                  d={edgePath(a, b)}
                  fill="none"
                  stroke={style.color}
                  strokeWidth={hot ? 1.7 : 1}
                  strokeOpacity={opacity}
                  strokeDasharray={style.dash}
                  markerEnd={hot ? `url(#arrow-${link.kind})` : undefined}
                  style={{ transition: "stroke-opacity 140ms, stroke-width 140ms" }}
                />
              );
            })}
          </g>
        </svg>

        {/* Zero-size sticky anchor: `left` only, so the labels pin horizontally
            while still scrolling vertically with the bands they name. */}
        <div className="sticky left-0 z-20 h-0 w-0">
          {layout.bands.map((band) => (
            <div key={band.id} className="absolute left-2" style={{ top: band.top + 3 }}>
              <div
                className="whitespace-nowrap rounded bg-bg/85 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] backdrop-blur-sm"
                style={{ color: band.color }}
              >
                {band.label}
              </div>
            </div>
          ))}
        </div>

        {/* Nodes */}
        {layout.nodes.map((node) => {
          const emphasis = emphasisFor(node);
          const track = subject.tracks.find((t) => t.id === node.track)!;
          const dimmed =
            (matched !== null && !matched.has(node.id) && node.id !== selectedId) ||
            (anyFocus && !emphasis);
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => onSelect(node.id === selectedId ? null : node.id)}
              onMouseEnter={() => onHover(node.id)}
              onMouseLeave={() => onHover(null)}
              onFocus={() => onHover(node.id)}
              onBlur={() => onHover(null)}
              title={`${node.displayYear ?? node.year} — ${node.title}`}
              aria-pressed={node.id === selectedId}
              className="group absolute z-10 flex items-start gap-1.5 rounded-md border px-1.5 py-1 text-left transition-[opacity,border-color,background-color] duration-150 hover:z-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              style={{
                left: node.x,
                top: node.y,
                width: CHIP_W,
                minHeight: CHIP_H,
                background: emphasis ? "#1b2331" : "var(--bg-chip)",
                borderColor: emphasis
                  ? EMPHASIS_RING[emphasis]
                  : "color-mix(in oklab, " + track.color + " 26%, transparent)",
                opacity: dimmed ? 0.22 : 1,
                boxShadow:
                  emphasis === "selected"
                    ? "0 0 0 1px #ffffff55, 0 6px 20px -6px #000"
                    : undefined,
              }}
            >
              <span className="mt-[3px]">
                <KindGlyph kind={node.kind} color={track.color} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[10.5px] font-medium leading-[1.25] text-ink line-clamp-2">
                  {node.title}
                </span>
                <span className="mt-0.5 block font-mono text-[9px] leading-none text-ink-faint">
                  {node.displayYear ?? node.year}
                </span>
              </span>
              {node.surprise && (
                <span
                  className="absolute -right-1 -top-1 h-2 w-2 rounded-full"
                  style={{ background: "#f0b429" }}
                  title="Result surprised the people who produced it"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
});
