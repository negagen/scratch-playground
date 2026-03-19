import {addSprinkles, loadJsonSpaghetti} from './stress';
import {clamp, getNumber} from './ui';

export function bindControls(ScratchBlocks, workspace) {
  const sprinklesBtn = document.getElementById('sprinklesBtn');
  const startAutoBtn = document.getElementById('startAutoBtn');
  const stopAutoBtn = document.getElementById('stopAutoBtn');
  let autoSprinklesTimer = null;

  const runSprinkles = () => addSprinkles(workspace, clamp(getNumber('count', 100), 1, 400));
  const setRunning = (running) => {
    startAutoBtn.disabled = running;
    stopAutoBtn.disabled = !running;
    sprinklesBtn.disabled = running;
  };

  sprinklesBtn.addEventListener('click', runSprinkles);
  startAutoBtn.addEventListener('click', () => {
    if (autoSprinklesTimer !== null) return;
    const interval = clamp(getNumber('intervalMs', 500), 50, 5000);
    setRunning(true);
    runSprinkles();
    autoSprinklesTimer = window.setInterval(runSprinkles, interval);
  });
  stopAutoBtn.addEventListener('click', () => {
    if (autoSprinklesTimer === null) return;
    window.clearInterval(autoSprinklesTimer);
    autoSprinklesTimer = null;
    setRunning(false);
  });
  document.getElementById('jsonSpaghettiBtn').addEventListener('click', () => {
    loadJsonSpaghetti(ScratchBlocks, workspace, clamp(getNumber('depth', 3), 1, 8));
  });
  document.getElementById('clearBtn').addEventListener('click', () => workspace.clear());
}
