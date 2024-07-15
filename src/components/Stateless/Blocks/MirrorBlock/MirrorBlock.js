import React, { PureComponent } from 'react';

import { loadTextures, setSideTexture, setTopTexture } from '../../../../services/texture';
import { getBackStyles, getLeftStyles, getTopStyles } from '../../../../services/styles';

import BoardBlock from '../../BoardBlock/BoardBlock';

class MirrorBlock extends PureComponent {

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
    const { back, left, name, opacity = 1, size } = this.props;
    const topStyles = {
      ...getTopStyles(size),
      clipPath: 'polygon(0 0, 100% 0%, 100% 100%)',
      opacity,
    };
    const mirrorStyles = {
      width: size * Math.sqrt(2),
      height: size,
      transform: `translateY(${size}px) rotateX(90deg) rotateY(-45deg)`,
      transformOrigin: '0 0 0',
      background: 'linear-gradient(45deg, #000, #FFF 20%, #000 75%, #333 90%)',
      opacity,
    };
    return (
      <div className="p3d">
        <canvas
          className="side--top pos-abs"
          width={size}
          height={size}
          ref={this.drawTop}
          style={topStyles}
        />
        {back !== name && (<canvas
          className="side--back pos-abs"
          width={size}
          height={size}
          ref={this.drawBack}
          style={{...getBackStyles(size), opacity}}
        />)}
        {left !== name && (<canvas
          className="side--left pos-abs"
          width={size}
          height={size}
          ref={this.drawLeft}
          style={{...getLeftStyles(size), opacity}}
        />)}
        <div
          className="pos-abs"
          style={mirrorStyles}
        />
      </div>
    );
  }

}
export default BoardBlock(MirrorBlock);
