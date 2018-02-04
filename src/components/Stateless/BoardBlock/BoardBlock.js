import React, { PureComponent } from 'react';

import gameSettings from '../../../settings/game';

export default function BoardBlock(Component) {
  return class BlockBoard extends PureComponent {

    render() {
      const { direction, opacity = 1, size, x, y, z } = this.props;
      const translationStyles = {
        opacity,
        transform: `translateX(${x * size}px) translateY(${y * size}px) translateZ(${z * size}px)`,
        transition: `all ${gameSettings.transitionTimer}ms linear`
      };
      const rotationStyles = {
        width: size,
        height: size,
        transform: `rotateZ(${direction}deg)`,
        transition: `all ${gameSettings.transitionTimer}ms linear`
      };
      return (
        <div className="pos-abs" style={translationStyles}>
          <div className="pos-abs" style={rotationStyles}>
            <Component {...this.props}/>
          </div>
        </div>
      );
    }

  }
}
