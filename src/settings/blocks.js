import generalSettings from './general';

import Block from '../components/Stateful/Blocks/Block/Block';
import Door from '../components/Stateful/Blocks/Door/Door';
import MirrorBlock from '../components/Stateful/Blocks/MirrorBlock/MirrorBlock';
import MirrorRotating from '../components/Stateful/Blocks/MirrorRotating/MirrorRotating';
import MirrorWall from '../components/Stateful/Blocks/MirrorWall/MirrorWall';
import Wall from '../components/Stateful/Blocks/Wall/Wall';
import WallBroken from '../components/Stateful/Blocks/WallBroken/WallBroken';
import WallShoot from '../components/Stateful/Blocks/WallShoot/WallShoot';

import IceBroken from '../components/Stateful/Grounds/IceBroken/IceBroken';
import FloorBroken from '../components/Stateful/Grounds/FloorBroken/FloorBroken';
import Empty from '../components/Stateful/Grounds/Empty/Empty';
import Finish from '../components/Stateful/Grounds/Finish/Finish';
import Floor from '../components/Stateful/Grounds/Floor/Floor';
import Ice from '../components/Stateful/Grounds/Ice/Ice';
import Redirect from '../components/Stateful/Grounds/Redirect/Redirect';
import Switch from '../components/Stateful/Grounds/Switch/Switch';
import Teleporter from '../components/Stateful/Grounds/Teleporter/Teleporter';
import Water from '../components/Stateful/Grounds/Water/Water';

import Player from '../components/Stateful/Blocks/Player/Player';

