import { KEY_DOWN, KEY_LEFT, KEY_RIGHT, KEY_UP, X_ANGLE_CHANGE, Z_ANGLE_CHANGE, ZOOM_CHANGE } from './actions';

import { initMap } from '../services/board';
import { getPlayerOnKeyDown, getPlayerOnKeyLeft, getPlayerOnKeyRight, getPlayerOnKeyUp } from '../services/player';

const initialState = {
  xAngle : 45,
  zAngle: 45,
  zoom: 1,
  ...initMap()
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case KEY_DOWN:
      return {
        ...state,
        player: getPlayerOnKeyDown(action.player.props)
      };

    case KEY_LEFT:
      return {
        ...state,
        player: getPlayerOnKeyLeft(action.player.props)
      };

    case KEY_RIGHT:
      return {
        ...state,
        player: getPlayerOnKeyRight(action.player.props)
      };

    case KEY_UP:
      return {
        ...state,
        player: getPlayerOnKeyUp(action.player.props)
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
