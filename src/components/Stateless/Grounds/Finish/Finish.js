import React, { PureComponent } from 'react';

import { getBottomStyles } from '../../../../services/styles';

import BoardBlock from '../../BoardBlock/BoardBlock';

class Finish extends PureComponent {

  /* Methods */

  render() {
    const { size } = this.props;
    const color1 = 'rgba(0,0,0,1)';
    const color2 = 'rgba(0,0,0,0)';
    const styles = {
      ...getBottomStyles(size),
      background: `
        linear-gradient(45deg, ${color1} 25%, ${color2} 25%, ${color2} 75%, ${color1} 75%, ${color1} 0),
        linear-gradient(45deg, ${color1} 25%, ${color2} 25%, ${color2} 75%, ${color1} 75%, ${color1} 0), rgb(255, 255, 255)`,
      backgroundPosition: `0 0, ${size / 4}px ${size / 4}px`,
      backgroundSize: `${size / 2}px ${size / 2}px`,
      height: size,
      width: size
    };
    return (
      <div
        className="side--bottom pos-abs"
        style={styles}
      />
    );
  }

}

export default BoardBlock(Finish);
