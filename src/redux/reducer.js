import {
  BLOCK_REMOVE,
  BLOCK_UPDATE_PROPS,
  BLOCKS_UPDATE,
  BOARD_LOADED,
  GROUND_REMOVE,
  GROUND_UPDATE_PROPS,
  GROUNDS_UPDATE,
  KEY_DOWN,
  KEY_LEFT,
  KEY_RIGHT,
  KEY_UP,
  PLAYER_UPDATED,
  PLAYER_UPDATE_RELATIVE_POS,
  X_ANGLE_CHANGE,
  Z_ANGLE_CHANGE,
  ZOOM_CHANGE
} from './actions';

import blocksSettings from '../settings/blocks';
import boardSettings from '../settings/board';

import { initBlock, initMap } from '../services/board';
import { getBlock, getPlayerState, getStateOnPlayerMove } from '../services/player';

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

  ...initMap()
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case BLOCK_REMOVE: {
      const { x, y, z } = action;
      const { blocks } = state;
      return {
        ...state,
        blocks: {
          ...blocks,
          [`${z}-${x}-${y}`]: initBlock('empty', blocksSettings, boardSettings.size, x, y, z)
        }
      };
    }

    case BLOCK_UPDATE_PROPS: {
      const { props, x, y, z } = action;
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
      const { props, x, y, z } = action;
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

    case BOARD_LOADED: {
      return {
        ...state,
        blocks: action.blocks,
        grounds: action.grounds,
        player: action.player
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

    case PLAYER_UPDATED: {
      return {
        ...state,
        playerControls: true
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
