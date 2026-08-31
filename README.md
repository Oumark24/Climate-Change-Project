# Climate Fair Share

An interactive version of a research essay arguing that wealthy individuals and large corporations should pay more toward climate costs, built with React 19, TypeScript, Tailwind 4 and Vite.

Instead of publishing the essay as a document, the argument is turned into something you can poke at: the three policy proposals are a tabbed comparison, and the revenue argument is a live slider model.

**Live site:** https://oumark24.github.io/Climate-Change-Project/

## What it does

- **Policy comparison** — `carbon` (a carbon tax on pollution), `wealth` (higher taxes on high emitters) and `corporate` (polluter payments) are keyed by a `PolicyKey` union type and swapped in place, each with its rationale and its concrete effects, so the three proposals can be read against each other rather than in sequence.
- **Interactive revenue sketch** — two range inputs, carbon price ($20–150/ton) and emissions covered (5–50M tons), feeding `revenue = taxRate * emissions` through a `useMemo`. It's labelled as a sketch, not a forecast: it shows the order of magnitude of funding a carbon price produces, which is the essay's actual claim.
- **Cited statistics** — the 40% / 1% / 66% emissions-inequality figures each carry their source (UMass Amherst via ScienceDaily 2023, Oxfam 2023), and a sources section lists the full citations with a plain-English note on what each source is being used to support.
- **Sections on where revenue goes** — renewable energy, public transportation, and climate resilience.

## Why it's built this way

The point of the project was to make an argument navigable. A reader who doubts the revenue claim can move the sliders; a reader who wants the sourcing can read the citations next to the numbers they support. Every statistic on the page is attributed, because it's a research project — no figure appears without its source.

Tailwind 4 is used through the Vite plugin (no separate config file), and the entire page is one `App.tsx` component with the content as typed data structures at the top — a page this size doesn't benefit from being split apart.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run lint     # eslint
npm run build    # tsc -b && vite build
```

## Deployment

`.github/workflows/static.yml` runs `npm ci && npm run build` on every push to `main` and publishes `dist/` to GitHub Pages. `vite.config.ts` sets `base: './'` so the built asset URLs resolve under the project subpath.

## Layout

| Path | Purpose |
| --- | --- |
| `src/App.tsx` | Whole page — policy data, sources, revenue model, layout |
| `src/main.tsx` | React entry point |
| `index.html` | Document shell |
| `public/` | Favicon and static assets copied verbatim into the build |
| `vite.config.ts` | Vite + React + Tailwind 4 |
| `eslint.config.js` | Flat ESLint config with react-hooks rules |

## Sources

- Nader, Ralph, and Toby Heaps. "A Carbon Tax Will Help Curb Global Warming." *Global Warming*, edited by David Haugen et al., Greenhaven Press, 2010. Opposing Viewpoints, Gale In Context.
- "America's Wealthiest 10% Responsible for 40% of US Greenhouse Gas Emissions." *ScienceDaily*, University of Massachusetts Amherst, 18 Aug. 2023.
