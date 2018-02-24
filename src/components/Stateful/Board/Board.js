import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';

import { handleBlocksUpdate, handleGroundsUpdate } from '../../../redux/actions';

import Board from '../../Stateless/Board/Board';

const mapStateToProps = (state) => ({
  blocks: state.blocks,
  grounds: state.grounds,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateBoard: ([blocks, grounds]) => dispatch(batchActions([
    handleBlocksUpdate(blocks),
    handleGroundsUpdate(grounds),
  ])),
  onUpdateBlocks: (blocks) => dispatch(handleBlocksUpdate(blocks)),
  onUpdateGrounds: (grounds) => dispatch(handleGroundsUpdate(grounds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
