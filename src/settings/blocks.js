import generalSettings from './general';

import Floor from '../components/Stateless/Blocks/Floor/Floor';
import Water from '../components/Stateless/Blocks/Water/Water';
import Block from '../components/Stateless/Blocks/Block/Block';

export default {
  floor: {
    component: Floor,
    spritePath: `${generalSettings.spritesDir}Inside_A4.png`,
    spriteOffset: [0, 0],
    spriteTopConnect: false
  },
  water: {
    component: Water,
    spritePath: `${generalSettings.spritesDir}Inside_A4.png`,
    spriteOffset: [0, 0],
    spriteTopConnect: false
  },
  block: {
    component: Block,
    spritePath: `${generalSettings.spritesDir}Inside_A4.png`,
    spriteOffset: [0, 0],
    spriteTopConnect: false
  }
};
