import React, { PureComponent } from 'react';
import { loadTextureData, setTopTexture } from '../../../../services/texture';

class Water extends PureComponent {

  drawTop = (canvas) => {
    const { name, settings } = this.props;
    setTopTexture(canvas, name, settings, this.props);
  };

  componentWillMount() {
    loadTextureData(this.props.settings);
  }

  render() {
    const { back, bottom, front, left, right, size, styles, top } = this.props;

    const sideStyles = {
      width: size,
      height: size,
      backgroundColor: 'rgba(0, 100, 255, 0.5)'
    };

    return (
      <div className="Water pos-abs" style={styles}>
        {!front && (<div
          className="Water__side side--front pos-abs"
          style={{...sideStyles, transform: `rotateX(-90deg) rotateY(90deg) translateY(-${size / 2}px) translateZ(${size / 2}px)`}}
        />)}
        {!back && (<div
          className="Water__side side--back pos-abs"
          style={{...sideStyles, transform: `rotateY(90deg) rotateZ(-90deg) translateY(-${size / 2}px) translateZ(-${size / 2}px)`}}
        />)}
        {!right && (<div
          className="Water__side side--right pos-abs"
          style={{...sideStyles, transform: `rotateX(-90deg) rotateY(180deg) translateY(-${size / 2}px) translateZ(-${size / 2}px)`}}
        />)}
        {!left && (<div
          className="Water__side side--left pos-abs"
          style={{...sideStyles, transform: `rotateX(-90deg) rotateY(180deg) translateY(-${size / 2}px) translateZ(${size / 2}px)`}}
        />)}
        {!top && (<div
          className="Water__side side--top pos-abs"
          style={{...sideStyles, transform: `rotateZ(-90deg) translateZ(${size}px)`}}
        />)}
        {!bottom && (<canvas
          className="Water__side side--bottom pos-abs"
          width={size}
          height={size}
          ref={this.drawTop}
          style={{transform: `rotateZ(-90deg)`}}
        />)}
      </div>
    );
  }

}

Water.defaultProps = {
  x: 0,
  y: 0,
};

export default Water;
