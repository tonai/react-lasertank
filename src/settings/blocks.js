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
    spritePath: `${generalSettings.spritesDir}Inside_A4.png`,
    spriteOffset: [448, 320],
    spriteConnect: false,
    spriteTopConnect: false,
    spriteWithFront: true,
    allowMovement: false
  },
  empty: {
    component: Empty,
    allowMovement: true
  },
  floor: {
    component: Floor,
    spritePath: `${generalSettings.spritesDir}Dungeon_A2.png`,
    spriteOffset: [64 * 7, (64 + 32) * 2],
    spriteConnect: true,
    spriteTopConnect: false,
    spriteWithFront: false,
    allowMovement: true
  },
  ice: {
    component: Ice,
    spritePath: `${generalSettings.spritesDir}Dungeon_A2.png`,
    spriteOffset: [64 * 2, (64 + 32) * 3],
    spriteConnect: true,
    spriteTopConnect: false,
    spriteWithFront: false,
    allowMovement: true
  },
  wall: {
    component: Wall,
    spritePath: `${generalSettings.spritesDir}Outside_A4.png`,
    spriteOffset: [0, 0],
    spriteConnect: true,
    spriteTopConnect: false,
    spriteWithFront: true,
    allowMovement: false
  },
  water: {
    component: Water,
    spritePath: `${generalSettings.spritesDir}Inside_A4.png`,
    spriteOffset: [0, 0],
    spriteConnect: true,
    spriteTopConnect: false,
    spriteWithFront: false,
    allowMovement: true
  }
};
