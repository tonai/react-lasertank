import React, { PureComponent } from 'react';

import { loadTextureData, setSideTexture, setTopTexture } from '../../../../services/texture';

class Block extends PureComponent {

  drawFront = (canvas) => {
    const { bottom, frontLeft, frontRight, left, name, right, settings, top } = this.props;
    setSideTexture(canvas, name, settings, {
      top: top,
      bottom: bottom,
      right: right,
      left: left,
      frontRight: frontRight,
      frontLeft: frontLeft
    });
  };

  drawBack = (canvas) => {
    const { backLeft, backRight, bottom, left, name, right, settings, top } = this.props;
    setSideTexture(canvas, name, settings, {
      top: top,
      bottom: bottom,
      right: right,
      left: left,
      frontRight: backRight,
      frontLeft: backLeft
    });
  };

  drawRight = (canvas) => {
    const { back, backRight, bottom, front, frontRight, name, settings, top } = this.props;
    setSideTexture(canvas, name, settings, {
      top: top,
      bottom: bottom,
      right: front,
      left: back,
      frontRight: frontRight,
      frontLeft: backRight
    });
  };

  drawLeft = (canvas) => {
    const { back, backLeft, bottom, front, frontLeft, name, settings, top } = this.props;
    setSideTexture(canvas, name, settings, {
      top: top,
      bottom: bottom,
      right: front,
      left: back,
      frontRight: frontLeft,
      frontLeft: backLeft
    });
  };

  drawTop = (canvas) => {
    const { name, settings } = this.props;
    setTopTexture(canvas, name, settings, this.props);
  };

  componentWillMount() {
    loadTextureData(this.props.settings);
  }

  render() {
    const { back, front, left, name, right, size, styles, top } = this.props;
    return (
      <div className="Block pos-abs" style={styles}>
        {front !== name && (<canvas
          className="Block__side side--front pos-abs"
          width={size}
          height={size}
          ref={this.drawFront}
          style={{transform: `rotateX(-90deg) rotateY(90deg) translateY(-${size / 2}px) translateZ(${size / 2}px)`}}
        />)}
        {back !== name && (<canvas
          className="Block__side side--back pos-abs"
          width={size}
          height={size}
          ref={this.drawBack}
          style={{transform: `rotateY(90deg) rotateZ(-90deg) translateY(-${size / 2}px) translateZ(-${size / 2}px)`}}
        />)}
        {right !== name && (<canvas
          className="Block__side side--right pos-abs"
          width={size}
          height={size}
          ref={this.drawRight}
          style={{transform: `rotateX(-90deg) rotateY(180deg) translateY(-${size / 2}px) translateZ(-${size / 2}px)`}}
        />)}
        {left !== name && (<canvas
          className="Block__side side--left pos-abs"
          width={size}
          height={size}
          ref={this.drawLeft}
          style={{transform: `rotateX(-90deg) rotateY(180deg) translateY(-${size / 2}px) translateZ(${size / 2}px)`}}
        />)}
        {top !== name && (<canvas
          className="Block__side side--top pos-abs"
          width={size}
          height={size}
          ref={this.drawTop}
          style={{transform: `rotateZ(-90deg) translateZ(${size}px)`}}
        />)}
      </div>
    );
  }

}

Block.defaultProps = {
  x: 0,
  y: 0,
};

export default Block;
