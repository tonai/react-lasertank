import React, { PureComponent } from 'react';

import { getBottomStyles } from '../../../../services/styles';
import { loadTextures, setTopTexture } from '../../../../services/texture';

class Floor extends PureComponent {

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
    const { size, x, y, z } = this.props;
    return (
      <div className="Floor pos-abs" style={{transform: `translateX(${x * size}px) translateY(${y * size}px) translateZ(${z * size}px)`}}>
        <canvas
          className="Water__side side--bottom pos-abs"
          width={size}
          height={size}
          ref={this.drawTop}
          style={getBottomStyles(size)}
        />
      </div>
    );
  }

}

export default Floor;
