import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import pipe from 'ramda/es/pipe';

import { addAdjacentProps } from '../../../../services/board';

import { solid, solidMapDispatchToProps, solidMapStateToProps } from '../../Behaviours/Solid/Solid';
import Floor from '../../../Stateless/Grounds/Floor/Floor';

class StatefulFloor extends PureComponent {

  render() {
    return (<Floor {...this.props}/>);
  }

}

const mapStateToProps = (state) => ({
  grounds: state.grounds,
  ...solidMapStateToProps(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...solidMapDispatchToProps(dispatch),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  ...addAdjacentProps(stateProps.grounds, ownProps.x, ownProps.y, ownProps.z)
});

export default pipe(
  solid,
  connect(mapStateToProps, mapDispatchToProps, mergeProps, {withRef: true})
)(StatefulFloor);
