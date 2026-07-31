import type { NodeKind } from "@/data/types";

/**
 * Node shape encodes *how we know* — argued, built, measured, or noticed.
 * Colour is reserved for the track, so shape has to carry this on its own.
 */
export function KindGlyph({
  kind,
  color,
  size = 11,
}: {
  kind: NodeKind;
  color: string;
  size?: number;
}) {
  const s = size;
  const c = s / 2;
  const common = { fill: color, stroke: color, strokeWidth: 1.5 };

  return (
    <svg
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
      aria-hidden
      className="shrink-0 overflow-visible"
    >
      {kind === "experiment" && <circle cx={c} cy={c} r={c - 0.75} {...common} />}
      {kind === "idea" && (
        <circle cx={c} cy={c} r={c - 1.25} fill="none" stroke={color} strokeWidth={1.6} />
      )}
      {kind === "theory" && (
        <path
          d={`M ${c} 0.5 L ${s - 0.5} ${c} L ${c} ${s - 0.5} L 0.5 ${c} Z`}
          {...common}
        />
      )}
      {kind === "instrument" && (
        <rect x={1} y={1} width={s - 2} height={s - 2} rx={1.5} {...common} />
      )}
      {kind === "observation" && (
        <path d={`M ${c} 1 L ${s - 1} ${s - 1.5} L 1 ${s - 1.5} Z`} {...common} />
      )}
      {kind === "synthesis" && (
        <path
          d={`M ${c} 0.5 L ${s - 0.5} ${c * 0.62} L ${s - 0.5} ${c * 1.38} L ${c} ${s - 0.5} L 0.5 ${c * 1.38} L 0.5 ${c * 0.62} Z`}
          {...common}
        />
      )}
    </svg>
  );
}
