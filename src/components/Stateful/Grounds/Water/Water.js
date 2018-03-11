import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import gameSettings from '../../../../settings/game';

import { addAdjacentProps } from '../../../../services/board';
import { handleBlockRemove, handleBlockUpdateProps, handlePlayerLose } from '../../../../redux/actions';
import { setTimeout } from '../../../../services/utils';

import Water from '../../../Stateless/Grounds/Water/Water';

class StatefulWater extends PureComponent {

  onMoveIn(prevProps, nextProps) {
    const { handleBlockRemove, handleBlockUpdateProps, handlePlayerLose } = this.props;
    if (prevProps.originalName === 'player') {
      handlePlayerLose();
    } else if (prevProps.originalName !== 'block') {
      const { x, y, z } = nextProps;
      setTimeout(gameSettings.transitionTimer)
        .then(() => handleBlockUpdateProps(x, y, z, {opacity: 0}))
        .then(() => setTimeout(gameSettings.transitionTimer))
        .then(() => handleBlockRemove(x, y, z));
    }
  }

  render() {
    return (<Water {...this.props}/>);
  }

}

const mapStateToProps = (state) => ({
  grounds: state.grounds,
});

const mapDispatchToProps = (dispatch) => ({
  handleBlockRemove: (x, y, z) => dispatch(handleBlockRemove(x, y, z)),
  handleBlockUpdateProps: (...params) => dispatch(handleBlockUpdateProps(...params)),
  handlePlayerLose: () => dispatch(handlePlayerLose()),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  ...addAdjacentProps(stateProps.grounds, ownProps.x, ownProps.y, ownProps.z)
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps, {withRef: true})(StatefulWater);
