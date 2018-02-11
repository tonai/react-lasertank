import React, { PureComponent } from 'react';

export default class Shoot extends PureComponent {

  render() {
    const { c, length, size, time, x, y, z } = this.props;
    const styles = {
      height: size / 4,
      marginTop: `${- size / 8}px`,
      width: length,
      background: 'linear-gradient(0, transparent, red, transparent)',
      transform: `translateX(${x}px) translateY(${y}px) translateZ(${z}px) rotateZ(${c}deg)`,
      transformOrigin: `0 ${size / 8}px 0`,
      transition: `all ${time}ms linear`
    };
    return (
      <div className="pos-abs" style={styles}></div>
    );
  }

}
