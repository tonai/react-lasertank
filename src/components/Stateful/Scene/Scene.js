import { connect } from 'react-redux';

import Scene from '../../Stateless/Scene/Scene';

const mapStateToProps = (state) => ({
  xAngle: state.xAngle,
  zAngle: state.zAngle,
  scale: state.zoom
});

export default connect(mapStateToProps)(Scene);
