import type { Link, Subject } from "@/data/types";

export interface GraphIndex {
  outgoing: Map<string, Link[]>;
  incoming: Map<string, Link[]>;
}

export function buildIndex(subject: Subject): GraphIndex {
  const outgoing = new Map<string, Link[]>();
  const incoming = new Map<string, Link[]>();
  for (const link of subject.links) {
    if (!outgoing.has(link.from)) outgoing.set(link.from, []);
    if (!incoming.has(link.to)) incoming.set(link.to, []);
    outgoing.get(link.from)!.push(link);
    incoming.get(link.to)!.push(link);
  }
  return { outgoing, incoming };
}

/** Everything this moment rests on, transitively. */
export function ancestors(index: GraphIndex, id: string): Set<string> {
  return walk(index.incoming, id, (l) => l.from);
}

/** Everything downstream that this moment made possible, transitively. */
export function descendants(index: GraphIndex, id: string): Set<string> {
  return walk(index.outgoing, id, (l) => l.to);
}

function walk(
  edges: Map<string, Link[]>,
  start: string,
  next: (l: Link) => string,
): Set<string> {
  const seen = new Set<string>();
  const queue = [start];
  while (queue.length) {
    const current = queue.pop()!;
    for (const link of edges.get(current) ?? []) {
      const id = next(link);
      if (!seen.has(id) && id !== start) {
        seen.add(id);
        queue.push(id);
      }
    }
  }
  return seen;
}

export function neighbours(index: GraphIndex, id: string): Set<string> {
  const set = new Set<string>();
  for (const l of index.outgoing.get(id) ?? []) set.add(l.to);
  for (const l of index.incoming.get(id) ?? []) set.add(l.from);
  return set;
}

/** Links where both endpoints are inside the given set, plus the seed's own links. */
export function linksWithin(subject: Subject, ids: Set<string>): Link[] {
  return subject.links.filter((l) => ids.has(l.from) && ids.has(l.to));
}

/**
 * Dev-time integrity check: every link must point at a node that exists.
 * A dangling id would silently vanish from the canvas otherwise.
 */
export function validate(subject: Subject): string[] {
  const ids = new Set(subject.nodes.map((n) => n.id));
  const problems: string[] = [];
  for (const link of subject.links) {
    if (!ids.has(link.from)) problems.push(`link from unknown node "${link.from}"`);
    if (!ids.has(link.to)) problems.push(`link to unknown node "${link.to}"`);
  }
  for (const step of subject.tour) {
    if (!ids.has(step.nodeId)) problems.push(`tour step for unknown node "${step.nodeId}"`);
  }
  const seen = new Set<string>();
  for (const node of subject.nodes) {
    if (seen.has(node.id)) problems.push(`duplicate node id "${node.id}"`);
    seen.add(node.id);
  }
  return problems;
}
