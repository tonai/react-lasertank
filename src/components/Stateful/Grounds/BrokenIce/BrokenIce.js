import { connect } from 'react-redux';

import gameSettings from '../../../../settings/game';

import { handleGroundRemove, handleGroundUpdateProps, handlePlayerUpdateRelativePos } from '../../../../redux/actions';
import { addAdjacentProps } from '../../../../services/board';

import BrokenFloor from '../../../Stateless/Grounds/BrokenFloor/BrokenFloor';

const mapStateToProps = (state) => {
  return ({
    direction: state.player ? state.player.props.direction : 0,
    grounds: state.grounds
  });
};

const mapDispatchToProps = (dispatch) => ({
  onMoveIn: (prevProps, nextProps) => {
    const { x, y } = nextProps;
    let xRel = 0;
    let yRel = 0;

    if (x > prevProps.x) {
      xRel = 1;
    } else if (x < prevProps.x) {
      xRel = -1;
    }

    if (y > prevProps.y) {
      yRel = 1;
    } else if (y < prevProps.y) {
      yRel = -1;
    }

    setTimeout(() => {
      dispatch(handlePlayerUpdateRelativePos(xRel, yRel, 0));
    }, gameSettings.transitionTimer);
  },
  onMoveOut: (prevProps) => {
    const { x, y, z } = prevProps;
    dispatch(handleGroundUpdateProps(x, y, z, {opacity: 0}));
    setTimeout(() => {
      dispatch(handleGroundRemove(x, y, z));
    }, gameSettings.transitionTimer);
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...dispatchProps,
  ...addAdjacentProps(stateProps.grounds, ownProps.x, ownProps.y, ownProps.z)
});

export default connect(mapStateToProps,  mapDispatchToProps,  mergeProps,  {withRef: true})(BrokenFloor);
