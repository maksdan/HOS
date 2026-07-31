/**
 * HOS — History of Science, as a web rather than a list.
 *
 * The unit of the graph is a *moment*: an experiment, an instrument, an idea,
 * or an observation. Moments are connected by *links* that say what one moment
 * did to another — enabled it, explained it, predicted it, or broke it.
 *
 * The schema is deliberately opinionated. Every node has to answer four
 * questions, because those four questions are the story we want to tell:
 *
 *   question  — what were they actually trying to find out?
 *   expected  — what did the reigning picture say should happen?
 *   found     — what happened.
 *   surprise  — the gap between the last two, when there was one.
 */

export type NodeKind =
  | "idea" // argued for, not measured
  | "experiment" // someone did a thing and watched
  | "observation" // noticed in nature or in passing
  | "instrument" // a new way of seeing
  | "theory" // a formal account with consequences
  | "synthesis"; // pulling scattered results into one frame

export type TrackId =
  | "philosophy"
  | "matter"
  | "rays"
  | "quantum"
  | "nucleus"
  | "deeper";

export interface Track {
  id: TrackId;
  label: string;
  blurb: string;
  color: string; // hex, tuned for the dark canvas
}

export interface Source {
  label: string;
  url: string;
}

export interface MomentNode {
  id: string;
  title: string;
  /** Numeric year used for layout. Negative = BCE. */
  year: number;
  /** How the year is shown to a human ("c. 440 BCE", "1911", "1925–26"). */
  displayYear?: string;
  people: string[];
  place?: string;
  kind: NodeKind;
  track: TrackId;

  /** One line. Shown on the card and in search results. */
  summary: string;

  question: string;
  expected: string;
  found: string;
  /** Only when the result genuinely blindsided people. Drives the "surprises" filter. */
  surprise?: string;
  meaning: string;

  quote?: { text: string; by: string };
  sources?: Source[];
  tags?: string[];
}

export type LinkKind =
  | "enabled" // A gave B the tool, technique, or number it needed
  | "explained" // B accounts for A's stubborn data
  | "predicted" // A said B would happen before anyone looked
  | "contradicted" // B broke A
  | "refined" // B kept A's core and fixed its edges
  | "motivated"; // A raised the question B set out to answer

export interface Link {
  from: string;
  to: string;
  kind: LinkKind;
  /** Why this edge exists, in one sentence. Shown on hover and in the panel. */
  note: string;
}

export interface Subject {
  id: string;
  title: string;
  tagline: string;
  intro: string;
  tracks: Track[];
  nodes: MomentNode[];
  links: Link[];
  /** An ordered walk through the subject for first-time visitors. */
  tour: { nodeId: string; beat: string }[];
}

export const LINK_STYLES: Record<
  LinkKind,
  { label: string; verbIn: string; verbOut: string; color: string; dash?: string }
> = {
  enabled: {
    label: "enabled",
    verbOut: "made possible",
    verbIn: "was made possible by",
    color: "#64748b",
  },
  explained: {
    label: "explained",
    verbOut: "explains",
    verbIn: "was explained by",
    color: "#38bdf8",
  },
  predicted: {
    label: "predicted",
    verbOut: "predicted",
    verbIn: "confirmed",
    color: "#34d399",
    dash: "1 6",
  },
  contradicted: {
    label: "contradicted",
    verbOut: "broke",
    verbIn: "was broken by",
    color: "#fb7185",
    dash: "7 5",
  },
  refined: {
    label: "refined",
    verbOut: "was refined into",
    verbIn: "refines",
    color: "#a78bfa",
  },
  motivated: {
    label: "motivated",
    verbOut: "raised the question behind",
    verbIn: "set out to answer",
    color: "#f0b429",
    dash: "2 5",
  },
};

export const KIND_LABELS: Record<NodeKind, string> = {
  idea: "Idea",
  experiment: "Experiment",
  observation: "Observation",
  instrument: "Instrument",
  theory: "Theory",
  synthesis: "Synthesis",
};
