import React, { PureComponent } from 'react';

class Floor extends PureComponent {

  render() {
    const { settings, size, styles } = this.props;

    const sideStyles = {
      width: size,
      height: size,
      backgroundImage: `url(${settings.spriteSrc})`
    };

    return (
      <div className="Floor pos-abs" style={styles}>
        <div
          className="Floor__side side--front pos-abs"
          style={{...sideStyles, ...settings.sideStyles, transform: `rotateX(-90deg) rotateY(90deg) translateY(-${size / 2}px) translateZ(${size / 2}px)`}}
        />
        <div
          className="Floor__side side--back pos-abs"
          style={{...sideStyles, ...settings.sideStyles, transform: `rotateY(90deg) rotateZ(-90deg) translateY(-${size / 2}px) translateZ(-${size / 2}px)`}}
        />
        <div
          className="Floor__side side--left pos-abs"
          style={{...sideStyles, ...settings.sideStyles, transform: `rotateX(-90deg) rotateY(180deg) translateY(-${size / 2}px) translateZ(${size / 2}px)`}}
        />
        <div
          className="Floor__side side--right pos-abs"
          style={{...sideStyles, ...settings.sideStyles, transform: `rotateX(-90deg) rotateY(180deg) translateY(-${size / 2}px) translateZ(-${size / 2}px)`}}
        />
        <div
          className="Floor__side side--top pos-abs"
          style={{...sideStyles, ...settings.topStyles, transform: `rotateZ(180deg) translateZ(${size}px)`}}
        />
        <div
          className="Floor__side side--bottom pos-abs"
          style={{...sideStyles, backgroundImage: null, background: 'black'}}
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
