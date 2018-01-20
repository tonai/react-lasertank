import React, { PureComponent } from 'react';

import { getBackStyles, getFrontStyles, getLeftStyles, getRightStyles,
  getTopStyles } from '../../../../services/styles';
import gameSettings from '../../../../settings/game';

class Player extends PureComponent {

  render() {
    const { direction, size, styles } = this.props;
    const playerStyles = {
      ...styles,
      transition: `all ${gameSettings.transitionTimer}ms linear`
    };
    const rotationStyles = {
      width: size,
      height: size,
      transform: `rotateZ(${direction}deg)`,
      transition: `all ${gameSettings.transitionTimer}ms linear`
    };
    const sideStyles = {
      width: size,
      height: size,
      backgroundColor: 'rgba(0, 255, 0, 0.5)'
    };
    return (
      <div className="pos-abs" style={playerStyles}>
        <div className="pos-abs" style={rotationStyles}>
          <div
            className="side--front pos-abs"
            style={{...sideStyles, ...getFrontStyles(size), backgroundColor: 'rgba(255, 0, 0, 0.5)'}}
          />
          <div
            className="side--back pos-abs"
            style={{...sideStyles, ...getBackStyles(size)}}
          />
          <div
            className="side--right pos-abs"
            style={{...sideStyles, ...getRightStyles(size)}}
          />
          <div
            className="side--left pos-abs"
            style={{...sideStyles, ...getLeftStyles(size)}}
          />
          <div
            className="side--top pos-abs"
            style={{...sideStyles, ...getTopStyles(size)}}
          />
        </div>
      </div>
    );
  }

}

Player.defaultProps = {
  x: 0,
  y: 0,
};

export default Player;
