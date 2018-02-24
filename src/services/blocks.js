import mathMod from 'ramda/es/mathMod';

import blocksSettings from '../settings/blocks';
import boardSettings from '../settings/board';

import { initBlock } from './board';

export function getBlock(board, x, y, z) {
  return board[`${z}-${x}-${y}`];
}

export function canMove(blocks, grounds, x, y, z) {
  const block = getBlock(blocks, x, y, z);
  const ground = getBlock(grounds, x, y, z);
  if (block) {
    return block.props.allowMovement;
  } else if (ground) {
    return ground.props.allowMovement;
  }
  return false;
}

export function getMovePos(blocks, grounds, x, y, z, direction = 1) {
  const block = getBlock(blocks, x, y, z);
  switch (mathMod(block.props.direction, 360)) {
    case 0:
      return {x: x + direction, y, z};
    case 90:
      return {x, y: y + direction, z};
    case 180:
      return {x: x - direction, y, z};
    case 270:
      return {x, y: y - direction, z};
    default:
      return {x, y, z};
  }
}

export function getBlockMoveState(blocks, grounds, x1, y1, z1, x2, y2, z2) {
  const key1 = `${z1}-${x1}-${y1}`;
  const key2 = `${z2}-${x2}-${y2}`;
  const block = blocks[key1];

  if (canMove(blocks, grounds, x2, y2, z2)) {
    grounds = {...grounds};
    blocks = {...blocks};

    delete blocks[key1];
    blocks[key2] = {
      ...block,
      props: {...block.props, x: x2, y: y2, z: z2}
    };

    if (!grounds[key1]) {
      grounds[key1] = initBlock('empty', blocksSettings, boardSettings.size, x1, y1, z1);
    }

    if (block.props.name === 'player') {
      return {
        blocks,
        grounds,
        playerKey: `${z2}-${x2}-${y2}`,
        playerControls: false,
      };
    } else {
      return {
        blocks,
        grounds,
      };
    }
  } else if (block.props.name === 'player') {
    return { playerControls: true };
  }
}
