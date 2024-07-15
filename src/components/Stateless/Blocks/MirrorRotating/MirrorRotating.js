import React, { PureComponent } from 'react';

import { getColor } from '../../../../services/color';

import BoardBlock from '../../BoardBlock/BoardBlock';

class MirrorRotating extends PureComponent {

  /* Methods */

  render() {
    const {opacity = 1, size } = this.props;
    const color = getColor(0, 0, 30, 0.5);
    const mirrorFrontStyles = {
      width: size * Math.sqrt(2),
      height: size,
      transform: `translateX(${size}px) rotateX(90deg) rotateY(135deg)`,
      transformOrigin: '0 0 0',
      background: 'linear-gradient(45deg, #000, #FFF 20%, #000 75%, #333 90%)',
      opacity,
      backfaceVisibility: 'hidden'
    };
    const mirrorBackStyles = {
      width: size * Math.sqrt(2),
      height: size,
      transform: `translateY(${size}px) rotateX(90deg) rotateY(-45deg)`,
      transformOrigin: '0 0 0',
      background: `linear-gradient(0deg, ${color(110)}, ${color(90)} 40%, ${color(70)} 100%)`,
      opacity,
      backfaceVisibility: 'hidden'
    };
    const backStyles = {
      transform: `rotateY(-90deg) rotateZ(-90deg) translateY(${size / 2}px) translateZ(-${size / 4}px)`,
      width: size / 4,
      height: size,
      background: `linear-gradient(0deg, ${color(110)}, ${color(90)} 40%, ${color(70)} 100%)`,
    };
    const leftStyles = {
      transform: `rotateX(90deg) rotateY(180deg) translateX(-${size / 8 * 3}px) translateY(${size / 2}px) translateZ(-${size / 8}px)`,
      width: size / 4,
      height: size,
      background: `linear-gradient(0deg, ${color(110)}, ${color(90)} 40%, ${color(70)} 100%)`,
    };
    const topStyles = {
      transform: `translateX(${size / 8 * 3}px) translateY(${size / 8 * 3}px) translateZ(${size}px)`,
      width: 0,
      height: 0,
      borderColor: `transparent transparent transparent ${color(180)}`,
      borderStyle: 'solid',
      borderWidth: `0 ${size / 4}px ${size / 4}px ${size / 4}px`,
    };
    return (
      <div className="p3d">
        <div
          className="pos-abs"
          style={mirrorFrontStyles}
        />
        <div
          className="pos-abs"
          style={mirrorBackStyles}
        />
        <div
          className="pos-abs"
          style={backStyles}
        />
        <div
          className="pos-abs"
          style={leftStyles}
        />
        <div
          className="pos-abs"
          style={topStyles}
        />
      </div>
    );
  }

}
export default BoardBlock(MirrorRotating);
