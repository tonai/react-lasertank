import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { addAdjacentProps } from '../../../../services/board';

import Water from '../../../Stateless/Blocks/Water/Water';

class StatefulWater extends PureComponent {

  onMoveIn() {
    console.log('Plouf !');
  }

  render() {
    return (<Water {...this.props}/>);
  }

}

const mapStateToProps = (state) => ({
  blocks: state.blocks,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  ...addAdjacentProps(stateProps.blocks, ownProps.x, ownProps.y, ownProps.z)
});

export default connect(mapStateToProps, null, mergeProps, {withRef: true})(StatefulWater);
