import { connect } from 'react-redux';

import { handleBlocksUpdate, handleGroundsUpdate, handlePlayerUpdate } from '../../../redux/actions';

import Board from '../../Stateless/Board/Board';

const mapStateToProps = (state) => ({
  blocks: state.blocks,
  grounds: state.grounds,
  player: state.player
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateBlocks: (blocks) => dispatch(handleBlocksUpdate(blocks)),
  onUpdateGrounds: (grounds) => dispatch(handleGroundsUpdate(grounds)),
  onUpdatePlayer: (player) => dispatch(handlePlayerUpdate(player))
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
