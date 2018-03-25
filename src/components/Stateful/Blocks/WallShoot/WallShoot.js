import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { addAdjacentProps } from '../../../../services/board';
import { getSidePoint } from '../../../../services/shoot';

import WallShoot from '../../../Stateless/Blocks/WallShoot/WallShoot';

class StatefulWallShoot extends PureComponent {

  onShoot(direction, point) {
    return {
      direction,
      points: [
        getSidePoint(direction, point, this.props),
      ]
    };
  }

  render() {
    return (<WallShoot {...this.props}/>);
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

export default connect(mapStateToProps, null, mergeProps, {withRef: true})(StatefulWallShoot);
