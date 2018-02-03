import React, { PureComponent } from 'react';

import { getBottomStyles } from '../../../../services/styles';
import { loadTextures, setTopTexture } from '../../../../services/texture';

import BoardBlock from '../../BoardBlock/BoardBlock';
import gameSettings from '../../../../settings/game';

class BrokenFloor extends PureComponent {

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
    const { opacity, size } = this.props;
    const style = {
      opacity,
      transition: `all ${gameSettings.transitionTimer * 2}ms cubic-bezier(0.895, 0.03, 0.685, 0.22)`
    };
    return (
      <div style={style}>
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

export default BoardBlock(BrokenFloor);
