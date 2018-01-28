import generalSettings from './general';

import Block from '../components/Stateful/Blocks/Block/Block';
import Wall from '../components/Stateful/Blocks/Wall/Wall';
import Water from '../components/Stateful/Blocks/Water/Water';

import Empty from '../components/Stateful/Grounds/Empty/Empty';
import Finish from '../components/Stateful/Grounds/Finish/Finish';
import Floor from '../components/Stateful/Grounds/Floor/Floor';
import Ice from '../components/Stateful/Grounds/Ice/Ice';

import Player from '../components/Stateful/Player/Player';

export default {
  block: {
    component: Block,
    allowMovement: false,
    sprites: {
      top: {
        path: `${generalSettings.spritesDir}Inside_A4.png`,
        offset: [64 * 7, (64 + 64 + 32) * 2],
        connect: false,
        topConnect: false,
        type: 'top'
      },
      side: {
        path: `${generalSettings.spritesDir}Inside_A4.png`,
        offset: [64 * 7, (64 + 64 + 32) * 2 + 64 + 32],
        connect: false,
        topConnect: false,
        type: 'side'
      }
    }
  },
  empty: {
    component: Empty,
    allowMovement: true
  },
  finish: {
    component: Finish,
    allowMovement: true
  },
  floor: {
    component: Floor,
    allowMovement: true,
    sprites: {
      top: {
        path: `${generalSettings.spritesDir}Dungeon_A2.png`,
        offset: [64 * 7, (64 + 32) * 2],
        connect: true,
        topConnect: false,
        type: 'top'
      }
    }
  },
  ice: {
    component: Ice,
    allowMovement: true,
    sprites: {
      top: {
        path: `${generalSettings.spritesDir}Dungeon_A2.png`,
        offset: [64 * 2, (64 + 32) * 3],
        connect: true,
        topConnect: false,
        type: 'top'
      }
    }
  },
  player: {
    component: Player,
    allowMovement: false
  },
  wall: {
    component: Wall,
    allowMovement: false,
    sprites: {
      top: {
        path: `${generalSettings.spritesDir}Outside_A4.png`,
        offset: [0, 0],
        connect: true,
        topConnect: false,
        type: 'top'
      },
      side: {
        path: `${generalSettings.spritesDir}Outside_A4.png`,
        offset: [0, 64 + 32],
        connect: true,
        topConnect: false,
        type: 'side'
      }
    }
  },
  water: {
    component: Water,
    allowMovement: true,
    sprites: {
      top: {
        path: `${generalSettings.spritesDir}Inside_A4.png`,
        offset: [0, 0],
        connect: true,
        topConnect: false,
        type: 'top'
      }
    }
  }
};
