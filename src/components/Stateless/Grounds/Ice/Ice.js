import React, { PureComponent } from 'react';

import { getBottomStyles } from '../../../../services/styles';
import { loadTextures, setTopTexture } from '../../../../services/texture';

import BoardBlock from '../../BoardBlock/BoardBlock';

class Ice extends PureComponent {

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
    const { size } = this.props;
    return (
      <canvas
        className="side--bottom pos-abs"
        width={size}
        height={size}
        ref={this.drawTop}
        style={getBottomStyles(size)}
      />
    );
  }

}

export default BoardBlock(Ice);
