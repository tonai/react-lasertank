import React, { PureComponent } from 'react';
import { getBottomStyles } from '../../../../services/styles';
import gameSettings from '../../../../settings/game';

class Redirect extends PureComponent {

  /* Methods */

  render() {
    const { direction, size, x, y, z } = this.props;
    const color = 'rgba(0,255,0,1)';
    const containerStyles = {
      transform: `translateX(${x * size}px) translateY(${y * size}px) translateZ(${z * size}px)`
    };
    const rotationStyles = {
      width: size,
      height: size,
      transform: `rotateZ(${direction}deg)`,
      transition: `all ${gameSettings.transitionTimer}ms linear`
    };
    const bottomStyles = {
      ...getBottomStyles(size),
      background: `
        linear-gradient(135deg, ${color} 25%, transparent 25%)32px 32px,
        linear-gradient(-135deg, ${color} 25%, transparent 25%)32px 32px,
        linear-gradient(45deg, ${color} 25%, transparent 25%)16px 32px,
        linear-gradient(-135deg, ${color} 25%, transparent 25%)48px 1px`,
      backgroundSize: `${size}px ${size}px`,
      height: size,
      opacity: 0.6,
      width: size
    };
    return (
      <div className="Redirect pos-abs" style={containerStyles}>
        <div className="pos-abs" style={rotationStyles}>
          <div
            className="Redirect__side side--bottom pos-abs"
            style={bottomStyles}
          />
        </div>
      </div>
    );
  }

}

export default Redirect;
