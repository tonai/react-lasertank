import React, { PureComponent } from 'react';

import { getBottomStyles } from '../../../../services/styles';
import { loadTextures, setTopTexture } from '../../../../services/texture';

import BoardBlock from '../../BoardBlock/BoardBlock';

class FloorBroken extends PureComponent {

  /* Properties */

  drawBottom = (canvas) => {
    if (canvas) {
      const {name, sprites} = this.props;
      setTopTexture(canvas, name, sprites.bottom, this.props);
    }
  };

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
      <div>
        <canvas
          className="side--bottom pos-abs"
          width={size}
          height={size}
          ref={this.drawBottom}
          style={getBottomStyles(size)}
        />
        <canvas
          className="side--top pos-abs"
          width={size}
          height={size}
          ref={this.drawTop}
          style={getBottomStyles(size)}
        />
      </div>
    );
  }

}

export default BoardBlock(FloorBroken);
