import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import gameSettings from '../../../../settings/game';

import { handleBlockMoveRelative } from '../../../../redux/actions';
import { addAdjacentProps } from '../../../../services/board';
import { setTimeout } from '../../../../services/utils';

import Floor from '../../../Stateless/Grounds/Floor/Floor';

class StatefulIce extends PureComponent {

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

  render() {
    return (<Floor {...this.props}/>);
  }

}

const mapStateToProps = (state) => {
  return ({
    grounds: state.grounds,
  });
};

const mapDispatchToProps = (dispatch) => ({
  handleBlockMoveRelative: (...params) => dispatch(handleBlockMoveRelative(...params)),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  ...addAdjacentProps(stateProps.grounds, ownProps.x, ownProps.y, ownProps.z)
});

export default connect(mapStateToProps,  mapDispatchToProps,  mergeProps,  {withRef: true})(StatefulIce);
