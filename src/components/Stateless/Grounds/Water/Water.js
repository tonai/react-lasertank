import React, { PureComponent } from 'react';

import { loadTextures, setTopTexture } from '../../../../services/texture';
import { getBottomStyles, getTopStyles } from '../../../../services/styles';

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
          style={{...sideStyles, transform: `rotateX(-90deg) rotateY(90deg) translateY(-${size / 2}px) translateZ(${size / 2 - 1}px)`}}
        />)}
        {!back && (<div
          className="side--back pos-abs"
          style={{...sideStyles, transform: `rotateY(90deg) rotateZ(-90deg) translateY(-${size / 2}px) translateZ(-${size / 2 - 1}px)`}}
        />)}
        {!right && (<div
          className="side--right pos-abs"
          style={{...sideStyles, transform: `rotateX(-90deg) rotateY(180deg) translateY(-${size / 2}px) translateZ(-${size / 2 - 1}px)`}}
        />)}
        {!left && (<div
          className="side--left pos-abs"
          style={{...sideStyles, transform: `rotateX(-90deg) rotateY(180deg) translateY(-${size / 2}px) translateZ(${size / 2 - 1}px)`}}
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
