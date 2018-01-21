import React, { PureComponent } from 'react';

import { loadTextureData, setSideTexture } from '../../../../services/texture';
import { getBackStyles, getFrontStyles, getLeftStyles, getRightStyles } from '../../../../services/styles';

class Wall extends PureComponent {

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

  componentWillMount() {
    loadTextureData(this.props.settings);
  }

  render() {
    const { back, front, left, name, right, size, styles } = this.props;
    return (
      <div className="Wall pos-abs" style={styles}>
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
