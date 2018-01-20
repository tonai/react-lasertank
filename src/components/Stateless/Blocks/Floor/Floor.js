import React, { PureComponent } from 'react';

import { getBottomStyles } from '../../../../services/styles';
import { setTopTexture } from '../../../../services/texture';

class Floor extends PureComponent {

  drawTop = (canvas) => {
    const { name, settings } = this.props;
    setTopTexture(canvas, name, settings, this.props);
  };

  render() {
    const { bottom, size, styles } = this.props;
    return (
      <div className="Floor pos-abs" style={styles}>
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

Floor.defaultProps = {
  x: 0,
  y: 0,
};

export default Floor;
