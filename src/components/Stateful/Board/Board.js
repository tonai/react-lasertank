import { connect } from 'react-redux';

import { handleBlocksUpdate, handleBoardLoaded, handleGroundsUpdate } from '../../../redux/actions';

import Board from '../../Stateless/Board/Board';

const mapStateToProps = (state) => ({
  blocks: state.blocks,
  grounds: state.grounds,
  player: state.player
});

const mapDispatchToProps = (dispatch) => ({
  onBoardLoaded: ([blocks, grounds, player]) => dispatch(handleBoardLoaded(blocks, grounds, player)),
  onUpdateBlocks: (blocks) => dispatch(handleBlocksUpdate(blocks)),
  onUpdateGrounds: (grounds) => dispatch(handleGroundsUpdate(grounds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
