import { connect } from 'react-redux';

import { handleBoardLoaded } from '../../../redux/actions';

import Board from '../../Stateless/Board/Board';

const mapStateToProps = (state) => ({
  blocksSettings: state.blocksSettings,
  board: state.board,
  height: state.height,
  map: state.map,
  width: state.width
});

const mapDispatchToProps = (dispatch) => ({
  onBoardLoaded: (board) => dispatch(handleBoardLoaded(board))
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
