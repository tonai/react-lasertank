import {
  BOARD_BLOCKS_LOADED,
  BOARD_GROUNDS_LOADED,
  KEY_DOWN,
  KEY_LEFT,
  KEY_RIGHT,
  KEY_UP,
  PLAYER_LOADED,
  PLAYER_UPDATED,
  PLAYER_UPDATE_RELATIVE_POS,
  SPRITES_LOADED,
  X_ANGLE_CHANGE,
  Z_ANGLE_CHANGE,
  ZOOM_CHANGE
} from './actions';

import blocksSettings from '../settings/blocks';

import { initMap } from '../services/board';
import { getPlayerOnKeyDown, getPlayerOnKeyLeft, getPlayerOnKeyRight, getPlayerOnKeyUp } from '../services/player';

const initialState = {
  blocksSettings,
  boardBlocks: null,
  boardGrounds: null,
  player: null,
  playerControls: true,
  spritesLoaded: false,
  xAngle : 45,
  zAngle: 45,
  zoom: 1,
  ...initMap()
};

export default function reducer(state = initialState, action) {
  let player;

  switch(action.type) {
    case BOARD_BLOCKS_LOADED:
      return {
        ...state,
        boardBlocks: action.board
      };

    case BOARD_GROUNDS_LOADED:
      return {
        ...state,
        boardGrounds: action.board
      };

    case KEY_DOWN:
      player = getPlayerOnKeyDown(
        state.boardBlocks,
        state.boardGrounds,
        state.playerDirection,
        state.playerX,
        state.playerY,
        state.playerZ
      );
      if (player) {
        return {
          ...state,
          ...player,
          playerControls: false
        };
      }
      return state;

    case KEY_LEFT:
      player = getPlayerOnKeyLeft(
        state.playerDirection,
        state.playerX,
        state.playerY,
        state.playerZ
      );
      if (player) {
        return {
          ...state,
          ...player
        };
      }
      return state;

    case KEY_RIGHT:
      player = getPlayerOnKeyRight(
        state.playerDirection,
        state.playerX,
        state.playerY,
        state.playerZ
      );
      if (player) {
        return {
          ...state,
          ...player
        };
      }
      return state;

    case KEY_UP:
      player = getPlayerOnKeyUp(
        state.boardBlocks,
        state.boardGrounds,
        state.playerDirection,
        state.playerX,
        state.playerY,
        state.playerZ
      );
      if (player) {
        return {
          ...state,
          ...player,
          playerControls: false
        };
      }
      return state;

    case PLAYER_LOADED:
      return {
        ...state,
        player: action.player
      };

    case PLAYER_UPDATED:
      return {
        ...state,
        playerControls: true
      };

    case PLAYER_UPDATE_RELATIVE_POS:
      if (state.boardGrounds[state.playerZ + action.z]
        && state.boardGrounds[state.playerZ + action.z][state.playerX + action.x]
        && state.boardGrounds[state.playerZ + action.z][state.playerX + action.x][state.playerY + action.y]) {
        return {
          ...state,
          playerX: state.playerX + action.x,
          playerY: state.playerY + action.y,
          playerZ: state.playerZ + action.z
        };
      }
      return {
        ...state,
        playerControls: true
      };

    case SPRITES_LOADED:
      return {
        ...state,
        blocksSettings: action.settings,
        spritesLoaded: true
      };

    case X_ANGLE_CHANGE:
      return {
        ...state,
        xAngle: action.value
      };

    case Z_ANGLE_CHANGE:
      return {
        ...state,
        zAngle: action.value
      };

    case ZOOM_CHANGE:
      return {
        ...state,
        zoom: action.value
      };

    default:
      return state;
  }
}
