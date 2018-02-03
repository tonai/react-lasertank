import mathMod from 'ramda/es/mathMod';

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