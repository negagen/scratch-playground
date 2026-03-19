import {defaultColors, requiredContextMenuMsgs, toolbox} from './config';

function applyContextMenuFallbacks(ScratchBlocks) {
  Object.entries(requiredContextMenuMsgs).forEach(([key, value]) => {
    if (typeof ScratchBlocks.Msg[key] !== 'string') {
      ScratchBlocks.Msg[key] = value;
    }
  });
}

export function createWorkspace(ScratchBlocks) {
  ScratchBlocks.ScratchMsgs.setLocale('en');
  applyContextMenuFallbacks(ScratchBlocks);
  const theme = new ScratchBlocks.Theme('default', defaultColors);
  const mediaBase = `${import.meta.env.BASE_URL}media/`;
  return ScratchBlocks.inject(document.getElementById('workspace'), {
    media: mediaBase,
    toolbox,
    theme,
    scratchTheme: 'classic',
  });
}
