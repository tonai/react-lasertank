import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { handlePlayerControlsUpdate } from '../../../../redux/actions';
import { addAdjacentProps } from '../../../../services/board';

import Floor from '../../../Stateless/Grounds/Floor/Floor';

class StatefulFloor extends PureComponent {

  onMoveIn() {
    const { handlePlayerControlsUpdate } = this.props;
    handlePlayerControlsUpdate();
  }

  render() {
    return (<Floor {...this.props}/>);
  }

}

const mapStateToProps = (state) => ({
  grounds: state.grounds,
});

const mapDispatchToProps = (dispatch) => ({
  handlePlayerControlsUpdate: (...params) => dispatch(handlePlayerControlsUpdate(...params)),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  ...addAdjacentProps(stateProps.grounds, ownProps.x, ownProps.y, ownProps.z)
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps, {withRef: true})(StatefulFloor);
