import {toolbox} from './config';

const blockTypes = toolbox.contents.flatMap((category) => category.contents.map((block) => block.type));

function makeTextShadow(text) {
  return {type: 'text', fields: {TEXT: text}};
}

function makeJoinShadow(leftText, rightText) {
  return {
    type: 'operator_join',
    inputs: {STRING1: {shadow: makeTextShadow(leftText)}, STRING2: {shadow: makeTextShadow(rightText)}},
  };
}

function makeEqualsTree(depth) {
  if (depth <= 0) {
    return {type: 'operator_equals', inputs: {OPERAND1: {shadow: makeJoinShadow('foo', 'foo')}, OPERAND2: {shadow: makeJoinShadow('bar', 'bar')}}};
  }
  return {type: 'operator_equals', inputs: {OPERAND1: {shadow: makeJoinShadow(`foo${depth}`, `bar${depth}`)}, OPERAND2: {shadow: makeEqualsTree(depth - 1)}}};
}

function makeIfElseTemplate(depth) {
  return {type: 'control_if_else', inputs: {CONDITION: {shadow: makeEqualsTree(depth)}}};
}

function fillEmptyStatements(node, depth) {
  if (!node.inputs.SUBSTACK) node.inputs.SUBSTACK = {block: makeIfElseTemplate(depth)};
  else if (node.inputs.SUBSTACK.block) fillEmptyStatements(node.inputs.SUBSTACK.block, depth);
  if (!node.inputs.SUBSTACK2) node.inputs.SUBSTACK2 = {block: makeIfElseTemplate(depth)};
  else if (node.inputs.SUBSTACK2.block) fillEmptyStatements(node.inputs.SUBSTACK2.block, depth);
  if (node.next?.block) fillEmptyStatements(node.next.block, depth);
}

function fillEmptyNext(node, depth) {
  if (!node.next) node.next = {block: makeIfElseTemplate(depth)};
  else if (node.next.block) fillEmptyNext(node.next.block, depth);
  if (node.inputs.SUBSTACK?.block) fillEmptyNext(node.inputs.SUBSTACK.block, depth);
  if (node.inputs.SUBSTACK2?.block) fillEmptyNext(node.inputs.SUBSTACK2.block, depth);
}

export function addSprinkles(workspace, count) {
  for (let i = 0; i < count; i += 1) {
    const type = blockTypes[Math.floor(Math.random() * blockTypes.length)];
    const block = workspace.newBlock(type);
    block.initSvg();
    block.render();
    block.moveBy(Math.round(Math.random() * 650 + 40), Math.round(Math.random() * 900 + 40));
  }
}

export function loadJsonSpaghetti(ScratchBlocks, workspace, depth) {
  const root = makeIfElseTemplate(depth);
  for (let i = 0; i < 2 * depth; i += 1) fillEmptyStatements(root, depth);
  for (let i = 0; i < depth; i += 1) fillEmptyNext(root, depth);
  root.x = 40;
  root.y = 60;
  workspace.clear();
  ScratchBlocks.serialization.workspaces.load(
    {blocks: {languageVersion: 0, blocks: [JSON.parse(JSON.stringify(root))]}},
    workspace,
  );
}
