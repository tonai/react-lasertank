import { PureComponent } from 'react';
import { connect } from 'react-redux';
import mathMod from 'ramda/es/mathMod';

import { handleKeyDown, handleKeyLeft, handleKeyRight, handleKeyUp, handleShoot } from '../../../redux/actions';

const KEY_DOWN = 'ArrowDown';
const KEY_LEFT = 'ArrowLeft';
const KEY_RIGHT = 'ArrowRight';
const KEY_UP = 'ArrowUp';
const KEY_SHOOT = 'Space';


class KeyControls extends PureComponent {

  /* Properties */

  handleKeyPress = (e) => {
    const { onKeyDown, onKeyLeft, onKeyRight, onKeyUp, playerControls } = this.props;
    if (!playerControls) {
      return;
    }
    switch(e.code) {
      case KEY_DOWN:
        return onKeyDown();
      case KEY_LEFT:
        return onKeyLeft();
      case KEY_RIGHT:
        return onKeyRight();
      case KEY_SHOOT:
        return this.shoot();
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

  getEndPoint(x, y, z, direction, point) {
    const { size } = this.props;
    switch (mathMod(direction, 360)) {
      case 0:
        return { x: x * size, y: point.y, z: point.z };
      case 90:
        return { x: point.x, y: y * size, z: point.z };
      case 180:
        return { x: (x + 1) * size, y: point.y, z: point.z };
      case 270:
        return { x: point.x, y: (y + 1) * size, z: point.z };
      default:
        return null;
    }
  }

  getNextCoords(x, y, z, direction) {
    switch (mathMod(direction, 360)) {
      case 0:
        return { x: x + 1, y, z };
      case 90:
        return { x, y: y + 1, z };
      case 180:
        return { x: x - 1, y, z };
      case 270:
        return { x, y: y - 1, z };
      default:
        return null;
    }
  }

  getShootPoints(x, y, z, direction, shootPoints) {
    const { blocks, grounds } = this.props;
    const block = blocks[`${z}-${x}-${y}`];
    const ground = grounds[`${z}-${x}-${y}`];
    if (block && block.ref.onShoot) {
      const points = block.ref.onShoot(direction, shootPoints[shootPoints.length - 1].point);
      return shootPoints.concat(points);
    } else if (ground) {
      const coords = this.getNextCoords(x, y, z, direction);
      return this.getShootPoints(coords.x, coords.y, coords.z, direction, shootPoints);
    } else {
      const endPoint = this.getEndPoint(x, y, z, direction, shootPoints[shootPoints.length - 1].point);
      return shootPoints.concat({point: endPoint});
    }
  }

  render() {
    return null;
  }

  shoot() {
    const { onShoot, player } = this.props;
    const startPoint = {point: player.ref.getShootPoint()};
    const shootPoints = this.getShootPoints(
      player.props.x,
      player.props.y,
      player.props.z,
      player.props.direction,
      [startPoint]
    );
    return onShoot(shootPoints);
  }

}

const mapStatToProps = (state) => ({
  blocks: state.blocks,
  grounds: state.grounds,
  player: state.player,
  playerControls: state.playerControls
});

const mapDispatchToProps = (dispatch) => ({
  onKeyDown: () => dispatch(handleKeyDown()),
  onKeyLeft: () => dispatch(handleKeyLeft()),
  onKeyRight: () => dispatch(handleKeyRight()),
  onKeyUp: () => dispatch(handleKeyUp()),
  onShoot: (shootPoints) => dispatch(handleShoot(shootPoints)),
});

export default connect(mapStatToProps, mapDispatchToProps)(KeyControls);
