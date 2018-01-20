import generalSettings from './general';

import Floor from '../components/Stateless/Blocks/Floor/Floor';
import Wall from '../components/Stateless/Blocks/Wall/Wall';
import Water from '../components/Stateless/Blocks/Water/Water';

export default {
  floor: {
    component: Floor,
    spritePath: `${generalSettings.spritesDir}Inside_A4.png`,
    spriteOffset: [0, 0],
    spriteTopConnect: false
  },
  wall: {
    component: Wall,
    spritePath: `${generalSettings.spritesDir}Inside_A4.png`,
    spriteOffset: [0, 0],
    spriteTopConnect: false
  },
  water: {
    component: Water,
    spritePath: `${generalSettings.spritesDir}Inside_A4.png`,
    spriteOffset: [0, 0],
    spriteTopConnect: false
  }
};
