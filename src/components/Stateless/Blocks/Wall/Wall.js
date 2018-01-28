import React, { PureComponent } from 'react';

import { loadTextures, setSideTexture, setTopTexture } from '../../../../services/texture';
import { getBackStyles, getFrontStyles, getLeftStyles, getRightStyles,
  getTopStyles } from '../../../../services/styles';

class Wall extends PureComponent {

  /* Properties */

  drawBack = (canvas) => {
    if (canvas) {
      const {backLeft, backRight, bottom, left, name, right, sprites, top} = this.props;
      setSideTexture(canvas, name, sprites.side, {
        top: top,
        bottom: bottom,
        right: right,
        left: left,
        frontRight: backRight,
        frontLeft: backLeft
      });
    }
  };

  drawFront = (canvas) => {
    if (canvas) {
      const {bottom, frontLeft, frontRight, left, name, right, sprites, top} = this.props;
      setSideTexture(canvas, name, sprites.side, {
        top: top,
        bottom: bottom,
        right: right,
        left: left,
        frontRight: frontRight,
        frontLeft: frontLeft
      });
    }
  };

  drawLeft = (canvas) => {
    if (canvas) {
      const {back, backLeft, bottom, front, frontLeft, name, sprites, top} = this.props;
      setSideTexture(canvas, name, sprites.side, {
        top: top,
        bottom: bottom,
        right: front,
        left: back,
        frontRight: frontLeft,
        frontLeft: backLeft
      });
    }
  };

  drawRight = (canvas) => {
    if (canvas) {
      const {back, backRight, bottom, front, frontRight, name, sprites, top} = this.props;
      setSideTexture(canvas, name, sprites.side, {
        top: top,
        bottom: bottom,
        right: front,
        left: back,
        frontRight: frontRight,
        frontLeft: backRight
      });
    }
  };

  drawTop = (canvas) => {
    if (canvas) {
      const {name, sprites} = this.props;
      setTopTexture(canvas, name, sprites.top, this.props);
    }
  };

  /* Methods */

  componentWillMount() {
    loadTextures(this.props.sprites);
  }

  render() {
    const { back, front, left, name, right, size, x, y, z } = this.props;
    return (
      <div className="Wall pos-abs" style={{transform: `translateX(${x * size}px) translateY(${y * size}px) translateZ(${z * size}px)`}}>
        <canvas
          className="Wall__side side--top pos-abs"
          width={size}
          height={size}
          ref={this.drawTop}
          style={getTopStyles(size)}
        />
        {front !== name && (<canvas
          className="Wall__side side--front pos-abs"
          width={size}
          height={size}
          ref={this.drawFront}
          style={getFrontStyles(size)}
        />)}
        {back !== name && (<canvas
          className="Wall__side side--back pos-abs"
          width={size}
          height={size}
          ref={this.drawBack}
          style={getBackStyles(size)}
        />)}
        {right !== name && (<canvas
          className="Wall__side side--right pos-abs"
          width={size}
          height={size}
          ref={this.drawRight}
          style={getRightStyles(size)}
        />)}
        {left !== name && (<canvas
          className="Wall__side side--left pos-abs"
          width={size}
          height={size}
          ref={this.drawLeft}
          style={getLeftStyles(size)}
        />)}
      </div>
    );
  }

}
export default Wall;
