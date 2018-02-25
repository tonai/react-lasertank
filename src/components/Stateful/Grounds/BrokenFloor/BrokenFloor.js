import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import pipe from 'ramda/es/pipe';

import { breakable, breakableMapDispatchToProps, breakableMapStateToProps } from '../../Behaviours/Breakable/Breakable';
import { solid, solidMapDispatchToProps, solidMapStateToProps } from '../../Behaviours/Solid/Solid';
import BrokenFloor from '../../../Stateless/Grounds/BrokenFloor/BrokenFloor';

class StatefulBrokenFloor extends PureComponent {

  render() {
    return (<BrokenFloor {...this.props}/>);
  }

}

const mapStateToProps = (state) => ({
  grounds: state.grounds,
  ...breakableMapStateToProps(state),
  ...solidMapStateToProps(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...breakableMapDispatchToProps(dispatch),
  ...solidMapDispatchToProps(dispatch),
});

export default pipe(
  breakable,
  solid,
  connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})
)(StatefulBrokenFloor);
