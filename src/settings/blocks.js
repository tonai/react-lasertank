import boardSettings from './board';
import generalSettings from './general';

import Floor from '../components/Stateless/Blocks/Floor/Floor';
import Water from '../components/Stateless/Blocks/Water/Water';
import Block from '../components/Stateless/Blocks/Block/Block';
import Empty from '../components/Stateless/Blocks/Empty/Empty';

export default {
  floor: {
    component: Floor,
    spritePath: `${generalSettings.spritesDir}Inside_A4.png`,
    spriteOffset: [0, 0],
    topStyles: {
      backgroundPosition: `0px -${boardSettings.size / 2}px`
    },
    sideStyles: {
      backgroundPosition: `0px -${boardSettings.size * 3 / 2}px`
    },
    bottomStyles: {}
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
  },
  empty: {
    component: Empty,
    spritePath: `${generalSettings.spritesDir}Inside_A4.png`,
    spriteOffset: [0, 0],
    bottomStyles: {
      topStyles: {},
      sideStyles: {},
      backgroundPosition: `0px -${boardSettings.size / 2}px`
    }
  }
};
