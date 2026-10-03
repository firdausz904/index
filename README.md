# World Globe Explorer

Frontend-only interactive 3D country explorer inspired by the supplied futuristic globe reference.

## Stack

- React + TypeScript + Vite
- Three.js
- react-globe.gl
- TopoJSON / world-atlas

## Features

- Real world country boundaries
- 3D WebGL globe
- Drag to rotate
- Scroll/pinch to zoom
- Auto rotation when idle
- Hover country name
- Click country to select
- Selected country highlight
- Minimal futuristic country information overlay
- Star-field background
- No backend
- No database
- No external runtime API calls

## Run

Requirements: Node.js 20+

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Build

```bash
npm run build
npm run preview
```

## Notes

The country geometry comes from the `world-atlas` package and is converted from TopoJSON in the browser. The sample country metadata in `src/data/countries.ts` is intentionally local and can be expanded or replaced with a complete static dataset later.
