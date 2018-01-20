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

export const SPRITES_LOADED = 'SPRITES_LOADED';
export function handleSpritesLoaded(settings) {
  return {
    type: SPRITES_LOADED,
    settings
  };
}

export const BOARD_LOADED = 'BOARD_LOADED';
export function handleBoardLoaded(board) {
  return {
    type: BOARD_LOADED,
    board
  };
}

export const PLAYER_UPDATED = 'PLAYER_UPDATED';
export function handlePlayerUpdate() {
  return {
    type: PLAYER_UPDATED
  };
}
