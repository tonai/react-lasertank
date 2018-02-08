import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import values from 'ramda/es/values';

import gameSettings from '../../../../settings/game';

import { handleBlockRemove, handlePlayerControlsUpdate, handleBlockUpdateProps } from '../../../../redux/actions';
import { setTimeout } from '../../../../services/utils';

import Switch from '../../../Stateless/Grounds/Switch/Switch';

class StatefulSwitch extends PureComponent {

  onMoveIn() {
    const { blocks, id, handleDoorOpen, handleDoorRemove } = this.props;
    const doors = values(blocks).filter(block => block.props.originalName === 'door' && block.props.id === id);
    const actions1 = doors.map(door => handleBlockUpdateProps(door.props.x, door.props.y, door.props.z, {open: 1}));
    const actions2 = doors.map(door => handleBlockRemove(door.props.x, door.props.y, door.props.z));
    actions2.push(handlePlayerControlsUpdate());

    setTimeout(gameSettings.transitionTimer)
      .then(() => handleDoorOpen(actions1))
      .then(() => setTimeout(gameSettings.transitionTimer))
      .then(() => handleDoorRemove(actions2));
  }

  render() {
    return (<Switch {...this.props}/>);
  }

}

const mapStateToProps = (state) => ({
  blocks: state.blocks,
  zAngle: state.zAngle,
});

const mapDispatchToProps = (dispatch) => ({
  handleDoorOpen: (actions) => dispatch(batchActions(actions)),
  handleDoorRemove: (actions) => dispatch(batchActions(actions)),
});

export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(StatefulSwitch);
