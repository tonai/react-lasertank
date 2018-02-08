import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import gameSettings from '../../../../settings/game';

import { handleGroundRemove, handleGroundUpdateProps, handlePlayerUpdateRelativePos } from '../../../../redux/actions';
import { setTimeout } from '../../../../services/utils';

import BrokenFloor from '../../../Stateless/Grounds/BrokenFloor/BrokenFloor';

class StatefulBrokenIce extends PureComponent {

  onMoveIn(prevProps, nextProps) {
    const { handlePlayerUpdateRelativePos } = this.props;
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

    setTimeout(gameSettings.transitionTimer)
      .then(() => handlePlayerUpdateRelativePos(xRel, yRel, 0));
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

const mapStateToProps = (state) => {
  return ({
    grounds: state.grounds,
  });
};

const mapDispatchToProps = (dispatch) => ({
  handleGroundRemove: (...params) => dispatch(handleGroundRemove(...params)),
  handleGroundUpdateProps: (...params) => dispatch(handleGroundUpdateProps(...params)),
  handlePlayerUpdateRelativePos: (...params) => dispatch(handlePlayerUpdateRelativePos(...params)),
});

export default connect(mapStateToProps,  mapDispatchToProps,  null,  {withRef: true})(StatefulBrokenIce);
