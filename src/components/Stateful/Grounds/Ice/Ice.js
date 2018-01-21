import { connect } from 'react-redux';
import mathMod from 'ramda/es/mathMod';

import { handlePlayerUpdateRelativePos } from '../../../../redux/actions';
import gameSettings from '../../../../settings/game';

import Ice from '../../../Stateless/Grounds/Ice/Ice';

const mapStateToProps = (state) => ({
  direction: state.playerDirection
});

const mapDispatchToProps = (dispatch) => ({
  onMoveIn: (direction) => {
    let x = 0;
    let y = 0;

    switch(mathMod(direction, 360)) {
      case 0:
        x++;
        break;

      case 90:
        y++;
        break;

      case 180:
        x--;
        break;

      case 270:
        y--;
        break;

      default:
    }

    setTimeout(() => dispatch(handlePlayerUpdateRelativePos(x, y, 0)), gameSettings.transitionTimer);
  },
  onMoveOver: () => {
    setTimeout(() => dispatch(handlePlayerUpdateRelativePos(0, 0, -1)), gameSettings.transitionTimer);
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  onMoveIn: () => dispatchProps.onMoveIn(stateProps.direction)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  {withRef: true}
)(Ice);
