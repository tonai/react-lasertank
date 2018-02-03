import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';

import { handleBlocksUpdate, handleGroundsUpdate, handlePlayerUpdate } from '../../../redux/actions';

import Board from '../../Stateless/Board/Board';

const mapStateToProps = (state) => ({
  blocks: state.blocks,
  grounds: state.grounds,
  player: state.player
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateBoard: ([blocks, grounds, player]) => dispatch(batchActions([
    handleBlocksUpdate(blocks),
    handleGroundsUpdate(grounds),
    handlePlayerUpdate(player)
  ])),
  onUpdateBlocks: (blocks) => dispatch(handleBlocksUpdate(blocks)),
  onUpdateGrounds: (grounds) => dispatch(handleGroundsUpdate(grounds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
