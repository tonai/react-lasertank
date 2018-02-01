import React, { PureComponent } from 'react';

import { getBottomStyles } from '../../../../services/styles';

import BoardBlock from '../../BoardBlock/BoardBlock';

class Redirect extends PureComponent {

  /* Methods */

  render() {
    const { size } = this.props;
    const color = 'rgba(0,255,0,1)';
    const bottomStyles = {
      ...getBottomStyles(size),
      background: `
        linear-gradient(135deg, ${color} 25%, transparent 25%)32px 32px,
        linear-gradient(-135deg, ${color} 25%, transparent 25%)32px 32px,
        linear-gradient(45deg, ${color} 25%, transparent 25%)16px 32px,
        linear-gradient(-135deg, ${color} 25%, transparent 25%)48px 1px`,
      backgroundSize: `${size}px ${size}px`,
      height: size,
      opacity: 0.6,
      width: size
    };
    return (
      <div
        className="side--bottom pos-abs"
        style={bottomStyles}
      />
    );
  }

}

export default BoardBlock(Redirect);
