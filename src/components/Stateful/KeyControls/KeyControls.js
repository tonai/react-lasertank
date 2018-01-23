import { PureComponent } from 'react';
import { connect } from 'react-redux';

import { handleKeyDown, handleKeyLeft, handleKeyRight, handleKeyUp } from '../../../redux/actions';

const KEY_DOWN = 'ArrowDown';
const KEY_LEFT = 'ArrowLeft';
const KEY_RIGHT = 'ArrowRight';
const KEY_UP = 'ArrowUp';

class KeyControls extends PureComponent {

  /* Properties */

  handleKeyPress = (e) => {
    const { onKeyDown, onKeyLeft, onKeyRight, onKeyUp, playerControls } = this.props;
    if (!playerControls) {
      return;
    }
    switch(e.key) {
      case KEY_DOWN:
        return onKeyDown();
      case KEY_LEFT:
        return onKeyLeft();
      case KEY_RIGHT:
        return onKeyRight();
      case KEY_UP:
        return onKeyUp();
      default:
    }
  };

  /* Methods */

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return null;
  }

}

const mapStatToProps = (state) => ({
  playerControls: state.playerControls
});

const mapDispatchToProps = (dispatch) => ({
  onKeyDown: () => dispatch(handleKeyDown()),
  onKeyLeft: () => dispatch(handleKeyLeft()),
  onKeyRight: () => dispatch(handleKeyRight()),
  onKeyUp: () => dispatch(handleKeyUp())
});

export default connect(mapStatToProps, mapDispatchToProps)(KeyControls);
