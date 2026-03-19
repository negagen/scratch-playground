# Scratch Blocks 2 Playground

This project is a test playground for `scratch-blocks` 2 with a Vite dev setup.

It includes:
- A minimal Scratch workspace mount
- Toolbox + theme setup based on example config
- Stress test controls (`Sprinkles`, auto sprinkles, and `JSON Spaghetti`)
- Media assets served from `/media/...` via `public/media`

## Getting started

```bash
yarn
yarn dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build

```bash
yarn build
yarn preview
```

## Project structure

- `src/main.js`: app bootstrap
- `src/workspace.js`: Scratch workspace creation
- `src/config.js`: colors, toolbox, and message fallbacks
- `src/stress.js`: stress/scenario generators
- `src/controls.js`: UI event wiring
- `public/media`: Scratch media assets (served at `/media`)
