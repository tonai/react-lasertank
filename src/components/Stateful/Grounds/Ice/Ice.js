import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import pipe from 'ramda/es/pipe';

import { addAdjacentProps } from '../../../../services/board';

import { slippy, slippyMapDispatchToProps, slippyMapStateToProps } from '../../Behaviours/Slippy/Slippy';
import Floor from '../../../Stateless/Grounds/Floor/Floor';

class StatefulIce extends PureComponent {

  render() {
    return (<Floor {...this.props}/>);
  }

}

const mapStateToProps = (state) => ({
  grounds: state.grounds,
  ...slippyMapStateToProps(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...slippyMapDispatchToProps(dispatch),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  ...addAdjacentProps(stateProps.grounds, ownProps.x, ownProps.y, ownProps.z)
});

export default pipe(
  slippy,
  connect(mapStateToProps,  mapDispatchToProps,  mergeProps,  {withRef: true})
)(StatefulIce);
