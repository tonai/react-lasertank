import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { handlePlayerUpdate } from '../../../redux/actions';
import { getBlock } from '../../../services/board';

class StatefulPlayer extends PureComponent {

  componentDidUpdate() {
    this.props.onPlayerUpdate();
  }

  render() {
    const { blocksSettings, playerDirection: direction, x, y, z, size } = this.props;
    const block = getBlock(['player', {direction}], blocksSettings, size, x, y, z);
    const Component = block.component;
    return (<Component {...block.props}/>);
  }

}

const mapStateToProps = (state) => ({
  blocksSettings: state.blocksSettings,
  player: state.player,
  playerDirection: state.playerDirection,
  x: state.playerX,
  y: state.playerY,
  z: state.playerZ
});

const mapDispatchToProps = (dispatch) => ({
  onPlayerUpdate: () => dispatch(handlePlayerUpdate())
});

export default connect(mapStateToProps, mapDispatchToProps)(StatefulPlayer);
