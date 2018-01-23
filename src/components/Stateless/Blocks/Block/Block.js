import React, { PureComponent } from 'react';

import { loadTextures, setSideTexture, setTopTexture } from '../../../../services/texture';
import { getBackStyles, getFrontStyles, getLeftStyles, getRightStyles,
  getTopStyles } from '../../../../services/styles';

class Block extends PureComponent {

  /* Properties */

  drawBack = (canvas) => {
    const { backLeft, backRight, bottom, left, name, right, settings, top } = this.props;
    setSideTexture(canvas, name, settings.sprites.side, {
      top: top,
      bottom: bottom,
      right: right,
      left: left,
      frontRight: backRight,
      frontLeft: backLeft
    });
  };

  drawFront = (canvas) => {
    const { bottom, frontLeft, frontRight, left, name, right, settings, top } = this.props;
    setSideTexture(canvas, name, settings.sprites.side, {
      top: top,
      bottom: bottom,
      right: right,
      left: left,
      frontRight: frontRight,
      frontLeft: frontLeft
    });
  };

  drawLeft = (canvas) => {
    const { back, backLeft, bottom, front, frontLeft, name, settings, top } = this.props;
    setSideTexture(canvas, name, settings.sprites.side, {
      top: top,
      bottom: bottom,
      right: front,
      left: back,
      frontRight: frontLeft,
      frontLeft: backLeft
    });
  };

  drawRight = (canvas) => {
    const { back, backRight, bottom, front, frontRight, name, settings, top } = this.props;
    setSideTexture(canvas, name, settings.sprites.side, {
      top: top,
      bottom: bottom,
      right: front,
      left: back,
      frontRight: frontRight,
      frontLeft: backRight
    });
  };

  drawTop = (canvas) => {
    const { name, settings } = this.props;
    setTopTexture(canvas, name, settings.sprites.top, this.props);
  };

  /* Methods */

  componentWillMount() {
    loadTextures(this.props.settings.sprites);
  }

  render() {
    const { size, styles } = this.props;
    return (
      <div className="Block pos-abs" style={styles}>
        <canvas
          className="Block__side side--front pos-abs"
          width={size}
          height={size}
          ref={this.drawFront}
          style={getFrontStyles(size)}
        />
        <canvas
          className="Block__side side--back pos-abs"
          width={size}
          height={size}
          ref={this.drawBack}
          style={getBackStyles(size)}
        />
        <canvas
          className="Block__side side--right pos-abs"
          width={size}
          height={size}
          ref={this.drawRight}
          style={getRightStyles(size)}
        />
        <canvas
          className="Block__side side--left pos-abs"
          width={size}
          height={size}
          ref={this.drawLeft}
          style={getLeftStyles(size)}
        />
        <canvas
          className="Block__side side--top pos-abs"
          width={size}
          height={size}
          ref={this.drawTop}
          style={getTopStyles(size)}
        />
      </div>
    );
  }

}

export default Block;
