import React, { PureComponent } from 'react';

import gameSettings from '../../../../settings/game';

import BoardBlock from '../../BoardBlock/BoardBlock';

class Door extends PureComponent {

  /* Methods */

  render() {
    const { open = 0, size, sprites } = this.props;
    const styles1 = {
      width: size / 2,
      height: size,
      backgroundImage: `url(${sprites.side1.image.src})`,
      backgroundPosition: `-${sprites.side1.offset[0]}px -${sprites.side1.offset[1]}px`,
      transform: `rotateX(-90deg) rotateY(90deg) translateX(-${(1 + open * 2) * size / 4}px) translateY(-${size / 2}px) translateZ(${size / 4}px)`,
      transition: `all ${gameSettings.transitionTimer}ms linear`
    };
    const styles2 = {
      width: size / 2,
      height: size,
      backgroundImage: `url(${sprites.side2.image.src})`,
      backgroundPosition: `-${sprites.side2.offset[0]}px -${sprites.side2.offset[1]}px`,
      transform: `rotateX(-90deg) rotateY(90deg) translateX(${(1 + open * 2) * size / 4}px) translateY(-${size / 2}px) translateZ(${size / 4}px)`,
      transition: `all ${gameSettings.transitionTimer}ms linear`
    };
    return (
      <div className="door">
        <div
          className="side--front pos-abs"
          style={styles1}
        />
        <div
          className="side--front pos-abs"
          style={styles2}
        />
      </div>
    );
  }

}
export default BoardBlock(Door);
