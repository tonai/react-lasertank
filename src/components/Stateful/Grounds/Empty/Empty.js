import { PureComponent } from 'react';
import { connect } from 'react-redux';

import gameSettings from '../../../../settings/game';

import { handleBlockMoveRelative } from '../../../../redux/actions';
import { setTimeout } from '../../../../services/utils';

class Empty extends PureComponent {

  onMoveIn() {
    const { handleBlockMoveRelative, x, y, z } = this.props;
    setTimeout(gameSettings.transitionTimer)
      .then(() => handleBlockMoveRelative(x, y, z, 0, 0, -1));
  }

  render() {
    return null
  }

}

const mapDispatchToProps = (dispatch) => ({
  handleBlockMoveRelative: (...params) => dispatch(handleBlockMoveRelative(...params)),
});

export default connect(null, mapDispatchToProps, null, {withRef: true})(Empty);
