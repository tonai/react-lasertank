import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import mathMod from 'ramda/es/mathMod';

import { addAdjacentProps } from '../../../../services/board';
import { getMiddlePoint, getSidePoint } from '../../../../services/shoot';

import MirrorWall from '../../../Stateless/Blocks/MirrorWall/MirrorWall';

class StatefulMirrorWall extends PureComponent {

  onShoot(direction, point) {
    switch (mathMod(direction - this.props.direction, 360)) {
      case 180:
        return {
          direction: this.props.direction + 90,
          points: [
            getSidePoint(direction + 180, point, this.props),
            getMiddlePoint(direction, point, this.props),
            getSidePoint(this.props.direction + 90, point, this.props),
          ]
        };

      case 270:
        return {
          direction: this.props.direction,
          points: [
            getSidePoint(direction + 180, point, this.props),
            getMiddlePoint(direction, point, this.props),
            getSidePoint(this.props.direction, point, this.props),
          ]
        };

      default:
        return { points: [ getSidePoint(direction + 180, point, this.props) ] };
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
