import React, { PureComponent } from 'react';

import { loadTextures, setSideTexture, setTopTexture } from '../../../../services/texture';
import { getBackStyles, getFrontStyles, getLeftStyles, getRightStyles,
  getTopStyles } from '../../../../services/styles';

import BoardBlock from '../../BoardBlock/BoardBlock';

class Block extends PureComponent {

  /* Properties */

  drawSide = (canvas) => {
    if (canvas) {
      const {name, sprites} = this.props;
      setSideTexture(canvas, name, sprites.side);
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
    const { size } = this.props;
    return (
      <div className="p3d">
        <canvas
          className="side--front pos-abs"
          width={size}
          height={size}
          ref={this.drawSide}
          style={getFrontStyles(size)}
        />
        <canvas
          className="side--back pos-abs"
          width={size}
          height={size}
          ref={this.drawSide}
          style={getBackStyles(size)}
        />
        <canvas
          className="side--right pos-abs"
          width={size}
          height={size}
          ref={this.drawSide}
          style={getRightStyles(size)}
        />
        <canvas
          className="side--left pos-abs"
          width={size}
          height={size}
          ref={this.drawSide}
          style={getLeftStyles(size)}
        />
        <canvas
          className="side--top pos-abs"
          width={size}
          height={size}
          ref={this.drawTop}
          style={getTopStyles(size)}
        />
      </div>
    );
  }

}

export default BoardBlock(Block);
