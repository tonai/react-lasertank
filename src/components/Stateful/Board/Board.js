import { connect } from 'react-redux';

import { handleBlocksLoaded, handleGroundsLoaded, handlePlayerLoaded } from '../../../redux/actions';

import Board from '../../Stateless/Board/Board';

const mapStateToProps = (state) => ({
  blocks: state.blocks,
  blocksSettings: state.blocksSettings,
  grounds: state.grounds,
  height: state.height,
  width: state.width
});

const mapDispatchToProps = (dispatch) => ({
  onBlocksLoaded: (board) => dispatch(handleBlocksLoaded(board)),
  onGroundsLoaded: (board) => dispatch(handleGroundsLoaded(board)),
  onPlayerLoaded: (player) => dispatch(handlePlayerLoaded(player))
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
