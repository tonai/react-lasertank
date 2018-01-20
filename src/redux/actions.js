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
export function handleKeyDown(player) {
  return {
    type: KEY_DOWN,
    player
  }
}

export const KEY_LEFT = 'KEY_LEFT';
export function handleKeyLeft(player) {
  return {
    type: KEY_LEFT,
    player
  }
}

export const KEY_RIGHT = 'KEY_RIGHT';
export function handleKeyRight(player) {
  return {
    type: KEY_RIGHT,
    player
  }
}

export const KEY_UP = 'KEY_UP';
export function handleKeyUp(player) {
  return {
    type: KEY_UP,
    player
  }
}
