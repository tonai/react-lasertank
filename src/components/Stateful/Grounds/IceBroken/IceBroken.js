import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import pipe from 'ramda/es/pipe';

import { breakable, breakableMapDispatchToProps, breakableMapStateToProps } from '../../Behaviours/Breakable/Breakable';
import { slippy, slippyMapDispatchToProps, slippyMapStateToProps } from '../../Behaviours/Slippy/Slippy';
import FloorBroken from '../../../Stateless/Grounds/FloorBroken/FloorBroken';

class StatefulIceBroken extends PureComponent {

  render() {
    return (<FloorBroken {...this.props}/>);
  }

}

const mapStateToProps = (state) => ({
  grounds: state.grounds,
  ...breakableMapStateToProps(state),
  ...slippyMapStateToProps(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...breakableMapDispatchToProps(dispatch),
  ...slippyMapDispatchToProps(dispatch),
});

export default pipe(
  breakable,
  slippy,
  connect(mapStateToProps,  mapDispatchToProps,  null,  {withRef: true})
)(StatefulIceBroken);
