import generalSettings from './general';

import Block from '../components/Stateful/Blocks/Block/Block';
import Empty from '../components/Stateful/Blocks/Empty/Empty';
import Floor from '../components/Stateful/Grounds/Floor/Floor';
import Ice from '../components/Stateful/Grounds/Ice/Ice';
import Wall from '../components/Stateful/Blocks/Wall/Wall';
import Water from '../components/Stateful/Blocks/Water/Water';

export default {
  block: {
    component: Block,
    allowMovement: false,
    sprites: [
      {
        path: `${generalSettings.spritesDir}Inside_A4.png`,
        offset: [448, 320],
        connect: false,
        topConnect: false,
        withFront: true
      }
    ]
  },
  empty: {
    component: Empty,
    allowMovement: true
  },
  floor: {
    component: Floor,
    allowMovement: true,
    sprites: [
      {
        path: `${generalSettings.spritesDir}Dungeon_A2.png`,
        offset: [64 * 7, (64 + 32) * 2],
        connect: true,
        topConnect: false,
        withFront: false
      }
    ]
  },
  ice: {
    component: Ice,
    allowMovement: true,
    sprites: [
      {
        path: `${generalSettings.spritesDir}Dungeon_A2.png`,
        offset: [64 * 2, (64 + 32) * 3],
        connect: true,
        topConnect: false,
        withFront: false
      }
    ]
  },
  wall: {
    component: Wall,
    allowMovement: false,
    sprites: [
      {
        path: `${generalSettings.spritesDir}Outside_A4.png`,
        offset: [0, 0],
        connect: true,
        topConnect: false,
        withFront: true
      }
    ]
  },
  water: {
    component: Water,
    allowMovement: true,
    sprites: [
      {
        path: `${generalSettings.spritesDir}Inside_A4.png`,
        offset: [0, 0],
        connect: true,
        topConnect: false,
        withFront: false
      }
    ]
  }
};
