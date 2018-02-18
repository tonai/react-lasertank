import {
  BLOCK_MOVE,
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
  PLAYER_UPDATE_RELATIVE_POS,
  PLAYER_UPDATE,
  PLAYER_UPDATE_PROPS,
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
import { getBlock, getBlockMoveState, getPlayerState, getStateOnPlayerMove } from '../services/player';

const initialState = {
  blocks: null,
  grounds: null,
  player: null,

  depth: 0,
  height: 0,
  width: 0,

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
      console.log('BLOCK_MOVE');
      const { blocks, grounds } = state;
      const { x1, y1, z1, x2, y2, z2 } = action;
      return {
        ...state,
        ...getBlockMoveState(blocks, grounds,  x1, y1, z1, x2, y2, z2)
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
      const { blocks, grounds, player } = state;
      return {
        ...state,
        ...getStateOnPlayerMove(blocks, grounds, player, - 1)
      };
    }

    case KEY_LEFT: {
      const { player } = state;
      if (player) {
        player.props = {...player.props, direction: player.props.direction - 90};
        return {
          ...state,
          player: {...player}
        };
      }
      return state;
    }

    case KEY_RIGHT: {
      const { player } = state;
      if (player) {
        player.props = {...player.props, direction: player.props.direction + 90};
        return {
          ...state,
          player: {...player}
        };
      }
      return state;
    }

    case KEY_UP: {
      const { blocks, grounds, player } = state;
      return {
        ...state,
        ...getStateOnPlayerMove(blocks, grounds, player)
      };
    }

    case PLAYER_CONTROLS_UPDATE: {
      return {
        ...state,
        playerControls: true
      };
    }

    case PLAYER_UPDATE: {
      return {
        ...state,
        player: action.player
      };
    }

    case PLAYER_UPDATE_PROPS: {
      return {
        ...state,
        player: {
          ...state.player,
          props: {...state.player.props, ...action.props}
        }
      };
    }

    case PLAYER_UPDATE_RELATIVE_POS: {
      const { blocks, grounds, player } = state;
      const { x, y, z } = player.props;
      return {
        ...state,
        ...getPlayerState(blocks, grounds, player, x + action.x, y + action.y, z + action.z)
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
