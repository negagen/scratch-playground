const appHtml = `
  <div id="controls">
    <label>Depth <input id="depth" type="number" min="1" max="8" value="3" /></label>
    <label>Count <input id="count" type="number" min="1" max="400" value="100" /></label>
    <label>Every ms <input id="intervalMs" type="number" min="50" max="5000" value="500" /></label>
    <button id="sprinklesBtn" type="button">Sprinkles!</button>
    <button id="startAutoBtn" type="button">Start Auto Sprinkles</button>
    <button id="stopAutoBtn" type="button" disabled>Stop</button>
    <button id="jsonSpaghettiBtn" type="button">JSON Spaghetti!</button>
    <button id="clearBtn" type="button">Clear</button>
  </div>
  <div id="workspace"></div>
`;

export function renderApp() {
  document.querySelector('#app').innerHTML = appHtml;
}

export function getNumber(id, fallback) {
  return Number(document.getElementById(id).value) || fallback;
}

export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
