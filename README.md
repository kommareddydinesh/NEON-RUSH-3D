# ⚡ NEON RUSH — 3D Cyberpunk Endless Runner

A browser-based **3D endless runner game** built with **HTML5, CSS3, vanilla JavaScript, Three.js, and Vite**. Race through a futuristic neon city, dodge obstacles, collect coins, and challenge yourself to beat your highest score.

> 🎮 No Unity, Unreal Engine, Godot, paid assets, or downloaded 3D models required.

## ✨ Features

- 🏃 **Three-Lane Gameplay** — Switch lanes, jump, and slide to avoid obstacles.
- 🌆 **Procedural 3D Environment** — Futuristic player and neon city created using code.
- 🚧 **Dynamic Obstacles** — Navigate barriers and other hazards.
- 🪙 **Collectibles** — Collect coins and energy pickups during your run.
- 💥 **Collision Detection** — React to hazards and collectible interactions.
- 📈 **Progressive Difficulty** — Experience increasing speed as the run continues.
- 🏆 **Score System** — Track your score, coin count, and saved best score.
- ⏯️ **Game States** — Start screen, pause, game over, restart, and title screens.
- 🎹 **Keyboard Controls** — Play using keyboard shortcuts.
- 📱 **Mobile Controls** — On-screen buttons and swipe gestures.
- 🔊 **Generated Sound Effects** — Audio effects created using the Web Audio API.
- 📐 **Responsive Interface** — Layout and renderer adapt to window resizing.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling and responsive UI |
| JavaScript | Gameplay and game logic |
| Three.js | 3D rendering and scene management |
| Vite | Development server and production build |
| npm | Dependency management |
| Web Audio API | Generated sound effects |
| localStorage | Persistent best-score storage |

## 🎮 Controls

| Action | Controls |
|---|---|
| Move left | `←` or `A` |
| Move right | `→` or `D` |
| Jump | `↑`, `W`, or `Space` |
| Slide | `↓` or `S` |
| Pause / Resume | `P` or `Escape` |
| Mobile gameplay | On-screen controls or swipe gestures |

*Note: Controls depend on the bindings configured in the source code.*

## 💻 Requirements

- [Node.js](https://nodejs.org/) — Version **20.19+ or 22.12+** recommended for Vite 7.
- npm — Included with Node.js.
- [Visual Studio Code](https://code.visualstudio.com/) — Recommended editor.
- A modern browser with WebGL support.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/kommareddydinesh/NEON-RUSH-3D.git
```

Replace `YOUR-USERNAME` with your GitHub username.

### 2. Open the project folder

```bash
cd NEON-RUSH-3D
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Play the game

Open the local URL displayed in your terminal. Vite commonly uses:

`http://localhost:5173`

## 📦 Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The production files are generated in the `dist/` directory.

**Note:** NEON RUSH is a browser game, not a native Windows `.exe` application.

## 📁 Project Structure

```text
NEON-RUSH-3D/
├── index.html
├── package.json
├── README.md
└── src/
    ├── main.js
    ├── style.css
    └── game/
        ├── Game.js
        ├── Player.js
        ├── World.js
        ├── ObstacleManager.js
        └── UI.js
```

- **`main.js`** — Application entry point.
- **`Game.js`** — Game loop and overall game state.
- **`Player.js`** — Player movement and actions.
- **`World.js`** — 3D environment, camera, and lighting.
- **`ObstacleManager.js`** — Obstacles and collectible management.
- **`UI.js`** — Menus, HUD, and interface interactions.
- **`style.css`** — Visual styling and responsive layout.

## 🧠 Core Concepts

NEON RUSH demonstrates several game development concepts:

- Real-time rendering and animation loops.
- Keyboard and touch input handling.
- Three-lane movement and player actions.
- Collision detection and object interactions.
- Procedural object spawning.
- Score tracking and difficulty progression.
- Game-state management.
- Browser-based persistent storage.

## 🧪 Testing Checklist

- [ ] Game starts and renders correctly.
- [ ] Lane switching works as expected.
- [ ] Jump and slide controls respond correctly.
- [ ] Obstacles trigger the correct collision behavior.
- [ ] Coins and energy pickups work as intended.
- [ ] Score and best-score tracking work correctly.
- [ ] Pause, resume, and restart work correctly.
- [ ] Mobile controls are usable.
- [ ] Production build completes successfully.

*Run these tests before marking them as completed.*

## 🔮 Future Enhancements

- Multiple playable characters and unlockable skins.
- Additional environments and obstacle patterns.
- New power-ups, missions, and challenges.
- Enhanced soundtrack and sound design.
- Online leaderboards and cloud-based score storage.
- Performance optimizations and automated tests.
- Progressive Web App support.

## 👨‍💻 Project Information

**Project:** NEON RUSH — 3D Cyberpunk Endless Runner  
**Category:** Web Development / 3D Game Development  
**Rendering Library:** Three.js  
**Build Tool:** Vite

## 📄 License

Add a license file if you intend to distribute the project publicly. If you have not selected a license, do not assume that others have permission to reuse or redistribute your code.

---

⭐ **Enjoying NEON RUSH?** Star the repository on GitHub if you find the project interesting!