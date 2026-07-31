import type { MomentNode, Subject, TrackId } from "@/data/types";

/**
 * Real time is a terrible x-axis for this story: nothing happens for two
 * millennia and then everything happens between 1895 and 1932. So the scale is
 * piecewise — dead centuries are compressed, the crowded decades are stretched.
 * The axis is still monotonic, so "further right" always means "later".
 */
const SEGMENTS: { from: number; to: number; pxPerYear: number }[] = [
  // Antiquity gets real room so the three surviving arguments don't stack, and
  // the millennium and a half after it stays visibly, pointedly empty.
  { from: -500, to: -40, pxPerYear: 1.85 },
  { from: -40, to: 1600, pxPerYear: 0.055 },
  { from: 1600, to: 1780, pxPerYear: 1.6 },
  { from: 1780, to: 1860, pxPerYear: 4.2 },
  { from: 1860, to: 1895, pxPerYear: 9 },
  { from: 1895, to: 1935, pxPerYear: 56 },
  { from: 1935, to: 1975, pxPerYear: 13 },
  { from: 1975, to: 2030, pxPerYear: 9 },
];

const PAD_LEFT = 130;

export const CHIP_W = 152;
export const CHIP_H = 30;
export const ROW_H = 36;
export const TRACK_GAP = 12;
export const TRACK_HEADER = 18;
export const CANVAS_TOP = 42;

export function yearToX(year: number): number {
  let x = PAD_LEFT;
  for (const seg of SEGMENTS) {
    if (year <= seg.from) break;
    const span = Math.min(year, seg.to) - seg.from;
    x += span * seg.pxPerYear;
  }
  return Math.round(x);
}

export const CANVAS_WIDTH = yearToX(2030) + 120;

export interface PositionedNode extends MomentNode {
  x: number; // left edge of the chip
  y: number; // top edge of the chip
  cx: number; // centre, for edge anchoring
  cy: number;
  row: number;
}

export interface TrackBand {
  id: TrackId;
  label: string;
  blurb: string;
  color: string;
  top: number;
  height: number;
  rows: number;
}

export interface AxisTick {
  x: number;
  label: string;
  major: boolean;
}

export interface Layout {
  nodes: PositionedNode[];
  byId: Map<string, PositionedNode>;
  bands: TrackBand[];
  ticks: AxisTick[];
  width: number;
  height: number;
}

const TICK_YEARS: { year: number; label: string; major?: boolean }[] = [
  { year: -440, label: "440 BCE", major: true },
  { year: 1, label: "year 1" },
  { year: 1600, label: "1600", major: true },
  { year: 1700, label: "1700" },
  { year: 1800, label: "1800", major: true },
  { year: 1860, label: "1860" },
  { year: 1890, label: "1890" },
  { year: 1900, label: "1900", major: true },
  { year: 1910, label: "1910" },
  { year: 1920, label: "1920" },
  { year: 1930, label: "1930" },
  { year: 1940, label: "1940" },
  { year: 1960, label: "1960" },
  { year: 1980, label: "1980" },
  { year: 2000, label: "2000", major: true },
  { year: 2020, label: "2020" },
];

/**
 * Greedy sub-row packing inside each track: walk the track's nodes left to
 * right and drop each one into the topmost row where it does not collide.
 */
export function computeLayout(subject: Subject): Layout {
  const bands: TrackBand[] = [];
  const positioned: PositionedNode[] = [];
  let cursor = CANVAS_TOP;

  for (const track of subject.tracks) {
    const members = subject.nodes
      .filter((n) => n.track === track.id)
      .sort((a, b) => a.year - b.year || a.id.localeCompare(b.id));

    const rowEnds: number[] = [];
    const placed: { node: MomentNode; x: number; row: number }[] = [];

    for (const node of members) {
      const x = yearToX(node.year);
      let row = rowEnds.findIndex((end) => x >= end + 10);
      if (row === -1) {
        row = rowEnds.length;
        rowEnds.push(0);
      }
      rowEnds[row] = x + CHIP_W;
      placed.push({ node, x, row });
    }

    const rows = Math.max(rowEnds.length, 1);
    const top = cursor + TRACK_HEADER;

    for (const { node, x, row } of placed) {
      const y = top + row * ROW_H;
      positioned.push({
        ...node,
        x,
        y,
        row,
        cx: x + CHIP_W / 2,
        cy: y + CHIP_H / 2,
      });
    }

    const height = TRACK_HEADER + rows * ROW_H;
    bands.push({
      id: track.id,
      label: track.label,
      blurb: track.blurb,
      color: track.color,
      top: cursor,
      height,
      rows,
    });
    cursor += height + TRACK_GAP;
  }

  return {
    nodes: positioned,
    byId: new Map(positioned.map((n) => [n.id, n])),
    bands,
    ticks: TICK_YEARS.map((t) => ({
      x: yearToX(t.year),
      label: t.label,
      major: Boolean(t.major),
    })),
    width: CANVAS_WIDTH,
    height: cursor + 20,
  };
}

/**
 * Edges are anchored at chip centres and bowed so that parallel runs between
 * the same pair of tracks stay visually distinguishable. Backwards-in-time
 * edges (a later result overturning an earlier claim) get a deeper bow so they
 * read as exceptional, which they are.
 */
export function edgePath(a: PositionedNode, b: PositionedNode): string {
  const backwards = b.cx < a.cx;
  const dx = b.cx - a.cx;
  const dy = b.cy - a.cy;
  const dist = Math.hypot(dx, dy);
  const bow = backwards ? Math.min(120, 40 + dist * 0.16) : Math.min(70, 18 + dist * 0.09);
  const mx = (a.cx + b.cx) / 2;
  const my = (a.cy + b.cy) / 2 - (dy >= 0 ? bow : -bow) * (backwards ? -1 : 1);
  return `M ${a.cx} ${a.cy} Q ${mx} ${my} ${b.cx} ${b.cy}`;
}
