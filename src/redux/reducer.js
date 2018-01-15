import { X_ANGLE_CHANGE, Z_ANGLE_CHANGE, ZOOM_CHANGE } from './actions';

const initialState = {
  xAngle : 45,
  zAngle: 45,
  zoom: 1
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
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
