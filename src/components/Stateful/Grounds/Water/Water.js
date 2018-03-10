import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { addAdjacentProps } from '../../../../services/board';
import { handlePlayerLose } from '../../../../redux/actions';

import Water from '../../../Stateless/Grounds/Water/Water';

class StatefulWater extends PureComponent {

  onMoveIn() {
    this.props.handlePlayerLose();
  }

  render() {
    return (<Water {...this.props}/>);
  }

}

const mapStateToProps = (state) => ({
  grounds: state.grounds,
});

const mapDispatchToProps = (dispatch) => ({
  handlePlayerLose: () => dispatch(handlePlayerLose()),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  ...addAdjacentProps(stateProps.grounds, ownProps.x, ownProps.y, ownProps.z)
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps, {withRef: true})(StatefulWater);
