import React, { PureComponent } from 'react';

import { loadTextures, setTopTexture } from '../../../../services/texture';
import { getBackStyles, getBottomStyles, getFrontStyles, getLeftStyles, getRightStyles,
  getTopStyles } from '../../../../services/styles';

class Water extends PureComponent {

  /* Properties */

  drawTop = (canvas) => {
    const { name, settings } = this.props;
    setTopTexture(canvas, name, settings.sprites.top, this.props);
  };

  /* Methods */

  componentWillMount() {
    loadTextures(this.props.settings.sprites);
  }

  render() {
    const { back, bottom, front, left, name, right, size, styles, top } = this.props;
    const sideStyles = {
      width: size,
      height: size,
      backgroundColor: 'rgba(0, 100, 255, 0.5)'
    };
    return (
      <div className="Water pos-abs" style={styles}>
        {!front && (<div
          className="Water__side side--front pos-abs"
          style={{...sideStyles, ...getFrontStyles(size)}}
        />)}
        {!back && (<div
          className="Water__side side--back pos-abs"
          style={{...sideStyles, ...getBackStyles(size)}}
        />)}
        {!right && (<div
          className="Water__side side--right pos-abs"
          style={{...sideStyles, ...getRightStyles(size)}}
        />)}
        {!left && (<div
          className="Water__side side--left pos-abs"
          style={{...sideStyles, ...getLeftStyles(size)}}
        />)}
        {top !== name && (<div
          className="Water__side side--top pos-abs"
          style={{...sideStyles, ...getTopStyles(size)}}
        />)}
        {!bottom && (<canvas
          className="Water__side side--bottom pos-abs"
          width={size}
          height={size}
          ref={this.drawTop}
          style={getBottomStyles(size)}
        />)}
      </div>
    );
  }

}

export default Water;
