import { connect } from 'react-redux';

import Board from '../../Stateless/Board/Board';

const mapStateToProps = (state) => ({
  depth: state.depth,
  height: state.height,
  map: state.map,
  player: state.player,
  width: state.width
});

export default connect(mapStateToProps)(Board);
