import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import mathMod from 'ramda/es/mathMod';
import pipe from 'ramda/es/pipe';

import { handleBlockMove } from '../../../../redux/actions';
import { getMiddlePoint, getSidePoint } from '../../../../services/shoot';

import { movable, movableMapDispatchToProps, movableMapStateToProps } from '../../Behaviours/Movable/Movable';
import MirrorBlock from '../../../Stateless/Blocks/MirrorBlock/MirrorBlock';

class StatefulMirrorBlock extends PureComponent {

  getStartPoint(direction, shootPoint) {
    const { handleBlockMove, x, y, z } = this.props;
    const { point } = getSidePoint(direction + 180, shootPoint, this.props);
    switch (mathMod(direction, 360)) {
      case 0:
        return {
          action: handleBlockMove.bind(this, x, y, z, x + 1, y, z),
          point
        };
      case 90:
        return {
          action: handleBlockMove.bind(this, x, y, z, x, y + 1, z),
          point
        };
      case 180:
        return {
          action: handleBlockMove.bind(this, x, y, z, x - 1, y, z),
          point
        };
      case 270:
        return {
          action: handleBlockMove.bind(this, x, y, z, x, y - 1, z),
          point
        };
      default:
        return null;
    }
  }

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
        return { points: [
          this.getStartPoint(shootDirection, point),
          getSidePoint(shootDirection + 180, point, this.props)
        ] };
    }
  }

  render() {
    return (<MirrorBlock {...this.props}/>);
  }

}

const mapStateToProps = (state) => ({
  ...movableMapStateToProps(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleBlockMove: (x1, y1, z1, x2, y2, z2) => dispatch(handleBlockMove(x1, y1, z1, x2, y2, z2)),
  ...movableMapDispatchToProps(dispatch),
});

export default pipe(
  movable,
  connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})
)(StatefulMirrorBlock);
