import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import values from 'ramda/es/values';

import { handleBlockRemove, handlePlayerControlsUpdate, handleBlockUpdateProps } from '../../../../redux/actions';
import { addAdjacentProps } from '../../../../services/board';

import Switch from '../../../Stateless/Grounds/Switch/Switch';
import gameSettings from '../../../../settings/game';
import { setTimeout } from '../../../../services/utils';

const mapStateToProps = (state) => ({
  blocks: state.blocks,
  zAngle: state.zAngle
});

const mapDispatchToProps = (dispatch) => ({
  onMoveIn: (blocks, x, y, z, id) => {
    const doors = values(blocks).filter(block => block.props.originalName === 'door' && block.props.id === id);
    const actions1 = doors.map(door => handleBlockUpdateProps(door.props.x, door.props.y, door.props.z, {open: 1}));
    const actions2 = doors.map(door => handleBlockRemove(door.props.x, door.props.y, door.props.z));

    setTimeout(gameSettings.transitionTimer)
      .then(() => dispatch(batchActions(actions1)))
      .then(() => setTimeout(gameSettings.transitionTimer))
      .then(() => dispatch(batchActions([
        ...actions2,
        handlePlayerControlsUpdate()
      ])));
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  ...addAdjacentProps(stateProps.blocks, ownProps.x, ownProps.y, ownProps.z),
  onMoveIn: () => dispatchProps.onMoveIn(stateProps.blocks, ownProps.x, ownProps.y, ownProps.z, ownProps.id)
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps, {withRef: true})(Switch);
