# Drift

A dark, violet-accented maps app — design-led mobile UI built with Vite + React + TypeScript + Tailwind v4 + Leaflet.

## Stack
- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (`@theme` tokens for colors / fonts)
- React Router v7
- Leaflet + React-Leaflet (CARTO Dark Matter tiles, no API key)
- Lucide icons, Plus Jakarta Sans

## Run
```bash
pnpm install
pnpm dev
```

## Screens
- `/` — Login (matches inspiration exactly)
- `/register` — Sign up
- `/app/map` — Dark map, search, category chips, bottom sheet, FAB
- `/app/saved` — Collections + saved places
- `/app/profile` — Profile & settings

## Design tokens
Defined in `src/index.css` under `@theme`. Core palette: `#0B0B12` background, `#6C5CE7` violet accent.
