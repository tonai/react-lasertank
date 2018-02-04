import React, { PureComponent } from 'react';

import { getBottomStyles } from '../../../../services/styles';

import BoardBlock from '../../BoardBlock/BoardBlock';

class Teleporter extends PureComponent {

  /* Methods */

  render() {
    const { size, sprites } = this.props;
    const styles = {
      ...getBottomStyles(size),
      width: size,
      height: size,
      backgroundImage: `url(${sprites.bottom.image.src})`,
      backgroundPosition: `-${sprites.bottom.offset[0]}px -${sprites.bottom.offset[1]}px`
    };
    return (
      <div
        className="teleporter side--bottom pos-abs"
        style={styles}
      />
    );
  }

}

export default BoardBlock(Teleporter);
