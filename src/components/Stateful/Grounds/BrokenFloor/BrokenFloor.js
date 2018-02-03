import { connect } from 'react-redux';

import { handleGroundRemove, handlePlayerUpdated } from '../../../../redux/actions';
import { addAdjacentProps } from '../../../../services/board';

import BrokenFloor from '../../../Stateless/Grounds/BrokenFloor/BrokenFloor';
import gameSettings from '../../../../settings/game';

const mapStateToProps = (state) => ({
  grounds: state.grounds
});

const mapDispatchToProps = (dispatch) => ({
  onMoveIn: () => dispatch(handlePlayerUpdated()),
  onMoveOut: (prevProps) => {
    const { x, y, z } = prevProps;
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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps, {withRef: true})(BrokenFloor);
