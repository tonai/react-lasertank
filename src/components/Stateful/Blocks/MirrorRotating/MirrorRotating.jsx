import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import mathMod from 'ramda/es/mathMod';

import { handleBlockUpdateProps } from '../../../../redux/actions';
import { getMiddlePoint, getSidePoint } from '../../../../services/shoot';

import MirrorRotating from '../../../Stateless/Blocks/MirrorRotating/MirrorRotating';

class StatefulMirrorRotating extends PureComponent {

  onShoot(shootDirection, point) {
    const { direction, handleBlockUpdateProps, x, y, z } = this.props;
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
          {
            ...getSidePoint(shootDirection + 180, point, this.props),
            action: handleBlockUpdateProps.bind(null, x, y, z, {direction: direction + 90}),
          }
        ]};
    }
  }

  render() {
    return (<MirrorRotating {...this.props}/>);
  }

}

const mapDispatchToProps = (dispatch) => ({
  handleBlockUpdateProps: (x, y, z, props) => dispatch(handleBlockUpdateProps(x, y, z, props)),
});

export default connect(null, mapDispatchToProps, null, {withRef: true})(StatefulMirrorRotating);
