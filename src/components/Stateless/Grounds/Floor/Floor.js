import React, { Component } from 'react';

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
      <div className="Floor pos-abs" style={styles}>
        <div
          className="Floor__side side--front pos-abs"
          style={{...floorStyles, ...settings.sideStyles, transform: `rotateX(-90deg) rotateY(90deg) translateY(-${size / 2}px) translateZ(${size / 2}px)`}}
        />
        <div
          className="Floor__side side--back pos-abs"
          style={{...floorStyles, ...settings.sideStyles, transform: `rotateY(90deg) rotateZ(-90deg) translateY(-${size / 2}px) translateZ(-${size / 2}px)`}}
        />
        <div
          className="Floor__side side--left pos-abs"
          style={{...floorStyles, ...settings.sideStyles, transform: `rotateX(-90deg) rotateY(180deg) translateY(-${size / 2}px) translateZ(${size / 2}px)`}}
        />
        <div
          className="Floor__side side--right pos-abs"
          style={{...floorStyles, ...settings.sideStyles, transform: `rotateX(-90deg) rotateY(180deg) translateY(-${size / 2}px) translateZ(-${size / 2}px)`}}
        />
        <div
          className="Floor__side side--top pos-abs"
          style={{...floorStyles, ...settings.topStyles, transform: `rotateZ(180deg) translateZ(${size}px)`}}
        />
        <div
          className="Floor__side side--bottom pos-abs"
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
