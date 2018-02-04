import { PureComponent } from 'react';
import { connect } from 'react-redux';

import gameSettings from '../../../../settings/game';

import { handlePlayerUpdateRelativePos } from '../../../../redux/actions';
import { setTimeout } from '../../../../services/utils';

class Empty extends PureComponent {

  render() {
    return null
  }

}

const mapDispatchToProps = (dispatch) => ({
  onMoveIn: () => {
    setTimeout(gameSettings.transitionTimer)
      .then(() => dispatch(handlePlayerUpdateRelativePos(0, 0, -1)));
  }
});

export default connect(null, mapDispatchToProps, null, {withRef: true})(Empty);
