import mathMod from 'ramda/es/mathMod';
import { addAdjacentProps } from './board';

export function getPlayerOnKeyUp(board, playerDirection, playerX, playerY, playerZ) {
  const props =  addAdjacentProps(board, playerX, playerY, playerZ);
  const { back, bottomBack, bottomFront, bottomLeft, bottomRight, front, left, right } = props;

  switch (mathMod(playerDirection, 360)) {
    case 0:
      if (!front && bottomFront) {
        return {playerDirection, playerX: playerX + 1, playerY, playerZ};
      }
      return null;

    case 180:
      if (!back && bottomBack) {
        return {playerDirection, playerX: playerX - 1, playerY, playerZ};
      }
      return null;

    case 90:
      if (!right && bottomRight) {
        return {playerDirection, playerX, playerY: playerY + 1, playerZ};
      }
      return null;

    case 270:
      if (!left && bottomLeft) {
        return {playerDirection, playerX, playerY: playerY - 1, playerZ};
      }
      return null;

    default:
      return null;
  }
}

export function getPlayerOnKeyDown(board, playerDirection, playerX, playerY, playerZ) {
  const props =  addAdjacentProps(board, playerX, playerY, playerZ);
  const { back, bottomBack, bottomFront, bottomLeft, bottomRight, front, left, right } = props;

  switch (mathMod(playerDirection, 360)) {
    case 0:
      if (!front && bottomFront) {
        return {playerDirection, playerX: playerX - 1, playerY, playerZ};
      }
      return null;

    case 180:
      if (!back && bottomBack) {
        return {playerDirection, playerX: playerX + 1, playerY, playerZ};
      }
      return null;

    case 90:
      if (!right && bottomRight) {
        return {playerDirection, playerX, playerY: playerY - 1, playerZ};
      }
      return null;

    case 270:
      if (!left && bottomLeft) {
        return {playerDirection, playerX, playerY: playerY + 1, playerZ};
      }
      return null;

    default:
      return null;
  }
}

export function getPlayerOnKeyLeft(board, playerDirection, playerX, playerY, playerZ) {
  return {
    playerDirection: playerDirection - 90,
    playerX,
    playerY,
    playerZ
  };
}

export function getPlayerOnKeyRight(board, playerDirection, playerX, playerY, playerZ) {
  return {
    playerDirection: playerDirection + 90,
    playerX,
    playerY,
    playerZ
  };
}
