import React, { PureComponent } from 'react';

import { loadTextures, setTopTexture } from '../../../../services/texture';
import { getBackStyles, getBottomStyles, getFrontStyles, getLeftStyles, getRightStyles,
  getTopStyles } from '../../../../services/styles';

import BoardBlock from '../../BoardBlock/BoardBlock';

class Water extends PureComponent {

  /* Properties */

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
    const { back, bottom, front, left, name, right, size, top } = this.props;
    const sideStyles = {
      width: size,
      height: size,
      backgroundColor: 'rgba(0, 100, 255, 0.5)'
    };
    return (
      <div>
        {!front && (<div
          className="side--front pos-abs"
          style={{...sideStyles, ...getFrontStyles(size)}}
        />)}
        {!back && (<div
          className="side--back pos-abs"
          style={{...sideStyles, ...getBackStyles(size)}}
        />)}
        {!right && (<div
          className="side--right pos-abs"
          style={{...sideStyles, ...getRightStyles(size)}}
        />)}
        {!left && (<div
          className="side--left pos-abs"
          style={{...sideStyles, ...getLeftStyles(size)}}
        />)}
        {top !== name && (<div
          className="side--top pos-abs"
          style={{...sideStyles, ...getTopStyles(size)}}
        />)}
        {!bottom && (<canvas
          className="side--bottom pos-abs"
          width={size}
          height={size}
          ref={this.drawTop}
          style={getBottomStyles(size)}
        />)}
      </div>
    );
  }

}

export default BoardBlock(Water);
