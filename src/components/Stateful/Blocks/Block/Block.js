import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import mathMod from 'ramda/es/mathMod';
import pipe from 'ramda/es/pipe';

import { handleBlockMove } from '../../../../redux/actions';

import { movable, movableMapDispatchToProps, movableMapStateToProps } from '../../Behaviours/Movable/Movable';
import Block from '../../../Stateless/Blocks/Block/Block';

class StatefulBlock extends PureComponent {

  getStartPoint(direction, point) {
    const { handleBlockMove, size, x, y, z } = this.props;
    switch (mathMod(direction, 360)) {
      case 0:
        return {
          action: handleBlockMove.bind(this, x, y, z, x + 1, y, z),
          point: { x: x * size, y: point.y, z: point.z }
        };
      case 90:
        return {
          action: handleBlockMove.bind(this, x, y, z, x, y + 1, z),
          point: { x: point.x, y: y * size, z: point.z }
        };
      case 180:
        return {
          action: handleBlockMove.bind(this, x, y, z, x - 1, y, z),
          point: { x: (x + 1) * size, y: point.y, z: point.z }
        };
      case 270:
        return {
          action: handleBlockMove.bind(this, x, y, z, x, y - 1, z),
          point: { x: point.x, y: (y + 1) * size, z: point.z }
        };
      default:
        return null;
    }
  }

  getEndPoint(direction, point) {
    const { size, x, y } = this.props;
    switch (mathMod(direction, 360)) {
      case 0:
        return {point: {x: (x + 1) * size, y: point.y, z: point.z}};
      case 90:
        return {point: {x: point.x, y: (y + 1) * size, z: point.z}};
      case 180:
        return {point: {x: x * size, y: point.y, z: point.z}};
      case 270:
        return {point: {x: point.x, y: y * size, z: point.z}};
      default:
        return null;
    }
  }

  onShoot(direction, point) {
    return [
      this.getStartPoint(direction, point),
      this.getEndPoint(direction, point)
    ];
  }

  render() {
    return (<Block {...this.props}/>);
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
)(StatefulBlock);
