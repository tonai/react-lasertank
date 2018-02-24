import {
  BLOCK_MOVE,
  BLOCK_MOVE_RELATIVE,
  BLOCK_REMOVE,
  BLOCK_UPDATE_PROPS,
  BLOCKS_UPDATE,
  GROUND_REMOVE,
  GROUND_UPDATE_PROPS,
  GROUNDS_UPDATE,
  KEY_DOWN,
  KEY_LEFT,
  KEY_RIGHT,
  KEY_UP,
  PLAYER_CONTROLS_UPDATE,
  SHOOT,
  SHOOT_CLEAR,
  SHOOT_UPDATE,
  SHOOT_INDEX_UPDATE,
  X_ANGLE_CHANGE,
  Z_ANGLE_CHANGE,
  ZOOM_CHANGE
} from './actions';

import blocksSettings from '../settings/blocks';
import boardSettings from '../settings/board';

import { initBlock, initMap } from '../services/board';
import { getBlock, getBlockMoveState, getMovePos } from '../services/blocks';

const initialState = {
  blocks: null,
  grounds: null,

  depth: 0,
  height: 0,
  width: 0,

  playerKey: null,
  playerControls: true,

  xAngle : 45,
  zAngle: 45,
  zoom: 1,

  shootIndex: 0,
  shootPoints: [],
  shootSurfaces: [],

  ...initMap()
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case BLOCK_MOVE: {
      const { blocks, grounds } = state;
      const { x1, y1, z1, x2, y2, z2 } = action;
      return {
        ...state,
        ...getBlockMoveState(blocks, grounds, x1, y1, z1, x2, y2, z2)
      };
    }
    case BLOCK_MOVE_RELATIVE: {
      const { blocks, grounds } = state;
      const { deltaX, deltaY, deltaZ, x, y, z } = action;
      return {
        ...state,
        ...getBlockMoveState(blocks, grounds, x, y, z, x + deltaX, y + deltaY, z + deltaZ)
      };
    }

    case BLOCK_REMOVE: {
      const { x, y, z } = action;
      const key = `${z}-${x}-${y}`;
      const grounds = {...state.grounds};
      const blocks = {...state.blocks};
      delete blocks[key];
      if (!grounds[key]) {
        grounds[key] = initBlock('empty', blocksSettings, boardSettings.size, x, y, z);
      }
      return {
        ...state,
        blocks,
        grounds
      };
    }

    case BLOCK_UPDATE_PROPS: {
      const { props = {}, x, y, z } = action;
      const { blocks } = state;
      const block = getBlock(blocks, x, y, z);
      return {
        ...state,
        blocks: {
          ...blocks,
          [`${z}-${x}-${y}`]: {
            ...block,
            props: {...block.props, ...props}
          }
        }
      };
    }

    case BLOCKS_UPDATE: {
      return {
        ...state,
        blocks: action.blocks
      };
    }

    case GROUND_REMOVE: {
      const { x, y, z } = action;
      const { grounds } = state;
      return {
        ...state,
        grounds: {
          ...grounds,
          [`${z}-${x}-${y}`]: initBlock('empty', blocksSettings, boardSettings.size, x, y, z)
        }
      };
    }

    case GROUND_UPDATE_PROPS: {
      const { props = {}, x, y, z } = action;
      const { grounds } = state;
      const ground = getBlock(grounds, x, y, z);
      return {
        ...state,
        grounds: {
          ...grounds,
          [`${z}-${x}-${y}`]: {
            ...ground,
            props: {...ground.props, ...props}
          }
        }
      };
    }

    case GROUNDS_UPDATE: {
      return {
        ...state,
        grounds: action.grounds
      };
    }

    case KEY_DOWN: {
      const { blocks, grounds, playerKey } = state;
      const {x: x1, y: y1, z: z1} = blocks[playerKey].props;
      const {x: x2, y: y2, z: z2} = getMovePos(blocks, grounds, x1, y1, z1, -1);
      return {
        ...state,
        ...getBlockMoveState(blocks, grounds, x1, y1, z1, x2, y2, z2),
      };
    }

    case KEY_LEFT: {
      const { blocks, playerKey } = state;
      const player = blocks[playerKey];
      if (player) {
        return {
          ...state,
          blocks: {
            ...blocks,
            [playerKey]: {
              ...player,
              props: {...player.props, direction: player.props.direction - 90}
            }
          }
        };
      }
      return state;
    }

    case KEY_RIGHT: {
      const { blocks, playerKey } = state;
      const player = blocks[playerKey];
      if (player) {
        return {
          ...state,
          blocks: {
            ...blocks,
            [playerKey]: {
              ...player,
              props: {...player.props, direction: player.props.direction + 90}
            }
          }
        };
      }
      return state;
    }

    case KEY_UP: {
      const { blocks, grounds, playerKey } = state;
      const {x: x1, y: y1, z: z1} = blocks[playerKey].props;
      const {x: x2, y: y2, z: z2} = getMovePos(blocks, grounds, x1, y1, z1);
      return {
        ...state,
        ...getBlockMoveState(blocks, grounds, x1, y1, z1, x2, y2, z2),
      };
    }

    case PLAYER_CONTROLS_UPDATE: {
      return {
        ...state,
        playerControls: true
      };
    }

    case SHOOT: {
      return {
        ...state,
        playerControls: false,
        shootPoints: action.shootPoints
      };
    }

    case SHOOT_CLEAR: {
      return {
        ...state,
        playerControls: true,
        shootIndex: 0,
        shootPoints: [],
        shootSurfaces: []
      }
    }

    case SHOOT_UPDATE: {
      const shootSurfaces = [...state.shootSurfaces];
      shootSurfaces[action.index] = action.surface;
      return {
        ...state,
        shootSurfaces
      }
    }

    case SHOOT_INDEX_UPDATE: {
      return {
        ...state,
        shootIndex: action.index
      }
    }

    case X_ANGLE_CHANGE: {
      return {
        ...state,
        xAngle: action.value
      };
    }

    case Z_ANGLE_CHANGE: {
      return {
        ...state,
        zAngle: action.value
      };
    }

    case ZOOM_CHANGE: {
      return {
        ...state,
        zoom: action.value
      };
    }

    default:
      return state;
  }
}
