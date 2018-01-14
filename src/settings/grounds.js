import boardSettings from './board';
import generalSettings from './general';

import Floor from '../components/Grounds/Floor/Floor';

export default {
  floor: {
    component: Floor,
    spritePath: `${generalSettings.spritesDir}Inside_A4.png`,
    topStyles: {
      backgroundPosition: `0px -${boardSettings.size / 2}px`
    },
    sideStyles: {
      backgroundPosition: `0px -${boardSettings.size * 3 / 2}px`
    }
  }
};
