import generalSettings from './general';

import Block from '../components/Stateless/Blocks/Block/Block';
import Floor from '../components/Stateless/Blocks/Floor/Floor';
import Player from '../components/Stateless/Blocks/Player/Player';
import Wall from '../components/Stateless/Blocks/Wall/Wall';
import Water from '../components/Stateless/Blocks/Water/Water';

export default {
  block: {
    component: Block,
    spritePath: `${generalSettings.spritesDir}Inside_A4.png`,
    spriteOffset: [448, 320],
    spriteConnect: false,
    spriteTopConnect: false
  },
  floor: {
    component: Floor,
    spritePath: `${generalSettings.spritesDir}Inside_A4.png`,
    spriteOffset: [0, 0],
    spriteConnect: true,
    spriteTopConnect: false
  },
  player: {
    component: Player
  },
  wall: {
    component: Wall,
    spritePath: `${generalSettings.spritesDir}Inside_A4.png`,
    spriteOffset: [0, 0],
    spriteConnect: true,
    spriteTopConnect: false
  },
  water: {
    component: Water,
    spritePath: `${generalSettings.spritesDir}Inside_A4.png`,
    spriteOffset: [0, 0],
    spriteConnect: true,
    spriteTopConnect: false
  }
};
