import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import gameSettings from '../../../../settings/game';

import { handlePlayerUpdateRelativePos } from '../../../../redux/actions';
import { addAdjacentProps } from '../../../../services/board';
import { setTimeout } from '../../../../services/utils';

import Floor from '../../../Stateless/Grounds/Floor/Floor';

class StatefulIce extends PureComponent {

  onMoveIn(prevProps, nextProps) {
    const { handlePlayerUpdateRelativePos } = this.props;
    let x = 0;
    let y = 0;

    if (nextProps.x > prevProps.x) {
      x = 1;
    } else if (nextProps.x < prevProps.x) {
      x = -1;
    }

    if (nextProps.y > prevProps.y) {
      y = 1;
    } else if (nextProps.y < prevProps.y) {
      y = -1;
    }

    setTimeout(gameSettings.transitionTimer)
      .then(() => handlePlayerUpdateRelativePos(x, y, 0));
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
  handlePlayerUpdateRelativePos: (...params) => dispatch(handlePlayerUpdateRelativePos(...params)),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  ...addAdjacentProps(stateProps.grounds, ownProps.x, ownProps.y, ownProps.z)
});

export default connect(mapStateToProps,  mapDispatchToProps,  mergeProps,  {withRef: true})(StatefulIce);
