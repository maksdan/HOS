# HOS — History of Science

A web of experiments, instruments and theories, arranged as a **dependency graph** rather than a timeline. The first subject is **the story of the atom**, from an argument in Abdera around 440 BCE to a photograph of a hydrogen wavefunction in 2013.

It exists to make three things visible that a chronological list flattens out:

1. **Theory A required the results of theory B.** Bohr's atom is unbuildable without Rutherford's nucleus, Planck's constant, Thomson's electron and Balmer's numbers. Select any moment and the app traces everything it rests on and everything it led to.
2. **Experiments produce surprises.** 28 of the 55 moments record a result that blindsided the people who produced it — Becquerel's cloudy week, Marsden's backscattered alphas, the liquid-air bottle that broke at Bell Labs. They are marked and filterable.
3. **Science does not advance the way summaries suggest.** Right answers arrive a century early and get ignored (Bernoulli, 1738). A wrong ordering principle makes correct predictions for forty-four years (Mendeleev). Discoverers refuse to state their own results (Hahn on fission).

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run check      # data integrity + lint + typecheck
```

## Using it

| | |
|---|---|
| **Click** a moment | opens the full account in the side panel |
| **Hover** a moment | lights up its direct links only |
| **Trace lineage** | on selection, amber = everything upstream, green = everything downstream |
| **Guided tour** | a 13-step walk through the argument the graph is making |
| **Surprises** | filters to results nobody expected |
| `/` | focus search · `Esc` deselect · `←` `→` step the tour |

Horizontal position is time, on a deliberately non-linear scale — two millennia are compressed to a few hundred pixels so that 1895–1932 can be given room. Colour is the thread; shape is *how we came to know it* (argued, noticed, measured, built, derived, synthesised).

## Structure

```
src/data/types.ts          schema — every node must answer question/expected/found/meaning
src/data/atom/
  nodes-early.ts           antiquity → 1899
  nodes-modern.ts          1900 → present
  links.ts                 89 edges: enabled / explained / predicted / contradicted / refined / motivated
  index.ts                 tracks, intro, guided tour
src/lib/layout.ts          piecewise time scale, swimlane packing, edge curves
src/lib/graph.ts           adjacency, transitive lineage, validation
src/components/            Explorer (state) → GraphCanvas · DetailPanel · Legend
scripts/check-data.ts      catches typo'd ids, orphan nodes, empty fields
```

### Adding a subject

`Subject` is the unit of the app — tracks, nodes, links and a tour. Add a directory under `src/data/`, export a `Subject`, and register it in the `subjects` array. `Explorer` takes a subject as a prop and everything else is derived, so a second subject needs no changes to the layout or the components. Candidates with the same shape: heredity and the gene, germ theory, plate tectonics, the age of the Earth.

### Adding a moment

The schema is opinionated on purpose. Every node has to answer:

- `question` — what were they actually trying to find out?
- `expected` — what did the reigning picture say should happen?
- `found` — what happened.
- `surprise` — only when the gap between those two genuinely blindsided people. Not every result gets one, and that restraint is what makes the marker mean something.
- `meaning` — what it changed.

Then write the **links**, which are the actual content. Each carries a `note` justifying why the edge exists. A node with no links in or out fails `npm run check:data`.

## Accuracy

Dates, attributions and figures are drawn from standard histories, and each moment links out for further reading. Where a familiar story is disputed or embellished the text says so — Rutherford's tissue-paper line is given as he told it years later, Millikan's excluded oil-drop runs are noted, and Meitner's exclusion from the Nobel is stated rather than smoothed over. Corrections welcome as issues.

## Stack

Next.js 16 (App Router), React 19, Tailwind CSS 4, TypeScript. No runtime data fetching and no client-side graph library — the layout is deterministic and computed from the data at render.
