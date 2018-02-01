import React, { PureComponent } from 'react';

import { getBackStyles, getFrontStyles, getLeftStyles, getRightStyles, getTopStyles } from '../../../services/styles';

import BoardBlock from '../BoardBlock/BoardBlock';

class Player extends PureComponent {

  /* Methods */

  render() {
    const { size } = this.props;
    const sideStyles = {
      width: size,
      height: size,
      backgroundColor: 'rgba(0, 255, 0, 0.5)'
    };
    return (
      <div>
        <div
          className="side--front pos-abs"
          style={{...sideStyles, ...getFrontStyles(size), backgroundColor: 'rgba(255, 0, 0, 0.5)'}}
        />
        <div
          className="side--back pos-abs"
          style={{...sideStyles, ...getBackStyles(size)}}
        />
        <div
          className="side--right pos-abs"
          style={{...sideStyles, ...getRightStyles(size)}}
        />
        <div
          className="side--left pos-abs"
          style={{...sideStyles, ...getLeftStyles(size)}}
        />
        <div
          className="side--top pos-abs"
          style={{...sideStyles, ...getTopStyles(size)}}
        />
      </div>
    );
  }

}

export default BoardBlock(Player);
