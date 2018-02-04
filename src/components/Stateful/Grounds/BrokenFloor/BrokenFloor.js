import { connect } from 'react-redux';

import gameSettings from '../../../../settings/game';

import { handleGroundRemove, handleGroundUpdateProps, handlePlayerControlsUpdate } from '../../../../redux/actions';
import { addAdjacentProps } from '../../../../services/board';
import { setTimeout } from '../../../../services/utils';

import BrokenFloor from '../../../Stateless/Grounds/BrokenFloor/BrokenFloor';

const mapStateToProps = (state) => ({
  grounds: state.grounds
});

const mapDispatchToProps = (dispatch) => ({
  onMoveIn: () => dispatch(handlePlayerControlsUpdate()),
  onMoveOut: (prevProps) => {
    const { x, y, z } = prevProps;
    dispatch(handleGroundUpdateProps(x, y, z, {opacity: 0}));
    setTimeout(gameSettings.transitionTimer)
      .then(() => dispatch(handleGroundRemove(x, y, z)));
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...dispatchProps,
  ...addAdjacentProps(stateProps.grounds, ownProps.x, ownProps.y, ownProps.z)
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps, {withRef: true})(BrokenFloor);
