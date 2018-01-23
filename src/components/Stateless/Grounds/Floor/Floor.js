import React, { PureComponent } from 'react';

import { getBottomStyles } from '../../../../services/styles';
import { loadTextureData, setTopTexture } from '../../../../services/texture';

class Floor extends PureComponent {

  /* Properties */

  drawTop = (canvas) => {
    const { name, settings } = this.props;
    setTopTexture(canvas, name, settings, this.props);
  };

  /* Methods */

  componentWillMount() {
    loadTextureData(this.props.settings);
  }

  render() {
    const { size, styles } = this.props;
    return (
      <div className="Floor pos-abs" style={styles}>
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
