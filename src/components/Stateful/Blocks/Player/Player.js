import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import pipe from 'ramda/es/pipe';

import { getMiddlePoint } from '../../../../services/shoot';
import { handlePlayerLose } from '../../../../redux/actions';

import { movable, movableMapDispatchToProps, movableMapStateToProps } from '../../Behaviours/Movable/Movable';
import KeyControls from '../../KeyControls/KeyControls';
import Player from '../../../Stateless/Blocks/Player/Player';

class StatefulPlayer extends PureComponent {

  /* Properties */

  initPlayer = (ref) => {
    this.ref = ref;
  };

  /* Methods */

  getShootPoint() {
    return this.ref.ref.shootPoint;
  }

  onShoot(direction, point) {
    const { handlePlayerLose } = this.props;
    return {
      points: [ {
        ...getMiddlePoint(direction, point, this.props),
        action: handlePlayerLose
      } ]
    };
  }

  render() {
    const { size } = this.props;
    return (<div>
      <Player {...this.props} key="player" ref={this.initPlayer}/>
      <KeyControls size={size} />
    </div>);
  }

}

const mapStateToProps = (state) => ({
  ...movableMapStateToProps(state),
});

const mapDispatchToProps = (dispatch) => ({
  handlePlayerLose: () => dispatch(handlePlayerLose()),
  ...movableMapDispatchToProps(dispatch),
});

export default pipe(
  movable,
  connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})
)(StatefulPlayer);
