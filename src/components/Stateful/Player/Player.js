import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getBlock } from '../../../services/player';

import KeyControls from '../KeyControls/KeyControls';
import Player from '../../Stateless/Player/Player';

class StatefulPlayer extends PureComponent {

  /* Methods */

  componentDidUpdate(prevProps) {
    const { x: x1, y: y1, z: z1 } = prevProps;
    const { blocks, grounds, x: x2, y: y2, z: z2 } = this.props;
    if (x1 !== x2 || y1 !== y2 || z1 !== z2) {
      const block1 = getBlock(blocks, x1, y1, z1);
      const ground1 = getBlock(grounds, x1, y1, z1);
      if (block1 && block1.ref.props.onMoveOut) {
        block1.ref.props.onMoveOut(prevProps, this.props);
      } else if (ground1 && ground1.ref.props.onMoveOut) {
        ground1.ref.props.onMoveOut(prevProps, this.props);
      }
      const block2 = getBlock(blocks, x2, y2, z2);
      const ground2 = getBlock(grounds, x2, y2, z2);
      if (block2 && block2.ref.props.onMoveIn) {
        block2.ref.props.onMoveIn(prevProps, this.props);
      } else if (ground2 && ground2.ref.props.onMoveIn) {
        ground2.ref.props.onMoveIn(prevProps, this.props);
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
