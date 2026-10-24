import './style.css';
import { Game } from './game/Game.js';
import { UI } from './game/UI.js';
const game = new Game();
const ui = new UI(game);
game.setUI(ui);
ui.bind();
let lastTime = performance.now();
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min((now - lastTime) / 1000, 0.05);
  lastTime = now;
  game.update(dt);
  game.render();
}
requestAnimationFrame(frame);
window.addEventListener('resize', () => game.resize());
window.addEventListener('beforeunload', () => game.dispose());