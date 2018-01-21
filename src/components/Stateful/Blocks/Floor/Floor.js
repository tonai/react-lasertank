import { connect } from 'react-redux';

import { handlePlayerUpdated, handlePlayerUpdateRelativePos } from '../../../../redux/actions';
import gameSettings from '../../../../settings/game';

import Floor from '../../../Stateless/Blocks/Floor/Floor';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  onMoveIn: () => dispatch(handlePlayerUpdated()),
  onMoveOver: () => {
    setTimeout(() => dispatch(handlePlayerUpdateRelativePos(0, 0, -1)), gameSettings.transitionTimer);
  }
});

export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(Floor);
