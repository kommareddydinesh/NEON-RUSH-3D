# NEON RUSH — 3D Cyberpunk Endless Runner
A procedural 3D browser game built with HTML, CSS, vanilla JavaScript, Three.js, and Vite. No Unity, Unreal, Godot, paid assets, or downloaded models.

## Features
- Three-lane runner, lane changes, jump and slide
- Procedural player and neon city
- Obstacles, barriers, coins, energy pickups and collision detection
- Score, coin count, increasing speed and saved best score
- Start, pause, game-over, restart and title screens
- Keyboard, mobile buttons and swipe controls
- Generated sound effects via Web Audio API
- Responsive UI and resize-aware renderer

## Requirements
Install Node.js 20.19+ or 22.12+ (recommended for Vite 7), then open this folder in Visual Studio Code.

## Run
Open Terminal > New Terminal and execute:
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (commonly http://localhost:5173).

## Controls
- Left/Right arrows or A/D: change lane
- Up/W/Space: jump
- Down/S: slide
- P/Escape: pause/resume
- Mobile: on-screen controls or swipe

## Production build
```bash
npm run build
npm run preview
```
Build output is written to `dist/`. This is a browser game, not a native Windows .exe. Best score is stored in localStorage.