import { PureComponent } from 'react';
import { connect } from 'react-redux';

import gameSettings from '../../../../settings/game';

import { handlePlayerUpdateRelativePos } from '../../../../redux/actions';
import { setTimeout } from '../../../../services/utils';

class Empty extends PureComponent {

  onMoveIn() {
    const { handlePlayerUpdateRelativePos } = this.props;
    setTimeout(gameSettings.transitionTimer)
      .then(() => handlePlayerUpdateRelativePos(0, 0, -1));
  }

  render() {
    return null
  }

}

const mapDispatchToProps = (dispatch) => ({
  handlePlayerUpdateRelativePos: (...params) => dispatch(handlePlayerUpdateRelativePos(...params)),
});

export default connect(null, mapDispatchToProps, null, {withRef: true})(Empty);
