import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { handleShootClear, handleShootUpdate, handleShootIndexUpdate } from '../../../redux/actions';
import { setTimeout } from '../../../services/utils';

import ShootArea from '../../Stateless/ShootArea/ShootArea';

class StatefulShootArea extends PureComponent {

  state = {
    surfaces: [],
    index: 0
  };

  componentWillUpdate(nextProps) {
    if (nextProps.shootPoints !== this.props.shootPoints && nextProps.shootPoints.length > 1) {
      this.drawSurface(nextProps.shootPoints, nextProps.shootIndex);
    } else if (nextProps.shootIndex !== this.props.shootIndex) {
      this.drawSurface(nextProps.shootPoints, nextProps.shootIndex);
    }
  }

  drawSurface(points, index) {
    const { clearShoot, size, speed, updateShoot, updateShootIndex } = this.props;

    const x1 = points[index].x;
    const y1 = points[index].y;
    const z1 = points[index].z;

    const x2 = points[index + 1].x;
    const y2 = points[index + 1].y;
    const z2 = points[index + 1].z;

    const c = x2 === x1
      ? Math.sign(y2 - y1) * 90
      : x2 > x1
        ? Math.atan((y2 - y1) / (x2 - x1)) * 180 / Math.PI
        : Math.atan((y2 - y1) / (x1 - x2)) * 180 / Math.PI + 180;

    const length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) + (z2 - z1) * (z2 - z1));
    const time = length / speed;

    new Promise(resolve => resolve())
      .then(() => updateShoot({c, length: 0, size: this.props.size, time, x: x1, y: y1, z: z1}, index))
      .then(() => setTimeout(0))
      .then(() => updateShoot({ c, length, size: this.props.size, time, x: x1, y: y1, z: z1}, index))
      .then(() => setTimeout(time))
      .then(() => {
        if (points[index + 2]) {
          updateShootIndex(index + 1);
        } else {
          setTimeout(size / speed).then(clearShoot);
        }
      });
  }

  render() {
    const { shootSurfaces } = this.props;
    return (<ShootArea surfaces={shootSurfaces}/>);
  }

}

const mapStateToProps = (state) => ({
  shootIndex: state.shootIndex,
  shootPoints: state.shootPoints,
  shootSurfaces: state.shootSurfaces,
});

const mapDispatchToProps = (dispatch) => ({
  clearShoot: () => dispatch(handleShootClear()),
  updateShoot: (surface, index) => dispatch(handleShootUpdate(surface, index)),
  updateShootIndex: (surface, index) => dispatch(handleShootIndexUpdate(surface, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatefulShootArea);
