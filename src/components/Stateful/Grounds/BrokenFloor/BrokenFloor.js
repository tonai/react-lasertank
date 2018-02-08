import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import gameSettings from '../../../../settings/game';

import { handleGroundRemove, handleGroundUpdateProps, handlePlayerControlsUpdate } from '../../../../redux/actions';
import { setTimeout } from '../../../../services/utils';

import BrokenFloor from '../../../Stateless/Grounds/BrokenFloor/BrokenFloor';

class StatefulBrokenFloor extends PureComponent {

  onMoveIn() {
    const { handlePlayerControlsUpdate } = this.props;
    handlePlayerControlsUpdate();
  }

  onMoveOut(prevProps) {
    const { handleGroundRemove, handleGroundUpdateProps } = this.props;
    const { x, y, z } = prevProps;
    handleGroundUpdateProps(x, y, z, {opacity: 0});
    setTimeout(gameSettings.transitionTimer)
      .then(() => handleGroundRemove(x, y, z));
  }

  render() {
    return (<BrokenFloor {...this.props}/>);
  }

}

const mapStateToProps = (state) => ({
  grounds: state.grounds,
});

const mapDispatchToProps = (dispatch) => ({
  handleGroundRemove: (...params) => dispatch(handleGroundRemove(...params)),
  handleGroundUpdateProps: (...params) => dispatch(handleGroundUpdateProps(...params)),
  handlePlayerControlsUpdate: (...params) => dispatch(handlePlayerControlsUpdate(...params)),
});

export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(StatefulBrokenFloor);
