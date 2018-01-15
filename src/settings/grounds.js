import boardSettings from './board';
import generalSettings from './general';

import Floor from '../components/Stateless/Grounds/Floor/Floor';
import Water from '../components/Stateless/Grounds/Water/Water';
import Block from '../components/Stateless/Grounds/Block/Block';
import Empty from '../components/Stateless/Grounds/Empty/Empty';

export default {
  floor: {
    component: Floor,
    spritePath: `${generalSettings.spritesDir}Inside_A4.png`,
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
    bottomStyles: {
      topStyles: {},
      sideStyles: {},
      backgroundPosition: `0px -${boardSettings.size / 2}px`
    }
  },
  block: {
    component: Block,
    spritePath: `${generalSettings.spritesDir}Inside_A4.png`
  },
  empty: {
    component: Empty,
    spritePath: `${generalSettings.spritesDir}Inside_A4.png`,
    bottomStyles: {
      topStyles: {},
      sideStyles: {},
      backgroundPosition: `0px -${boardSettings.size / 2}px`
    }
  }
};
