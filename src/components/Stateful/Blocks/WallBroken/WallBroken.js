import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import mathMod from 'ramda/es/mathMod';

import { addAdjacentProps } from '../../../../services/board';
import { getSidePoint } from '../../../../services/shoot';

import WallBroken from '../../../Stateless/Blocks/WallBroken/WallBroken';
import { handleBlockRemove } from '../../../../redux/actions';

class StatefulWallBroken extends PureComponent {

  onShoot(direction, point) {
    const { handleBlockRemove, x, y, z } = this.props;
    return {
      points: [ {
        ...getSidePoint(mathMod(direction + 180, 360), point, this.props),
        action: handleBlockRemove.bind(null, x, y, z)
      } ]
    };
  }

  render() {
    return (<WallBroken {...this.props}/>);
  }

}

const mapStateToProps = (state) => ({
  blocks: state.blocks,
});

const mapDispatchToProps = (dispatch) => ({
  handleBlockRemove: (...params) => dispatch(handleBlockRemove(...params)),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  ...addAdjacentProps(stateProps.blocks, ownProps.x, ownProps.y, ownProps.z)
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps, {withRef: true})(StatefulWallBroken);
