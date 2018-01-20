import { BOARD_LOADED, KEY_DOWN, KEY_LEFT, KEY_RIGHT, KEY_UP, PLAYER_UPDATED, SPRITES_LOADED, X_ANGLE_CHANGE,
  Z_ANGLE_CHANGE, ZOOM_CHANGE } from './actions';

import blocksSettings from '../settings/blocks';

import { initMap } from '../services/board';
import { getPlayerOnKeyDown, getPlayerOnKeyLeft, getPlayerOnKeyRight, getPlayerOnKeyUp } from '../services/player';

const initialState = {
  blocksSettings,
  board: null,
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
    case BOARD_LOADED:
      return {
        ...state,
        board: action.board
      };

    case KEY_DOWN:
      player = getPlayerOnKeyDown(state.board, state.playerDirection, state.playerX, state.playerY, state.playerZ);
      if (player) {
        return {
          ...state,
          ...player,
          playerControls: false
        };
      }
      return state;

    case KEY_LEFT:
      player = getPlayerOnKeyLeft(state.board, state.playerDirection, state.playerX, state.playerY, state.playerZ);
      if (player) {
        return {
          ...state,
          ...player,
          playerControls: false
        };
      }
      return state;

    case KEY_RIGHT:
      player = getPlayerOnKeyRight(state.board, state.playerDirection, state.playerX, state.playerY, state.playerZ);
      if (player) {
        return {
          ...state,
          ...player,
          playerControls: false
        };
      }
      return state;

    case KEY_UP:
      player = getPlayerOnKeyUp(state.board, state.playerDirection, state.playerX, state.playerY, state.playerZ);
      if (player) {
        return {
          ...state,
          ...player,
          playerControls: false
        };
      }
      return state;

    case PLAYER_UPDATED:
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
