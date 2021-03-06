import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import mathMod from 'ramda/es/mathMod';

import { addAdjacentProps } from '../../../../services/board';
import { getMiddlePoint, getSidePoint } from '../../../../services/shoot';

import MirrorWall from '../../../Stateless/Blocks/MirrorWall/MirrorWall';

class StatefulMirrorWall extends PureComponent {

  onShoot(shootDirection, point) {
    const { direction } = this.props;
    switch (mathMod(shootDirection - direction, 360)) {
      case 180:
        return {
          direction: direction + 90,
          points: [
            getSidePoint(shootDirection + 180, point, this.props),
            getMiddlePoint(shootDirection, point, this.props),
            getSidePoint(direction + 90, point, this.props),
          ]
        };

      case 270:
        return {
          direction,
          points: [
            getSidePoint(shootDirection + 180, point, this.props),
            getMiddlePoint(shootDirection, point, this.props),
            getSidePoint(direction, point, this.props),
          ]
        };

      default:
        return { points: [ getSidePoint(shootDirection + 180, point, this.props) ] };
    }
  }

  render() {
    return (<MirrorWall {...this.props}/>);
  }

}

const mapStateToProps = (state) => ({
  blocks: state.blocks
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  ...addAdjacentProps(stateProps.blocks, ownProps.x, ownProps.y, ownProps.z)
});

export default connect(mapStateToProps, null, mergeProps, {withRef: true})(StatefulMirrorWall);
