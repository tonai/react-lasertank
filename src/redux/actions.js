export const X_ANGLE_CHANGE = 'X_ANGLE_CHANGE';
export function handleXAngleChange(value) {
  return {
    type: X_ANGLE_CHANGE,
    value
  }
}

export const Z_ANGLE_CHANGE = 'Z_ANGLE_CHANGE';
export function handleZAngleChange(value) {
  return {
    type: Z_ANGLE_CHANGE,
    value
  }
}

export const ZOOM_CHANGE = 'ZOOM_CHANGE';
export function handleZoomChange(value) {
  return {
    type: ZOOM_CHANGE,
    value
  }
}

export const KEY_DOWN = 'KEY_DOWN';
export function handleKeyDown() {
  return {
    type: KEY_DOWN
  }
}

export const KEY_LEFT = 'KEY_LEFT';
export function handleKeyLeft() {
  return {
    type: KEY_LEFT
  }
}

export const KEY_RIGHT = 'KEY_RIGHT';
export function handleKeyRight() {
  return {
    type: KEY_RIGHT
  }
}

export const KEY_UP = 'KEY_UP';
export function handleKeyUp() {
  return {
    type: KEY_UP
  }
}

export const BLOCKS_UPDATE = 'BLOCKS_UPDATE';
export function handleBlocksUpdate(blocks) {
  return  {
    type: BLOCKS_UPDATE ,
    blocks
  }
}

export const GROUNDS_UPDATE = 'GROUNDS_UPDATE';
export function handleGroundsUpdate(grounds) {
  return  {
    type: GROUNDS_UPDATE ,
    grounds
  }
}

export const PLAYER_CONTROLS_UPDATE = 'PLAYER_CONTROLS_UPDATE';
export function handlePlayerControlsUpdate() {
  return {
    type: PLAYER_CONTROLS_UPDATE
  };
}

export const BLOCK_UPDATE_PROPS = 'BLOCK_UPDATE_PROPS';
export function handleBlockUpdateProps(x, y, z, props) {
  return {
    type: BLOCK_UPDATE_PROPS,
    x,
    y,
    z,
    props
  };
}

export const GROUND_UPDATE_PROPS = 'GROUND_UPDATE_PROPS';
export function handleGroundUpdateProps(x, y, z, props) {
  return {
    type: GROUND_UPDATE_PROPS,
    x,
    y,
    z,
    props
  };
}

export const BLOCK_REMOVE = 'BLOCK_REMOVE';
export function handleBlockRemove(x, y, z) {
  return {
    type: BLOCK_REMOVE,
    x,
    y,
    z
  };
}

export const BLOCK_MOVE = 'BLOCK_MOVE';
export function handleBlockMove(x1, y1, z1, x2, y2, z2) {
  return {
    type: BLOCK_MOVE,
    x1,
    y1,
    z1,
    x2,
    y2,
    z2
  };
}

export const BLOCK_MOVE_RELATIVE = 'BLOCK_MOVE_RELATIVE';
export function handleBlockMoveRelative(x, y, z, deltaX, deltaY, deltaZ) {
  return {
    type: BLOCK_MOVE_RELATIVE,
    x,
    y,
    z,
    deltaX,
    deltaY,
    deltaZ
  };
}

export const GROUND_REMOVE = 'GROUND_REMOVE';
export function handleGroundRemove(x, y, z) {
  return {
    type: GROUND_REMOVE,
    x,
    y,
    z
  };
}

export const SHOOT = 'SHOOT';
export function handleShoot(shootPoints) {
  return {
    type: SHOOT,
    shootPoints
  };
}

export const SHOOT_UPDATE = 'SHOOT_UPDATE';
export function handleShootUpdate(surface, index) {
  return {
    type: SHOOT_UPDATE,
    surface,
    index
  };
}

export const SHOOT_INDEX_UPDATE = 'SHOOT_INDEX_UPDATE';
export function handleShootIndexUpdate(index) {
  return {
    type: SHOOT_INDEX_UPDATE,
    index
  };
}

export const SHOOT_CLEAR = 'SHOOT_CLEAR';
export function handleShootClear() {
  return {
    type: SHOOT_CLEAR
  };
}

export const PLAYER_LOSE = 'PLAYER_LOSE';
export function handlePlayerLose() {
  console.log('Lose');
  return {
    type: PLAYER_LOSE
  };
}

export const PLAYER_WIN = 'PLAYER_WIN';
export function handlePlayerWin() {
  console.log('Win');
  return {
    type: PLAYER_WIN
  };
}
