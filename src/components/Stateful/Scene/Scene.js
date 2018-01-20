import { connect } from 'react-redux';

import Scene from '../../Stateless/Scene/Scene';

const mapStateToProps = (state) => ({
  depth: state.depth,
  height: state.height,
  scale: state.zoom,
  width: state.width,
  xAngle: state.xAngle,
  zAngle: state.zAngle
});

export default connect(mapStateToProps)(Scene);
