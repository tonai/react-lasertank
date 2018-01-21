import { connect } from 'react-redux';

import { handlePlayerUpdateRelativePos } from '../../../../redux/actions';
import gameSettings from '../../../../settings/game';

import Water from '../../../Stateless/Blocks/Water/Water';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  onMoveOver: () => {
    setTimeout(() => dispatch(handlePlayerUpdateRelativePos(0, 0, -1)), gameSettings.transitionTimer);
  }
});

export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(Water);
