/**
 * Integrity check for subject data. Run with `npm run check:data`.
 *
 * The graph is hand-authored, so the failure mode is a typo'd node id in a
 * link, which would silently drop an edge from the canvas rather than throw.
 * This catches that, plus a few editorial rules worth enforcing.
 */
import { atomSubject } from "../src/data/atom/index";
import { validate } from "../src/lib/graph";
import type { Subject } from "../src/data/types";

const problems: string[] = [];

function check(subject: Subject) {
  problems.push(...validate(subject).map((p) => `${subject.id}: ${p}`));

  const trackIds = new Set(subject.tracks.map((t) => t.id));
  const ids = new Set(subject.nodes.map((n) => n.id));

  for (const node of subject.nodes) {
    const where = `${subject.id}/${node.id}`;
    if (!trackIds.has(node.track)) problems.push(`${where}: unknown track "${node.track}"`);
    if (!node.people.length) problems.push(`${where}: no people credited`);
    for (const field of ["question", "expected", "found", "meaning", "summary"] as const) {
      if (!node[field]?.trim()) problems.push(`${where}: empty "${field}"`);
    }
    for (const source of node.sources ?? []) {
      if (!/^https?:\/\//.test(source.url))
        problems.push(`${where}: source url is not absolute — ${source.url}`);
    }
  }

  // Every node should be reachable from somewhere; an island is almost always
  // an edge someone forgot to write rather than a genuine orphan.
  const connected = new Set<string>();
  for (const link of subject.links) {
    connected.add(link.from);
    connected.add(link.to);
  }
  for (const id of ids) {
    if (!connected.has(id)) problems.push(`${subject.id}/${id}: no links in or out`);
  }

  const seen = new Set<string>();
  for (const link of subject.links) {
    const key = `${link.from}->${link.to}:${link.kind}`;
    if (seen.has(key)) problems.push(`${subject.id}: duplicate link ${key}`);
    seen.add(key);
    if (link.from === link.to) problems.push(`${subject.id}: self-link on ${link.from}`);
  }

  const surprises = subject.nodes.filter((n) => n.surprise).length;
  console.log(
    `${subject.title}: ${subject.nodes.length} moments, ${subject.links.length} links, ` +
      `${surprises} surprises, ${subject.tracks.length} tracks, ${subject.tour.length} tour steps`,
  );
}

check(atomSubject);

if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  for (const p of problems) console.error(`  · ${p}`);
  process.exit(1);
}
console.log("data ok");
