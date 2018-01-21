import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getBlock } from '../../../services/board';

import Player from '../../Stateless/Player/Player';

class StatefulPlayer extends PureComponent {

  componentDidUpdate(prevProps) {
    const { board, x, y, z } = this.props;
    if (prevProps.x !== x || prevProps.y !== y || prevProps.z !== z) {
      if (board[z] && board[z][x] && board[z][x][y] && board[z][x][y].props.onMoveIn) {
        board[z][x][y].props.onMoveIn();
      } else if (z > 0 && board[z - 1][x][y].props.onMoveOver) {
        board[z - 1][x][y].props.onMoveOver();
      }
    }
  }

  render() {
    const { blocksSettings, playerDirection: direction, x, y, z, size } = this.props;
    const block = getBlock(['player', {direction}], blocksSettings, size, x, y, z);
    return (<Player {...block.props}/>);
  }

}

const mapStateToProps = (state) => ({
  blocksSettings: state.blocksSettings,
  board: state.board,
  player: state.player,
  playerDirection: state.playerDirection,
  x: state.playerX,
  y: state.playerY,
  z: state.playerZ
});

export default connect(mapStateToProps)(StatefulPlayer);
