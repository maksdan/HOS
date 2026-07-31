"use client";

import { useState } from "react";
import { KIND_LABELS, LINK_STYLES, type NodeKind } from "@/data/types";
import { KindGlyph } from "./KindGlyph";

const KINDS: NodeKind[] = [
  "idea",
  "observation",
  "experiment",
  "instrument",
  "theory",
  "synthesis",
];

export function Legend() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="rounded-md border border-line bg-bg-chip px-2.5 py-1.5 text-[11px] text-ink-dim transition-colors hover:border-ink-faint hover:text-ink"
        aria-expanded={open}
      >
        Legend
      </button>
      {open && (
        <div className="fade-up absolute right-0 top-full z-50 mt-2 w-[320px] rounded-lg border border-line bg-bg-raised p-4 shadow-2xl shadow-black/60">
          <div className="mb-3">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink-faint">
              Shape — how we came to know it
            </div>
            <ul className="grid grid-cols-2 gap-1.5">
              {KINDS.map((k) => (
                <li key={k} className="flex items-center gap-2 text-[11.5px] text-ink-dim">
                  <KindGlyph kind={k} color="#8ea3c4" />
                  {KIND_LABELS[k]}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-3">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink-faint">
              Edge — what one did to the other
            </div>
            <ul className="flex flex-col gap-1.5">
              {Object.entries(LINK_STYLES).map(([kind, style]) => (
                <li key={kind} className="flex items-center gap-2 text-[11.5px] text-ink-dim">
                  <svg width="26" height="8" aria-hidden className="shrink-0">
                    <line
                      x1="0"
                      y1="4"
                      x2="26"
                      y2="4"
                      stroke={style.color}
                      strokeWidth="1.6"
                      strokeDasharray={style.dash}
                    />
                  </svg>
                  <span>
                    <span style={{ color: style.color }}>{style.label}</span> — A{" "}
                    {style.verbOut} B
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-2 border-t border-line-soft pt-3 text-[11.5px] text-ink-dim">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#f0b429]" />
            The result blindsided the people who produced it
          </div>
        </div>
      )}
    </div>
  );
}
