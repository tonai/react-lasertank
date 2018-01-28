import { connect } from 'react-redux';
import mathMod from 'ramda/es/mathMod';

import { handlePlayerUpdateRelativePos } from '../../../../redux/actions';
import gameSettings from '../../../../settings/game';
import { addAdjacentProps } from '../../../../services/board';

import Ice from '../../../Stateless/Grounds/Ice/Ice';

const mapStateToProps = (state) => {
  return ({
    direction: state.player ? state.player.props.direction : 0,
    grounds: state.grounds
  });
};

const mapDispatchToProps = (dispatch) => ({
  onMoveOver: (direction) => {
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
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...dispatchProps,
  ...addAdjacentProps(stateProps.grounds, ownProps.x, ownProps.y, ownProps.z),
  onMoveOver: () => dispatchProps.onMoveOver(stateProps.direction)
});

export default connect(mapStateToProps,  mapDispatchToProps,  mergeProps,  {withRef: true})(Ice);
