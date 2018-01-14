import React, { Component } from 'react';

import './Floor.css';

class Floor extends Component {

  render() {
    const { settings, size, x, y } = this.props;

    const styles = {
      transform: `translateX(${x * size}px) translateY(${y * size}px)`
    };

    const floorStyles = {
      width: size,
      height: size,
      backgroundImage: `url(${settings.spriteSrc})`
    };

    return (
      <div className="Floor" style={styles}>
        <div
          className="Floor__side side--front"
          style={{...floorStyles, ...settings.sideStyles, transform: `rotateX(-90deg) rotateY(90deg) translateY(-${size / 2}px) translateZ(${size / 2}px)`}}
        />
        <div
          className="Floor__side side--back"
          style={{...floorStyles, ...settings.sideStyles, transform: `rotateY(90deg) rotateZ(-90deg) translateY(-${size / 2}px) translateZ(-${size / 2}px)`}}
        />
        <div
          className="Floor__side side--left"
          style={{...floorStyles, ...settings.sideStyles, transform: `rotateX(-90deg) rotateY(180deg) translateY(-${size / 2}px) translateZ(${size / 2}px)`}}
        />
        <div
          className="Floor__side side--right"
          style={{...floorStyles, ...settings.sideStyles, transform: `rotateX(-90deg) rotateY(180deg) translateY(-${size / 2}px) translateZ(-${size / 2}px)`}}
        />
        <div
          className="Floor__side side--top"
          style={{...floorStyles, ...settings.topStyles, transform: `rotateZ(180deg) translateZ(${size}px)`}}
        />
        <div
          className="Floor__side side--bottom"
          style={{...floorStyles, backgroundImage: null, background: 'black'}}
        />
      </div>
    );
  }

}

Floor.defaultProps = {
  x: 0,
  y: 0,
};

export default Floor;
