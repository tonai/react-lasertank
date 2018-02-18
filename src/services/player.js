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

export function getStateOnPlayerMove(blocks, grounds, player, direction = 1) {
  let {x, y, z} = player.props;
  switch (mathMod(player.props.direction, 360)) {
    case 0:
      x += direction;
      break;
    case 90:
      y += direction;
      break;
    case 180:
      x -= direction;
      break;
    case 270:
      y -= direction;
      break;
    default:
  }
  return getPlayerState(blocks, grounds, player, x, y, z);
}

export function getPlayerState(blocks, grounds, player, x, y, z) {
  if (canMove(blocks, grounds, x, y, z)) {
    return {
      player: {
        ...player,
        props: {...player.props, x, y, z}
      },
      playerControls: false
    };
  }
  return {
    playerControls: true
  };
}

export function getBlockMoveState(blocks, grounds, x1, y1, z1, x2, y2, z2) {
  if (canMove(blocks, grounds, x2, y2, z2)) {
    const key1 = `${z1}-${x1}-${y1}`;
    const key2 = `${z2}-${x2}-${y2}`;

    const block = blocks[key1];
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

    return { blocks, grounds };
  }
}
