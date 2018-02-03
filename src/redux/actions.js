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
export function handleBlocksUpdate(grounds) {
  return  {
    type: BLOCKS_UPDATE ,
    grounds
  }
}

export const BOARD_LOADED = 'BOARD_LOADED';
export function handleBoardLoaded(blocks, grounds, player) {
  return {
    type: BOARD_LOADED,
    blocks,
    grounds,
    player
  };
}

export const GROUNDS_UPDATE = 'GROUNDS_UPDATE';
export function handleGroundsUpdate(grounds) {
  return  {
    type: GROUNDS_UPDATE ,
    grounds
  }
}

export const PLAYER_UPDATED = 'PLAYER_UPDATED';
export function handlePlayerUpdated() {
  return {
    type: PLAYER_UPDATED
  };
}

export const PLAYER_UPDATE_RELATIVE_POS = 'PLAYER_UPDATE_RELATIVE_POS';
export function handlePlayerUpdateRelativePos(x, y, z) {
  return {
    type: PLAYER_UPDATE_RELATIVE_POS,
    x,
    y,
    z
  };
}

export const BLOCK_UPDATE_PROPS = 'BLOCK_UPDATE_PROPS';
export function handleBlockUpdateProps(x,y,z, props) {
  return {
    type: BLOCK_UPDATE_PROPS,
    x,
    y,
    z,
    props
  };
}

export const GROUND_UPDATE_PROPS = 'GROUND_UPDATE_PROPS';
export function handleGroundUpdateProps(x,y,z, props) {
  return {
    type: GROUND_UPDATE_PROPS,
    x,
    y,
    z,
    props
  };
}

export const BLOCK_REMOVE = 'BLOCK_REMOVE';
export function handleBlockRemove(x,y,z) {
  return {
    type: BLOCK_REMOVE,
    x,
    y,
    z
  };
}

export const GROUND_REMOVE = 'GROUND_REMOVE';
export function handleGroundRemove(x,y,z) {
  return {
    type: GROUND_REMOVE,
    x,
    y,
    z
  };
}