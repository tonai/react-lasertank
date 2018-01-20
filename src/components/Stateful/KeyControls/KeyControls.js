import { PureComponent } from 'react';
import { connect } from 'react-redux';

import { handleKeyDown, handleKeyLeft, handleKeyRight, handleKeyUp } from '../../../redux/actions';

const KEY_DOWN = 'ArrowDown';
const KEY_LEFT = 'ArrowLeft';
const KEY_RIGHT = 'ArrowRight';
const KEY_UP = 'ArrowUp';

class KeyControls extends PureComponent {

  handleKeyPress = (e) => {
    const { onKeyDown, onKeyLeft, onKeyRight, onKeyUp, player } = this.props;
    switch(e.key) {
      case KEY_DOWN:
        return onKeyDown(player);
      case KEY_LEFT:
        return onKeyLeft(player);
      case KEY_RIGHT:
        return onKeyRight(player);
      case KEY_UP:
        return onKeyUp(player);
      default:
    }
  };

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

const mapDispatchToProps = (dispatch) => ({
  onKeyDown: (player) => dispatch(handleKeyDown(player)),
  onKeyLeft: (player) => dispatch(handleKeyLeft(player)),
  onKeyRight: (player) => dispatch(handleKeyRight(player)),
  onKeyUp: (player) => dispatch(handleKeyUp(player))
});

export default connect(null, mapDispatchToProps)(KeyControls);
