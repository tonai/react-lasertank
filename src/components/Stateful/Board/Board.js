import { connect } from 'react-redux';

import { handleBoardLoaded } from '../../../redux/actions';

import Board from '../../Stateless/Board/Board';

const mapStateToProps = (state) => ({
  blocks: state.blocks,
  grounds: state.grounds,
  player: state.player
});

const mapDispatchToProps = (dispatch) => ({
  onBoardLoaded: ([blocks, grounds, player]) => dispatch(handleBoardLoaded(blocks, grounds, player))
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
