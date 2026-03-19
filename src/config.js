export const defaultColors = {
  motion: {colourPrimary: '#4C97FF', colourSecondary: '#4280D7', colourTertiary: '#3373CC', colourQuaternary: '#3373CC'},
  looks: {colourPrimary: '#9966FF', colourSecondary: '#855CD6', colourTertiary: '#774DCB', colourQuaternary: '#774DCB'},
  sounds: {colourPrimary: '#CF63CF', colourSecondary: '#C94FC9', colourTertiary: '#BD42BD', colourQuaternary: '#BD42BD'},
  control: {colourPrimary: '#FFAB19', colourSecondary: '#EC9C13', colourTertiary: '#CF8B17', colourQuaternary: '#CF8B17'},
  event: {colourPrimary: '#FFBF00', colourSecondary: '#E6AC00', colourTertiary: '#CC9900', colourQuaternary: '#CC9900'},
  sensing: {colourPrimary: '#5CB1D6', colourSecondary: '#47A8D1', colourTertiary: '#2E8EB8', colourQuaternary: '#2E8EB8'},
  pen: {colourPrimary: '#0fBD8C', colourSecondary: '#0DA57A', colourTertiary: '#0B8E69', colourQuaternary: '#0B8E69'},
  operators: {colourPrimary: '#59C059', colourSecondary: '#46B946', colourTertiary: '#389438', colourQuaternary: '#389438'},
  data: {colourPrimary: '#FF8C1A', colourSecondary: '#FF8000', colourTertiary: '#DB6E00', colourQuaternary: '#DB6E00'},
  data_lists: {colourPrimary: '#FF661A', colourSecondary: '#FF5500', colourTertiary: '#E64D00', colourQuaternary: '#E64D00'},
  more: {colourPrimary: '#FF6680', colourSecondary: '#FF4D6A', colourTertiary: '#FF3355', colourQuaternary: '#FF3355'},
  text: '#FFFFFF', workspace: '#F9F9F9', toolboxHover: '#4C97FF', toolboxSelected: '#E9EEF2', toolboxText: '#575E75',
  toolbox: '#FFFFFF', flyout: '#F9F9F9', scrollbar: '#CECDCE', scrollbarHover: '#CECDCE', textField: '#FFFFFF',
  textFieldText: '#575E75', insertionMarker: '#000000', insertionMarkerOpacity: 0.2, dragShadowOpacity: 0.6,
  stackGlow: '#FFF200', stackGlowSize: 4, stackGlowOpacity: 1, replacementGlow: '#FFFFFF', replacementGlowSize: 2,
  replacementGlowOpacity: 1, colourPickerStroke: '#FFFFFF', fieldShadow: 'rgba(255, 255, 255, 0.3)',
  dropDownShadow: 'rgba(0, 0, 0, .3)', numPadBackground: '#547AB2', numPadBorder: '#435F91',
  numPadActiveBackground: '#435F91', numPadText: 'white', valueReportBackground: '#FFFFFF',
  valueReportBorder: '#AAAAAA', menuHover: 'rgba(0, 0, 0, 0.2)',
};

const category = (name, toolboxitemid, colour, secondaryColour, types) => ({
  kind: 'category',
  name,
  toolboxitemid,
  colour,
  secondaryColour,
  contents: types.map((type) => ({kind: 'block', type})),
});

export const toolbox = {
  contents: [
    category('Motion', 'motion', '#4C97FF', '#3373CC', ['motion_movesteps', 'motion_turnright', 'motion_turnleft', 'motion_goto', 'motion_glideto']),
    category('Control', 'control', '#FFAB19', '#CF8B17', ['control_wait', 'control_repeat', 'control_forever', 'control_if', 'control_if_else', 'control_stop']),
    category('Operators', 'operators', '#59C059', '#389438', ['operator_equals', 'operator_join', 'operator_lt']),
  ],
};

export const requiredContextMenuMsgs = {
  UNDO: 'Undo', REDO: 'Redo', CLEAN_UP: 'Clean up', DELETE_BLOCK: 'Delete Block', DELETE_X_BLOCKS: 'Delete %1 Blocks',
  DUPLICATE_BLOCK: 'Duplicate', ADD_COMMENT: 'Add Comment', REMOVE_COMMENT: 'Remove Comment', INLINE_INPUTS: 'Inline Inputs',
  EXTERNAL_INPUTS: 'External Inputs', COLLAPSE_BLOCK: 'Collapse Block', EXPAND_BLOCK: 'Expand Block',
  COLLAPSE_ALL: 'Collapse Blocks', EXPAND_ALL: 'Expand Blocks', DISABLE_BLOCK: 'Disable Block',
  ENABLE_BLOCK: 'Enable Block', HELP: 'Help',
};
