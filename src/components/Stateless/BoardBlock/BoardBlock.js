import React, { PureComponent } from 'react';

export default function BoardBlock(Component) {
  return class BlockBoard extends PureComponent {

    initRef = (ref) => {
      this.ref = ref;
    };

    render() {
      const { direction, size, x, y, z } = this.props;
      const translationStyles = {
        transform: `translateX(${x * size}px) translateY(${y * size}px) translateZ(${z * size}px)`,
      };
      const rotationStyles = {
        width: size,
        height: size,
        transform: `rotateZ(${direction}deg)`,
      };
      return (
        <div className="pos-abs" style={translationStyles}>
          <div className="pos-abs" style={rotationStyles}>
            <Component {...this.props} ref={this.initRef}/>
          </div>
        </div>
      );
    }

  }
}
