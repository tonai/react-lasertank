import React, { PureComponent } from 'react';

class Water extends PureComponent {

  render() {
    const { back, front, left, right, settings, size, styles } = this.props;

    const sideStyles = {
      width: size,
      height: size,
      backgroundColor: 'rgba(0, 100, 255, 0.5)'
    };

    return (
      <div className="Water pos-abs" style={styles}>
        {!front && (<div
          className="Water__side side--front pos-abs"
          style={{...sideStyles, ...settings.sideStyles, transform: `rotateX(-90deg) rotateY(90deg) translateY(-${size / 2}px) translateZ(${size / 2}px)`}}
        />)}
        {!back && (<div
          className="Water__side side--back pos-abs"
          style={{...sideStyles, ...settings.sideStyles, transform: `rotateY(90deg) rotateZ(-90deg) translateY(-${size / 2}px) translateZ(-${size / 2}px)`}}
        />)}
        {!left && (<div
          className="Water__side side--left pos-abs"
          style={{...sideStyles, ...settings.sideStyles, transform: `rotateX(-90deg) rotateY(180deg) translateY(-${size / 2}px) translateZ(${size / 2}px)`}}
        />)}
        {!right && (<div
          className="Water__side side--right pos-abs"
          style={{...sideStyles, ...settings.sideStyles, transform: `rotateX(-90deg) rotateY(180deg) translateY(-${size / 2}px) translateZ(-${size / 2}px)`}}
        />)}
        <div
          className="Water__side side--top pos-abs"
          style={{...sideStyles, ...settings.topStyles, transform: `rotateZ(180deg) translateZ(${size}px)`}}
        />
        <div
          className="Water__side side--bottom pos-abs"
          style={{...sideStyles, ...settings.bottomStyles, backgroundImage: `url(${settings.spriteSrc})`}}
        />
      </div>
    );
  }

}

Water.defaultProps = {
  x: 0,
  y: 0,
};

export default Water;
