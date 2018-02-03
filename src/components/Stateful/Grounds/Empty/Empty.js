import { PureComponent } from 'react';
import { connect } from 'react-redux';

import { handlePlayerUpdateRelativePos } from '../../../../redux/actions';
import gameSettings from '../../../../settings/game';

class Empty extends PureComponent {

  render() {
    return null
  }

}

const mapDispatchToProps = (dispatch) => ({
  onMoveIn: () => {
    setTimeout(() => dispatch(handlePlayerUpdateRelativePos(0, 0, -1)), gameSettings.transitionTimer);
  }
});

export default connect(null, mapDispatchToProps, null, {withRef: true})(Empty);
