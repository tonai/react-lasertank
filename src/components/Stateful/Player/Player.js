import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getBlock } from '../../../services/board';

import Player from '../../Stateless/Player/Player';

class StatefulPlayer extends PureComponent {

  /* Methods */

  componentDidUpdate(prevProps) {
    const { boardGrounds, x, y, z } = this.props;
    if (prevProps.x !== x || prevProps.y !== y || prevProps.z !== z) {
      if (boardGrounds[z]
        && boardGrounds[z][x]
        && boardGrounds[z][x][y]
        && boardGrounds[z][x][y].props.onMoveIn) {
        boardGrounds[z][x][y].props.onMoveIn();
      } else if (z > 0 && boardGrounds[z - 1][x][y].props.onMoveOver) {
        console.log('move over');
        boardGrounds[z - 1][x][y].props.onMoveOver();
      }
    }
  }

  render() {
    /*const { blocksSettings, playerDirection: direction, settings, size, x, y, z } = this.props;
    const blockSettings = { ...settings, direction };
    const block = getBlock(['player', blockSettings], blocksSettings, size, x, y, z);
    return (<Player {...block.props}/>);*/
    return (<Player {...this.props}/>);
  }

}

const mapStateToProps = (state) => ({
  blocksSettings: state.blocksSettings,
  boardGrounds: state.boardGrounds
});

export default connect(mapStateToProps, null, null, {withRef: true})(StatefulPlayer);
