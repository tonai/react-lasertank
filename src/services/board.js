import rawMap from '../maps/test.json';

import insert from 'ramda/es/insert';
import join from 'ramda/es/join';
import map from 'ramda/es/map';
import mergeDeepRight from 'ramda/es/mergeDeepRight';
import pipe from 'ramda/es/pipe';
import prop from 'ramda/es/prop';
import unnest from 'ramda/es/unnest';
import values from 'ramda/es/values';

function maxLength(acc, array) {
  return Math.max(acc, array.length);
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
  if (!cell || !cell[0]) {
    return null;
  }
  const componentSettings = settings[cell[0]];
  const mergedSettings = cell[1] ? mergeDeepRight(componentSettings, cell[1]) : componentSettings;
  return {
    component: componentSettings && componentSettings.component,
    props: {
      name: getComponentName(cell[0], mergedSettings),
      x,
      y,
      z,
      size,
      settings: mergedSettings,
      styles: {transform: `translateX(${x * size}px) translateY(${y * size}px) translateZ(${z * size}px)`}
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
