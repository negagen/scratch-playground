import './style.css';
import * as ScratchBlocks from 'scratch-blocks';
import {bindControls} from './controls';
import {renderApp} from './ui';
import {createWorkspace} from './workspace';

renderApp();
const workspace = createWorkspace(ScratchBlocks);
bindControls(ScratchBlocks, workspace);
