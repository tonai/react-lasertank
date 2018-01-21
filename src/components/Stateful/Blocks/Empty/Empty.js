import { PureComponent } from 'react';
import { connect } from 'react-redux';

import { handlePlayerUpdateRelativePos } from '../../../../redux/actions';
import gameSettings from '../../../../settings/game';

class Empty extends PureComponent {

  render() {
    return null
  }

}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  onMoveOver: () => {
    setTimeout(() => dispatch(handlePlayerUpdateRelativePos(0, 0, -1)), gameSettings.transitionTimer);
  }
});

export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(Empty);