export default {
  block: {
    component: Block,
    allowMovement: false,
    sprites: {
      top: {
        path: `${generalSettings.spritesDir}Inside_A4.png`,
        offset: [7 * 64, 2 * (64 + 64 + 32)],
        connect: false,
        topConnect: false,
        type: 'top'
      },
      side: {
        path: `${generalSettings.spritesDir}Inside_A4.png`,
        offset: [7 * 64, 2 * (64 + 64 + 32) + 64 + 32],
        connect: false,
        topConnect: false,
        type: 'side'
      }
    }
  },
  iceBroken: {
    component: IceBroken,
    allowMovement: true,
    opacity: 1,
    sprites: {
      bottom: {
        path: `${generalSettings.spritesDir}Dungeon_A2.png`,
        offset: [2 * 64, 3 * (64 + 32)],
        connect: true,
        topConnect: false,
        type: 'top'
      },
      top: {
        path: `${generalSettings.spritesDir}Outside_A2.png`,
        offset: [7 * 64, 0 * (64 + 32)],
        connect: true,
        topConnect: false,
        type: 'top'
      }
    }
  },
  floorBroken: {
    component: FloorBroken,
    allowMovement: true,
    opacity: 1,
    sprites: {
      bottom: {
        path: `${generalSettings.spritesDir}Dungeon_A2.png`,
        offset: [7 * 64, 2 * (64 + 32)],
        connect: true,
        topConnect: false,
        type: 'top'
      },
      top: {
        path: `${generalSettings.spritesDir}Outside_A2.png`,
        offset: [7 * 64, 0 * (64 + 32)],
        connect: true,
        topConnect: false,
        type: 'top'
      }
    }
  },
  door: {
    component: Door,
    allowMovement: false,
    sprites: {
      side1: {
        path: `${generalSettings.spritesDir}Door3.png`,
        offset: [2 * 32, 0 * 64],
        connect: false,
        topConnect: false,
        type: 'side'
      },
      side2: {
        path: `${generalSettings.spritesDir}Door3.png`,
        offset: [3 * 32, 0 * 64],
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
      bottom: {
        path: `${generalSettings.spritesDir}Dungeon_A2.png`,
        offset: [7 * 64, 2 * (64 + 32)],
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
      bottom: {
        path: `${generalSettings.spritesDir}Dungeon_A2.png`,
        offset: [2 * 64, 3 * (64 + 32)],
        connect: true,
        topConnect: false,
        type: 'top'
      }
    }
  },
  mirrorBlock: {
    component: MirrorBlock,
    allowMovement: false,
    sprites: {
      top: {
        path: `${generalSettings.spritesDir}Inside_A4.png`,
        offset: [7 * 64, 2 * (64 + 64 + 32)],
        connect: false,
        topConnect: false,
        type: 'top'
      },
      side: {
        path: `${generalSettings.spritesDir}Inside_A4.png`,
        offset: [7 * 64, 2 * (64 + 64 + 32) + 64 + 32],
        connect: false,
        topConnect: false,
        type: 'side'
      }
    }
  },
  mirrorRotating: {
    component: MirrorRotating,
    allowMovement: false,
  },
  mirrorWall: {
    component: MirrorWall,
    allowMovement: false,
    sprites: {
      top: {
        path: `${generalSettings.spritesDir}Outside_A4.png`,
        offset: [0 * 64, 0 * (64 + 64 + 32)],
        connect: true,
        topConnect: false,
        type: 'top'
      },
      side: {
        path: `${generalSettings.spritesDir}Outside_A4.png`,
        offset: [0 * 64, 0 * (64 + 64 + 32) + 64 + 32],
        connect: true,
        topConnect: false,
        type: 'side'
      }
    }
  },
  player: {
    component: Player,
    allowMovement: false
  },
  redirect: {
    component: Redirect,
    allowMovement: true
  },
  switch: {
    component: Switch,
    allowMovement: true,
    sprites: {
      bottom: {
        path: `${generalSettings.spritesDir}Switch1.png`,
        offset: [0 * 32, 4 * 32],
        connect: false,
        topConnect: false,
        type: 'top'
      }
    }
  },
  teleporter: {
    component: Teleporter,
    allowMovement: true,
    sprites: {
      bottom: {
        path: `${generalSettings.spritesDir}evilcastle_C.png`,
        offset: [4 * 32, 8 * 32],
        connect: false,
        topConnect: false,
        type: 'top'
      }
    }
  },
  wall: {
    component: Wall,
    allowMovement: false,
    sprites: {
      top: {
        path: `${generalSettings.spritesDir}Outside_A4.png`,
        offset: [0 * 64, 0 * (64 + 64 + 32)],
        connect: true,
        topConnect: false,
        type: 'top'
      },
      side: {
        path: `${generalSettings.spritesDir}Outside_A4.png`,
        offset: [0 * 64, 0 * (64 + 64 + 32) + 64 + 32],
        connect: true,
        topConnect: false,
        type: 'side'
      }
    }
  },
  wallBroken: {
    component: WallBroken,
    allowMovement: false,
    sprites: {
      top: {
        path: `${generalSettings.spritesDir}Outside_A4.png`,
        offset: [0 * 64, 0 * (64 + 64 + 32)],
        connect: true,
        topConnect: false,
        type: 'top'
      },
      side: {
        path: `${generalSettings.spritesDir}Outside_A4.png`,
        offset: [0 * 64, 0 * (64 + 64 + 32) + 64 + 32],
        connect: true,
        topConnect: false,
        type: 'side'
      },
      broken: {
        path: `${generalSettings.spritesDir}Outside_A2.png`,
        offset: [7 * 64, 0 * (64 + 32)],
        connect: true,
        topConnect: false,
        type: 'top'
      }
    }
  },
  wallShoot: {
    component: WallShoot,
    allowMovement: false,
    sprites: {
      top: {
        path: `${generalSettings.spritesDir}Outside_A4.png`,
        offset: [0 * 64, 0 * (64 + 64 + 32)],
        connect: true,
        topConnect: false,
        type: 'top'
      },
      side: {
        path: `${generalSettings.spritesDir}Outside_A4.png`,
        offset: [0 * 64, 0 * (64 + 64 + 32) + 64 + 32],
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
        path: `${generalSettings.spritesDir}Dungeon_A2.png`,
        offset: [2 * 64, 0 * (64 + 32)],
        connect: true,
        topConnect: false,
        type: 'top'
      }
    }
  },
};
