<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# HOS

A dependency graph of the history of science; first subject is the atom. See README.md.

- All content lives in `src/data/<subject>/`. Nodes must fill `question / expected / found / meaning`; `surprise` only when the result genuinely blindsided people — it drives a filter, so overuse dilutes it.
- Links are the point of the project, not decoration. Every link needs a `note` justifying the dependency.
- Run `npm run check` after touching data: it catches dangling node ids, orphan nodes and empty fields, which otherwise fail silently by dropping edges from the canvas.
- Layout is deterministic (`src/lib/layout.ts`) — piecewise time scale plus greedy swimlane packing. Changing `CHIP_W`/`ROW_H` changes how many rows a track needs and therefore the canvas height.
