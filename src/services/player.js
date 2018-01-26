import filter from 'ramda/es/filter';
import mapObjIndexed from 'ramda/es/mapObjIndexed';
import mathMod from 'ramda/es/mathMod';
import pipe from 'ramda/es/pipe';
import values from 'ramda/es/values';

import { addAdjacentProps } from './board';
import blocksSettings from '../settings/blocks';

const allowMovementBlocks = pipe(
  mapObjIndexed((settings, name) => settings.allowMovement ? name : null),
  values,
  filter(x => x)
)(blocksSettings);

export function getPlayerOnKeyUp(blocks, grounds, playerDirection, playerX, playerY, playerZ) {
  const blocksProps =  addAdjacentProps(blocks, playerX, playerY, playerZ);
  const groundsProps =  addAdjacentProps(grounds, playerX, playerY, playerZ);

  switch (mathMod(playerDirection, 360)) {
    case 0:
      if (allowMovementBlocks.indexOf(blocksProps.front) !== -1 && allowMovementBlocks.indexOf(groundsProps.front) !== -1) {
        return {playerDirection, playerX: playerX + 1, playerY, playerZ};
      }
      return null;

    case 180:
      if (allowMovementBlocks.indexOf(blocksProps.back) !== -1 && allowMovementBlocks.indexOf(groundsProps.back) !== -1) {
        return {playerDirection, playerX: playerX - 1, playerY, playerZ};
      }
      return null;

    case 90:
      if (allowMovementBlocks.indexOf(blocksProps.right) !== -1 && allowMovementBlocks.indexOf(groundsProps.right) !== -1) {
        return {playerDirection, playerX, playerY: playerY + 1, playerZ};
      }
      return null;

    case 270:
      if (allowMovementBlocks.indexOf(blocksProps.left) !== -1 && allowMovementBlocks.indexOf(groundsProps.left) !== -1) {
        return {playerDirection, playerX, playerY: playerY - 1, playerZ};
      }
      return null;

    default:
      return null;
  }
}

export function getPlayerOnKeyDown(blocks, grounds, playerDirection, playerX, playerY, playerZ) {
  const blocksProps =  addAdjacentProps(blocks, playerX, playerY, playerZ);
  const groundsProps =  addAdjacentProps(grounds, playerX, playerY, playerZ);

  switch (mathMod(playerDirection, 360)) {
    case 0:
      if (allowMovementBlocks.indexOf(blocksProps.back) !== -1 && allowMovementBlocks.indexOf(groundsProps.back) !== -1) {
        return {playerDirection, playerX: playerX - 1, playerY, playerZ};
      }
      return null;

    case 180:
      if (allowMovementBlocks.indexOf(blocksProps.front) !== -1 && allowMovementBlocks.indexOf(groundsProps.front) !== -1) {
        return {playerDirection, playerX: playerX + 1, playerY, playerZ};
      }
      return null;

    case 90:
      if (allowMovementBlocks.indexOf(blocksProps.left) !== -1 && allowMovementBlocks.indexOf(groundsProps.left) !== -1) {
        return {playerDirection, playerX, playerY: playerY - 1, playerZ};
      }
      return null;

    case 270:
      if (allowMovementBlocks.indexOf(blocksProps.right) !== -1 && allowMovementBlocks.indexOf(groundsProps.right) !== -1) {
        return {playerDirection, playerX, playerY: playerY + 1, playerZ};
      }
      return null;

    default:
      return null;
  }
}

export function getPlayerOnKeyLeft(playerDirection, playerX, playerY, playerZ) {
  return {
    playerDirection: playerDirection - 90,
    playerX,
    playerY,
    playerZ
  };
}

export function getPlayerOnKeyRight(playerDirection, playerX, playerY, playerZ) {
  return {
    playerDirection: playerDirection + 90,
    playerX,
    playerY,
    playerZ
  };
}
