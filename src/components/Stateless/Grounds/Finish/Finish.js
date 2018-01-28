import React, { PureComponent } from 'react';

import { getBottomStyles } from '../../../../services/styles';

class Finish extends PureComponent {

  /* Methods */

  render() {
    const { size, x, y, z } = this.props;
    const styles = {
      ...getBottomStyles(size),
      background: `
        linear-gradient(45deg, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 75%, rgba(0,0,0,1) 0),
        linear-gradient(45deg, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 75%, rgba(0,0,0,1) 0), rgb(255, 255, 255)`,
      backgroundPosition: `0 0, ${size / 4}px ${size / 4}px`,
      backgroundSize: `${size / 2}px ${size / 2}px`,
      height: size,
      width: size
    };
    return (
      <div className="Finish pos-abs" style={{transform: `translateX(${x * size}px) translateY(${y * size}px) translateZ(${z * size}px)`}}>
        <div
          className="Finish__side side--bottom pos-abs"
          style={styles}
        />
      </div>
    );
  }

}

export default Finish;
