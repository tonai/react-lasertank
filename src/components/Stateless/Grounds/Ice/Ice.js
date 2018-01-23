import React, { PureComponent } from 'react';

import { getBottomStyles } from '../../../../services/styles';
import { loadTextures, setTopTexture } from '../../../../services/texture';

class Ice extends PureComponent {

  /* Properties */

  drawTop = (canvas) => {
    const { name, settings } = this.props;
    setTopTexture(canvas, name, settings.sprites[0], this.props);
  };

  /* Methods */

  componentWillMount() {
    loadTextures(this.props.settings.sprites);
  }

  render() {
    const { size, styles } = this.props;
    return (
      <div className="Ice pos-abs" style={styles}>
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

export default Ice;
