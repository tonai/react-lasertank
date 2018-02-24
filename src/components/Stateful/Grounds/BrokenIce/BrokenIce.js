import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import gameSettings from '../../../../settings/game';

import { handleGroundRemove, handleGroundUpdateProps, handleBlockMoveRelative } from '../../../../redux/actions';
import { setTimeout } from '../../../../services/utils';

import BrokenFloor from '../../../Stateless/Grounds/BrokenFloor/BrokenFloor';

class StatefulBrokenIce extends PureComponent {

  onMoveIn(prevProps, nextProps) {
    const { handleBlockMoveRelative, x, y, z } = this.props;
    let deltaX = 0;
    let deltaY = 0;

    if (nextProps.x > prevProps.x) {
      deltaX = 1;
    } else if (nextProps.x < prevProps.x) {
      deltaX = -1;
    }

    if (nextProps.y > prevProps.y) {
      deltaY = 1;
    } else if (nextProps.y < prevProps.y) {
      deltaY = -1;
    }

    setTimeout(gameSettings.transitionTimer)
      .then(() => handleBlockMoveRelative(x, y, z, deltaX, deltaY, 0));
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
  handleBlockMoveRelative: (...params) => dispatch(handleBlockMoveRelative(...params)),
});

export default connect(mapStateToProps,  mapDispatchToProps,  null,  {withRef: true})(StatefulBrokenIce);
