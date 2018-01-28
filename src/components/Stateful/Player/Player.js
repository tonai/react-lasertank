import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getBlock } from '../../../services/player';

import KeyControls from '../KeyControls/KeyControls';
import Player from '../../Stateless/Player/Player';

class StatefulPlayer extends PureComponent {

  /* Methods */

  componentDidUpdate(prevProps) {
    const { blocks, grounds, x, y, z } = this.props;
    if (prevProps.x !== x || prevProps.y !== y || prevProps.z !== z) {
      const block = getBlock(blocks, x, y, z);
      const ground = getBlock(grounds, x, y, z);
      if (block && block.ref.props.onMoveOver) {
        block.ref.props.onMoveOver();
      } else if (ground && ground.ref.props.onMoveOver) {
        ground.ref.props.onMoveOver();
      }
    }
  }

  render() {
    return (<div>
      <Player {...this.props} key="player"/>
      <KeyControls />
    </div>);
  }

}

const mapStateToProps = (state) => ({
  blocks: state.blocks,
  grounds: state.grounds
});

export default connect(mapStateToProps, null, null, {withRef: true})(StatefulPlayer);
