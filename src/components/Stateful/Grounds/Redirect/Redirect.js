import { connect } from 'react-redux';
import mathMod from 'ramda/es/mathMod';

import { handlePlayerUpdateRelativePos } from '../../../../redux/actions';
import gameSettings from '../../../../settings/game';

import Redirect from '../../../Stateless/Grounds/Redirect/Redirect';

const mapStateToProps = (state) => {
  return ({
    direction: state.player ? state.player.props.direction : 0
  });
};

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
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...dispatchProps,
  onMoveIn: () => dispatchProps.onMoveIn(ownProps.direction)
});

export default connect(mapStateToProps,  mapDispatchToProps,  mergeProps,  {withRef: true})(Redirect);
