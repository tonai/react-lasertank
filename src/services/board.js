import insert from 'ramda/es/insert';
import filter from 'ramda/es/filter';
import join from 'ramda/es/join';
import map from 'ramda/es/map';
import mergeDeepRight from 'ramda/es/mergeDeepRight';
import pipe from 'ramda/es/pipe';
import unnest from 'ramda/es/unnest';
import values from 'ramda/es/values';

import rawMap from '../maps/test.json';
import blocksSettings from '../settings/blocks';
import boardSettings from '../settings/board';

function maxLength(acc, array) {
  return Math.max(acc, (array || []).length);
}

function getComponentName(name, settings) {
  if (settings.sprites) {
    return pipe(
      values,
      map(sprite => `${sprite.path}_${sprite.offset}`),
      insert(0, name),
      join('-')
    )(settings.sprites);
  }
  return name;
}

function getBoardComponentName(board, z, x, y) {
  return board[`${z}-${x}-${y}`] && board[`${z}-${x}-${y}`].props.name;
}

function addEmptyBlocks(blocks, board, depth, width, height) {
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let hasBlock = false;
      for (let k = 0; k < depth; k++) {
        if ((blocks[k] && blocks[k][i] && blocks[k][i][j]) || (board[k] && board[k][i] && board[k][i][j])) {
          hasBlock = true;
        } else if (hasBlock && !(blocks[k] && blocks[k][i] && blocks[k][i][j])) {
          board[k] = board[k] || [];
          board[k][i] = board[k][i] || [];
          board[k][i][j] = ['empty'];
        }
      }
    }
  }
}

function getBoardArray(board) {
  const { size } = boardSettings;
  return (board || []).map((table, z) =>
    (table || []).map((line, x) =>
      (line || []).map((cell, y) => {
        return getBlock(cell, blocksSettings, size, x, y, z);
      })
    )
  );
}

function getBoardObject(board) {
  return pipe(
    filter(block => block !== 'player'),
    getBoardArray,
    unnest,
    unnest,
    filter(x => x)
  )(board || []);
}

export function initMap() {
  const rawBlocks = rawMap.blocks || [];
  const rawGrounds = rawMap.grounds || [];

  const depth = Math.max(rawBlocks.length, rawGrounds.length);
  const width = Math.max(rawBlocks.reduce(maxLength, 0), rawGrounds.reduce(maxLength, 0));
  const height = Math.max(unnest(rawBlocks).reduce(maxLength, 0), unnest(rawGrounds).reduce(maxLength, 0));

  addEmptyBlocks(rawBlocks, rawGrounds, depth, width, height);

  let blocks = getBoardObject(rawBlocks);
  let grounds = getBoardObject(rawGrounds);

  const player = blocks.find(block => block.props.originalName === 'player');
  blocks = blocks
    .filter(block => block.props.originalName !== 'player')
    .reduce((acc, block) => {
      if (block) {
        acc[block.props.key] = block;
      }
      return acc;
    }, {});
  grounds = grounds
    .reduce((acc, block) => {
      if (block) {
        acc[block.props.key] = block;
      }
      return acc;
    }, {});

  return { blocks, depth, grounds, height, player, width };
}

export function getBlock(cell, settings, size, x, y, z) {
  if (!(cell instanceof  Array)) {
    cell = [cell];
  }
  if (!cell[0]) {
    return null;
  }
  const componentSettings = settings[cell[0]];
  const mergedSettings = cell[1] ? mergeDeepRight(componentSettings, cell[1]) : componentSettings;
  return {
    ref: null,
    props: {
      originalName: cell[0],
      name: getComponentName(cell[0], mergedSettings),
      key: `${z}-${x}-${y}`,
      x,
      y,
      z,
      direction: 0,
      size,
      ...mergedSettings
    }
  }
}

export function addAdjacentProps(board, x, y, z) {
  return {
    bottom: getBoardComponentName(board, z - 1, x, y),
    bottomBack: getBoardComponentName(board, z - 1, x - 1, y),
    bottomBackLeft: getBoardComponentName(board, z - 1, x - 1, y - 1),
    bottomBackRight: getBoardComponentName(board, z - 1, x - 1, y + 1),
    bottomFront: getBoardComponentName(board, z - 1, x + 1, y),
    bottomFrontLeft: getBoardComponentName(board, z - 1, x + 1, y - 1),
    bottomFrontRight: getBoardComponentName(board, z - 1, x + 1, y + 1),
    bottomLeft: getBoardComponentName(board, z - 1, x, y - 1),
    bottomRight: getBoardComponentName(board, z - 1, x, y + 1),
    top: getBoardComponentName(board, z + 1, x, y),
    topBack: getBoardComponentName(board, z + 1, x - 1, y),
    topBackLeft: getBoardComponentName(board, z + 1, x - 1, y - 1),
    topBackRight: getBoardComponentName(board, z + 1, x - 1, y + 1),
    topFront: getBoardComponentName(board, z + 1, x + 1, y),
    topFrontLeft: getBoardComponentName(board, z + 1, x + 1, y - 1),
    topFrontRight: getBoardComponentName(board, z + 1, x + 1, y + 1),
    topLeft: getBoardComponentName(board, z + 1, x, y - 1),
    topRight: getBoardComponentName(board, z + 1, x, y + 1),
    back: getBoardComponentName(board, z, x - 1, y),
    backLeft: getBoardComponentName(board, z, x - 1, y - 1),
    backRight: getBoardComponentName(board, z, x - 1, y + 1),
    front: getBoardComponentName(board, z, x + 1, y),
    frontLeft: getBoardComponentName(board, z, x + 1, y - 1),
    frontRight: getBoardComponentName(board, z, x + 1, y + 1),
    left: getBoardComponentName(board, z, x, y - 1),
    right: getBoardComponentName(board, z, x, y + 1)
  };
}
