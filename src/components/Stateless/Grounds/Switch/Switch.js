import React, { PureComponent } from 'react';

import BoardBlock from '../../BoardBlock/BoardBlock';

class Switch extends PureComponent {

  /* Methods */

  render() {
    const { size, sprites, zAngle } = this.props;
    const styles = {
      width: size / 2,
      height: size / 2,
      margin: size / 4,
      backgroundImage: `url(${sprites.bottom.image.src})`,
      backgroundPosition: `-${sprites.bottom.offset[0]}px -${sprites.bottom.offset[1]}px`,
      transform: `rotateZ(-${zAngle}deg)`
    };
    return (
      <div
        className="side--bottom pos-abs"
        style={styles}
      />
    );
  }

}

export default BoardBlock(Switch);
