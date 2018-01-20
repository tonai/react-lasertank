import rawMap from '../maps/test.json';
import { unnest } from 'ramda';

function maxLength(acc, array) {
  return Math.max(acc, array.length);
}

function getComponentName(board, z, x, y) {
  return board[z] && board[z][x] && board[z][x][y] && board[z][x][y].props.name;
}

export function initMap() {
  let player;
  const map = rawMap.map((table, z) =>
    table.map((line, x) =>
      line.map((cell, y) => {
        if (cell && cell[0] === 'player') {
          player = {
            playerDirection: 0,
            playerX: x,
            playerY: y,
            playerZ: z
          };
          return null
        }
        return cell;
      })
    )
  );

  const depth = map.length;
  const width = map.reduce(maxLength, 0);
  const height = unnest(map).reduce(maxLength, 0);

  return { depth, height, map, width, ...player };
}

export function getBlock(cell, settings, size, x, y, z) {
  if (!cell || !cell[0] || !settings[cell[0]]) {
    return null;
  }
  const componentSettings = settings[cell[0]];
  return {
    component: componentSettings && componentSettings.component,
    props: {
      direction: (cell[1] && cell[1].direction) || 0,
      name: cell[0],
      x,
      y,
      z,
      size,
      settings: componentSettings,
      styles: {transform: `translateX(${x * size}px) translateY(${y * size}px) translateZ(${z * size}px)`}
    }
  }
}

export function addAdjacentProps(board, x, y, z) {
  return {
    bottom: getComponentName(board, z - 1, x, y),
    bottomBack: getComponentName(board, z - 1, x - 1, y),
    bottomBackLeft: getComponentName(board, z - 1, x - 1, y - 1),
    bottomBackRight: getComponentName(board, z - 1, x - 1, y + 1),
    bottomFront: getComponentName(board, z - 1, x + 1, y),
    bottomFrontLeft: getComponentName(board, z - 1, x + 1, y - 1),
    bottomFrontRight: getComponentName(board, z - 1, x + 1, y + 1),
    bottomLeft: getComponentName(board, z - 1, x, y - 1),
    bottomRight: getComponentName(board, z - 1, x, y + 1),
    top: getComponentName(board, z + 1, x, y),
    topBack: getComponentName(board, z + 1, x - 1, y),
    topBackLeft: getComponentName(board, z + 1, x - 1, y - 1),
    topBackRight: getComponentName(board, z + 1, x - 1, y + 1),
    topFront: getComponentName(board, z + 1, x + 1, y),
    topFrontLeft: getComponentName(board, z + 1, x + 1, y - 1),
    topFrontRight: getComponentName(board, z + 1, x + 1, y + 1),
    topLeft: getComponentName(board, z + 1, x, y - 1),
    topRight: getComponentName(board, z + 1, x, y + 1),
    back: getComponentName(board, z, x - 1, y),
    backLeft: getComponentName(board, z, x - 1, y - 1),
    backRight: getComponentName(board, z, x - 1, y + 1),
    front: getComponentName(board, z, x + 1, y),
    frontLeft: getComponentName(board, z, x + 1, y - 1),
    frontRight: getComponentName(board, z, x + 1, y + 1),
    left: getComponentName(board, z, x, y - 1),
    right: getComponentName(board, z, x, y + 1)
  };
}
