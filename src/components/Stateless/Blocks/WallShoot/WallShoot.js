import React, { PureComponent } from 'react';

import {
  loadTextures, setSideTextureLeft, setSideTextureRight,
  setTopTextureCornerBackLeft, setTopTextureCornerBackRight, setTopTextureCornerFrontLeft, setTopTextureCornerFrontRight
} from '../../../../services/texture';
import { getBackStyles, getFrontStyles, getLeftStyles, getRightStyles,
  getTopStyles } from '../../../../services/styles';

import BoardBlock from '../../BoardBlock/BoardBlock';

class WallShoot extends PureComponent {

  /* Properties */

  drawBack = (canvas) => {
    if (canvas) {
      const {backLeft, backRight, bottom, left, name, right, sprites, top} = this.props;
      const props = {
        top: top,
        bottom: bottom,
        right: right,
        left: left,
        frontRight: backRight,
        frontLeft: backLeft
      };
      setSideTextureLeft(canvas, name, sprites.side, props);
      setSideTextureRight(canvas, name, sprites.side, props);
    }
  };

  drawBack2 = (canvas) => {
    if (canvas) {
      const {backLeft, backRight, bottom, left, name, right, size, sprites, top} = this.props;
      const props = {
        top: top,
        bottom: bottom,
        right: right,
        left: left,
        frontRight: backRight,
        frontLeft: backLeft
      };
      setSideTextureLeft(canvas, name, sprites.side, props, 0);
      setSideTextureRight(canvas, name, sprites.side, props, size / 4 * 3);
    }
  };

  drawFront = (canvas) => {
    if (canvas) {
      const {bottom, frontLeft, frontRight, left, name, right, sprites, top} = this.props;
      const props = {
        top: top,
        bottom: bottom,
        right: right,
        left: left,
        frontRight: frontRight,
        frontLeft: frontLeft
      };
      setSideTextureLeft(canvas, name, sprites.side, props);
      setSideTextureRight(canvas, name, sprites.side, props);
    }
  };

  drawFront2 = (canvas) => {
    if (canvas) {
      const {bottom, frontLeft, frontRight, left, name, right, size, sprites, top} = this.props;
      const props = {
        top: top,
        bottom: bottom,
        right: right,
        left: left,
        frontRight: frontRight,
        frontLeft: frontLeft
      };
      setSideTextureLeft(canvas, name, sprites.side, props, 0);
      setSideTextureRight(canvas, name, sprites.side, props, size / 4 * 3);
    }
  };

  drawLeft = (canvas) => {
    if (canvas) {
      const {back, backLeft, bottom, front, frontLeft, name, sprites, top} = this.props;
      const props = {
        top: top,
        bottom: bottom,
        right: front,
        left: back,
        frontRight: frontLeft,
        frontLeft: backLeft
      };
      setSideTextureLeft(canvas, name, sprites.side, props);
      setSideTextureRight(canvas, name, sprites.side, props);
    }
  };

  drawLeft2 = (canvas) => {
    if (canvas) {
      const {back, backLeft, bottom, front, frontLeft, name, size, sprites, top} = this.props;
      const props = {
        top: top,
        bottom: bottom,
        right: front,
        left: back,
        frontRight: frontLeft,
        frontLeft: backLeft
      };
      setSideTextureLeft(canvas, name, sprites.side, props, 0);
      setSideTextureRight(canvas, name, sprites.side, props, size / 4 * 3);
    }
  };

  drawRight = (canvas) => {
    if (canvas) {
      const {back, backRight, bottom, front, frontRight, name, sprites, top} = this.props;
      const props = {
        top: top,
        bottom: bottom,
        right: front,
        left: back,
        frontRight: frontRight,
        frontLeft: backRight
      };
      setSideTextureLeft(canvas, name, sprites.side, props);
      setSideTextureRight(canvas, name, sprites.side, props);
    }
  };

  drawRight2 = (canvas) => {
    if (canvas) {
      const {back, backRight, bottom, front, frontRight, name, size, sprites, top} = this.props;
      const props = {
        top: top,
        bottom: bottom,
        right: front,
        left: back,
        frontRight: frontRight,
        frontLeft: backRight
      };
      setSideTextureLeft(canvas, name, sprites.side, props, 0);
      setSideTextureRight(canvas, name, sprites.side, props, size / 4 * 3);
    }
  };

  drawTop = (canvas) => {
    if (canvas) {
      const {name, size, sprites} = this.props;
      setTopTextureCornerFrontRight(canvas, name, sprites.top, this.props, 0, 0);
      setTopTextureCornerFrontRight(canvas, name, sprites.top, this.props, 0, size / 4 * 3);
      setTopTextureCornerFrontRight(canvas, name, sprites.top, this.props, size / 4 * 3, 0);
      setTopTextureCornerFrontRight(canvas, name, sprites.top, this.props, size / 4 * 3, size / 4 * 3);
    }
  };

  /* Methods */

  componentWillMount() {
    loadTextures(this.props.sprites);
  }

  render() {
    const { back, front, left, name, right, size } = this.props;
    // const topClipPath = 'polygon(0 0, 25% 0, 25% 25%, 0 25%, 0 0, 100% 0, 100% 25%, 75% 25%, 75% 0, 0 0, 0 100%, 25% 100%, 25% 75%, 0 75%, 0 100%, 75% 100%, 75% 75%, 100% 75%, 100% 100%, 0 100%)';
    return (
      <div>
        <canvas
          className="side--top pos-abs"
          width={size}
          height={size}
          ref={this.drawTop}
          style={getTopStyles(size)}
        />
        {front !== name && (<canvas
          className="side--front pos-abs"
          width={size}
          height={size}
          ref={this.drawFront}
          style={getFrontStyles(size)}
        />)}
        {back !== name && (<canvas
          className="side--back pos-abs"
          width={size}
          height={size}
          ref={this.drawBack}
          style={getBackStyles(size)}
        />)}
        {right !== name && (<canvas
          className="side--right pos-abs"
          width={size}
          height={size}
          ref={this.drawRight}
          style={getRightStyles(size)}
        />)}
        {left !== name && (<canvas
          className="side--left pos-abs"
          width={size}
          height={size}
          ref={this.drawLeft}
          style={getLeftStyles(size)}
        />)}

        <canvas
          className="side--front pos-abs"
          width={size}
          height={size}
          ref={this.drawFront2}
          style={getFrontStyles(size, -size / 4)}
        />
        <canvas
          className="side--back pos-abs"
          width={size}
          height={size}
          ref={this.drawBack2}
          style={getBackStyles(size, -size / 4)}
        />
        <canvas
          className="side--right pos-abs"
          width={size}
          height={size}
          ref={this.drawRight2}
          style={getRightStyles(size, -size / 4)}
        />
        <canvas
          className="side--left pos-abs"
          width={size}
          height={size}
          ref={this.drawLeft2}
          style={getLeftStyles(size, -size / 4)}
        />
      </div>
    );
  }

}
export default BoardBlock(WallShoot);
