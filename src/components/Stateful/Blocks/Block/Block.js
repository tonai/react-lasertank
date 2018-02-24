import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import mathMod from 'ramda/es/mathMod';

import { handleBlockMove } from '../../../../redux/actions';

import Block from '../../../Stateless/Blocks/Block/Block';
import { getBlock } from '../../../../services/blocks';

class StatefulBlock extends PureComponent {

  componentDidUpdate(prevProps) {
    const { x: x1, y: y1, z: z1 } = prevProps;
    const { active = 1, blocks, grounds, x: x2, y: y2, z: z2 } = this.props;
    if (active && !(x1 === x2 && y1 === y2 && z1 === z2)) {
      const block1 = getBlock(blocks, x1, y1, z1);
      const ground1 = getBlock(grounds, x1, y1, z1);
      if (block1 && block1.ref && block1.ref.onMoveOut) {
        block1.ref.onMoveOut(prevProps, this.props);
      } else if (ground1 && ground1.ref && ground1.ref.onMoveOut) {
        ground1.ref.onMoveOut(prevProps, this.props);
      }
      const block2 = getBlock(blocks, x2, y2, z2);
      const ground2 = getBlock(grounds, x2, y2, z2);
      if (block2 && block2.ref && block2.ref.onMoveIn) {
        block2.ref.onMoveIn(prevProps, this.props);
      } else if (ground2 && ground2.ref && ground2.ref.onMoveIn) {
        ground2.ref.onMoveIn(prevProps, this.props);
      }
    }
  }

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
  blocks: state.blocks,
  grounds: state.grounds
});

const mapDispatchToProps = (dispatch) => ({
  handleBlockMove: (x1, y1, z1, x2, y2, z2) => dispatch(handleBlockMove(x1, y1, z1, x2, y2, z2))
});

export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(StatefulBlock);
