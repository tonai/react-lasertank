import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { addAdjacentProps } from '../../../../services/board';

import Water from '../../../Stateless/Grounds/Water/Water';

class StatefulWater extends PureComponent {

  onMoveIn() {
    console.log('Plouf !');
  }

  render() {
    return (<Water {...this.props}/>);
  }

}

const mapStateToProps = (state) => ({
  grounds: state.grounds,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  ...addAdjacentProps(stateProps.grounds, ownProps.x, ownProps.y, ownProps.z)
});

export default connect(mapStateToProps, null, mergeProps, {withRef: true})(StatefulWater);
