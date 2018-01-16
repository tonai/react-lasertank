import React, { Component } from 'react';

class Block extends Component {

  drawFront = (canvas) => {
    const { bottom, frontLeft, frontRight, left, name, right, top } = this.props;
    const context = canvas.getContext('2d');
    if (top === name) {
      context.putImageData(this.data.frontTopBottomLeft0, 16, 0);
      context.putImageData(this.data.frontTopBottomRight0, 32, 0);
    } else {
      context.putImageData(this.data.frontTopTopLeft0, 16, 0);
      context.putImageData(this.data.frontTopTopRight0, 32, 0);
    }
    if (right === name || frontRight === name) {
      top === name ? context.putImageData(this.data.frontTopBottomRight0, 0, 0) : context.putImageData(this.data.frontTopTopRight0, 0, 0);
    } else {
      top === name ? context.putImageData(this.data.frontTopBottomRight1, 0, 0) : context.putImageData(this.data.frontTopTopRight1, 0, 0);
    }
    if (left === name || frontLeft === name) {
      top === name ? context.putImageData(this.data.frontTopBottomLeft0, 48, 0) : context.putImageData(this.data.frontTopTopLeft0, 48, 0);
    } else {
      top === name ? context.putImageData(this.data.frontTopBottomLeft1, 48, 0) : context.putImageData(this.data.frontTopTopLeft1, 48, 0);
    }

    context.putImageData(this.data.frontBottomTopLeft0, 16, 16);
    context.putImageData(this.data.frontBottomTopRight0, 32, 16);
    if (right === name || frontRight === name) {
      context.putImageData(this.data.frontBottomTopRight0, 0, 16);
    } else {
      context.putImageData(this.data.frontBottomTopRight1, 0, 16);
    }
    if (right === name || frontLeft === name) {
      context.putImageData(this.data.frontBottomTopLeft0, 48, 16);
    } else {
      context.putImageData(this.data.frontBottomTopLeft1, 48, 16);
    }

    context.putImageData(this.data.frontTopBottomLeft0, 16, 32);
    context.putImageData(this.data.frontTopBottomRight0, 32, 32);
    if (right === name || frontRight === name) {
      context.putImageData(this.data.frontTopBottomRight0, 0, 32);
    } else {
      context.putImageData(this.data.frontTopBottomRight1, 0, 32);
    }
    if (left === name || frontLeft === name) {
      context.putImageData(this.data.frontTopBottomLeft0, 48, 32);
    } else {
      context.putImageData(this.data.frontTopBottomLeft1, 48, 32);
    }

    if (bottom === name) {
      context.putImageData(this.data.frontBottomTopLeft0, 16, 48);
      context.putImageData(this.data.frontBottomTopRight0, 32, 48);
    } else {
      context.putImageData(this.data.frontBottomBottomLeft0, 16, 48);
      context.putImageData(this.data.frontBottomBottomRight0, 32, 48);
    }
    if (right === name || frontRight === name) {
      bottom === name ? context.putImageData(this.data.frontBottomTopRight0, 0, 48) : context.putImageData(this.data.frontBottomBottomRight0, 0, 48);
    } else {
      bottom === name ? context.putImageData(this.data.frontBottomTopRight1, 0, 48) : context.putImageData(this.data.frontBottomBottomRight1, 0, 48);
    }
    if (left === name || frontLeft === name) {
      bottom === name ? context.putImageData(this.data.frontBottomTopLeft0, 48, 48) : context.putImageData(this.data.frontBottomBottomLeft0, 48, 48);
    } else {
      bottom === name ? context.putImageData(this.data.frontBottomTopLeft1, 48, 48) : context.putImageData(this.data.frontBottomBottomLeft1, 48, 48);
    }
  };

  drawBack = (canvas) => {
    const { backLeft, backRight, bottom, left, name, right, top } = this.props;
    const context = canvas.getContext('2d');
    if (top === name) {
      context.putImageData(this.data.frontTopBottomLeft0, 16, 0);
      context.putImageData(this.data.frontTopBottomRight0, 32, 0);
    } else {
      context.putImageData(this.data.frontTopTopLeft0, 16, 0);
      context.putImageData(this.data.frontTopTopRight0, 32, 0);
    }
    if (right === name || backRight === name) {
      top === name ? context.putImageData(this.data.frontTopBottomRight0, 0, 0) : context.putImageData(this.data.frontTopTopRight0, 0, 0);
    } else {
      top === name ? context.putImageData(this.data.frontTopBottomRight1, 0, 0) : context.putImageData(this.data.frontTopTopRight1, 0, 0);
    }
    if (left === name || backLeft === name) {
      top === name ? context.putImageData(this.data.frontTopBottomLeft0, 48, 0) : context.putImageData(this.data.frontTopTopLeft0, 48, 0);
    } else {
      top === name ? context.putImageData(this.data.frontTopBottomLeft1, 48, 0) : context.putImageData(this.data.frontTopTopLeft1, 48, 0);
    }

    context.putImageData(this.data.frontBottomTopLeft0, 16, 16);
    context.putImageData(this.data.frontBottomTopRight0, 32, 16);
    if (right === name || backRight === name) {
      context.putImageData(this.data.frontBottomTopRight0, 0, 16);
    } else {
      context.putImageData(this.data.frontBottomTopRight1, 0, 16);
    }
    if (left === name || backLeft === name) {
      context.putImageData(this.data.frontBottomTopLeft0, 48, 16);
    } else {
      context.putImageData(this.data.frontBottomTopLeft1, 48, 16);
    }

    context.putImageData(this.data.frontTopBottomLeft0, 16, 32);
    context.putImageData(this.data.frontTopBottomRight0, 32, 32);
    if (right === name || backRight === name) {
      context.putImageData(this.data.frontTopBottomRight0, 0, 32);
    } else {
      context.putImageData(this.data.frontTopBottomRight1, 0, 32);
    }
    if (left === name || backLeft === name) {
      context.putImageData(this.data.frontTopBottomLeft0, 48, 32);
    } else {
      context.putImageData(this.data.frontTopBottomLeft1, 48, 32);
    }

    if (bottom === name) {
      context.putImageData(this.data.frontBottomTopLeft0, 16, 48);
      context.putImageData(this.data.frontBottomTopRight0, 32, 48);
    } else {
      context.putImageData(this.data.frontBottomBottomLeft0, 16, 48);
      context.putImageData(this.data.frontBottomBottomRight0, 32, 48);
    }
    if (right === name || backRight === name) {
      bottom === name ? context.putImageData(this.data.frontBottomTopRight0, 0, 48) : context.putImageData(this.data.frontBottomBottomRight0, 0, 48);
    } else {
      bottom === name ? context.putImageData(this.data.frontBottomTopRight1, 0, 48) : context.putImageData(this.data.frontBottomBottomRight1, 0, 48);
    }
    if (left === name || backLeft === name) {
      bottom === name ? context.putImageData(this.data.frontBottomTopLeft0, 48, 48) : context.putImageData(this.data.frontBottomBottomLeft0, 48, 48);
    } else {
      bottom === name ? context.putImageData(this.data.frontBottomTopLeft1, 48, 48) : context.putImageData(this.data.frontBottomBottomLeft1, 48, 48);
    }
  };

  drawRight = (canvas) => {
    const { back, backRight, bottom, front, frontRight, name, top } = this.props;
    const context = canvas.getContext('2d');

    if (top === name) {
      context.putImageData(this.data.frontTopBottomLeft0, 16, 0);
      context.putImageData(this.data.frontTopBottomRight0, 32, 0);
    } else {
      context.putImageData(this.data.frontTopTopLeft0, 16, 0);
      context.putImageData(this.data.frontTopTopRight0, 32, 0);
    }
    if (front === name || frontRight === name) {
      top === name ? context.putImageData(this.data.frontTopBottomRight0, 0, 0) : context.putImageData(this.data.frontTopTopRight0, 0, 0);
    } else {
      top === name ? context.putImageData(this.data.frontTopBottomRight1, 0, 0) : context.putImageData(this.data.frontTopTopRight1, 0, 0);
    }
    if (back === name || backRight === name) {
      top === name ? context.putImageData(this.data.frontTopBottomLeft0, 48, 0) : context.putImageData(this.data.frontTopTopLeft0, 48, 0);
    } else {
      top === name ? context.putImageData(this.data.frontTopBottomLeft1, 48, 0) : context.putImageData(this.data.frontTopTopLeft1, 48, 0);
    }

    context.putImageData(this.data.frontBottomTopLeft0, 16, 16);
    context.putImageData(this.data.frontBottomTopRight0, 32, 16);
    if (front === name || frontRight === name) {
      context.putImageData(this.data.frontBottomTopRight0, 0, 16);
    } else {
      context.putImageData(this.data.frontBottomTopRight1, 0, 16);
    }
    if (back === name || backRight === name) {
      context.putImageData(this.data.frontBottomTopLeft0, 48, 16);
    } else {
      context.putImageData(this.data.frontBottomTopLeft1, 48, 16);
    }

    context.putImageData(this.data.frontTopBottomLeft0, 16, 32);
    context.putImageData(this.data.frontTopBottomRight0, 32, 32);
    if (front === name || frontRight === name) {
      context.putImageData(this.data.frontTopBottomRight0, 0, 32);
    } else {
      context.putImageData(this.data.frontTopBottomRight1, 0, 32);
    }
    if (back === name || backRight === name) {
      context.putImageData(this.data.frontTopBottomLeft0, 48, 32);
    } else {
      context.putImageData(this.data.frontTopBottomLeft1, 48, 32);
    }

    if (bottom === name) {
      context.putImageData(this.data.frontBottomTopLeft0, 16, 48);
      context.putImageData(this.data.frontBottomTopRight0, 32, 48);
    } else {
      context.putImageData(this.data.frontBottomBottomLeft0, 16, 48);
      context.putImageData(this.data.frontBottomBottomRight0, 32, 48);
    }
    if (front === name || frontRight === name) {
      bottom === name ? context.putImageData(this.data.frontBottomTopRight0, 0, 48) : context.putImageData(this.data.frontBottomBottomRight0, 0, 48);
    } else {
      bottom === name ? context.putImageData(this.data.frontBottomTopRight1, 0, 48) : context.putImageData(this.data.frontBottomBottomRight1, 0, 48);
    }
    if (back === name || backRight === name) {
      bottom === name ? context.putImageData(this.data.frontBottomTopLeft0, 48, 48) : context.putImageData(this.data.frontBottomBottomLeft0, 48, 48);
    } else {
      bottom === name ? context.putImageData(this.data.frontBottomTopLeft1, 48, 48) : context.putImageData(this.data.frontBottomBottomLeft1, 48, 48);
    }
  };

  drawLeft = (canvas) => {
    const { back, backLeft, bottom, front, frontLeft, name, top } = this.props;
    const context = canvas.getContext('2d');
    if (top === name) {
      context.putImageData(this.data.frontTopBottomLeft0, 16, 0);
      context.putImageData(this.data.frontTopBottomRight0, 32, 0);
    } else {
      context.putImageData(this.data.frontTopTopLeft0, 16, 0);
      context.putImageData(this.data.frontTopTopRight0, 32, 0);
    }
    if (front === name || frontLeft === name) {
      top === name ? context.putImageData(this.data.frontTopBottomRight0, 0, 0) : context.putImageData(this.data.frontTopTopRight0, 0, 0);
    } else {
      top === name ? context.putImageData(this.data.frontTopBottomRight1, 0, 0) : context.putImageData(this.data.frontTopTopRight1, 0, 0);
    }
    if (back === name || backLeft === name) {
      top === name ? context.putImageData(this.data.frontTopBottomLeft0, 48, 0) : context.putImageData(this.data.frontTopTopLeft0, 48, 0);
    } else {
      top === name ? context.putImageData(this.data.frontTopBottomLeft1, 48, 0) : context.putImageData(this.data.frontTopTopLeft1, 48, 0);
    }

    context.putImageData(this.data.frontBottomTopLeft0, 16, 16);
    context.putImageData(this.data.frontBottomTopRight0, 32, 16);
    if (front === name || frontLeft === name) {
      context.putImageData(this.data.frontBottomTopRight0, 0, 16);
    } else {
      context.putImageData(this.data.frontBottomTopRight1, 0, 16);
    }
    if (back === name || backLeft === name) {
      context.putImageData(this.data.frontBottomTopLeft0, 48, 16);
    } else {
      context.putImageData(this.data.frontBottomTopLeft1, 48, 16);
    }

    context.putImageData(this.data.frontTopBottomLeft0, 16, 32);
    context.putImageData(this.data.frontTopBottomRight0, 32, 32);
    if (front === name || frontLeft === name) {
      context.putImageData(this.data.frontTopBottomRight0, 0, 32);
    } else {
      context.putImageData(this.data.frontTopBottomRight1, 0, 32);
    }
    if (back === name || backLeft === name) {
      context.putImageData(this.data.frontTopBottomLeft0, 48, 32);
    } else {
      context.putImageData(this.data.frontTopBottomLeft1, 48, 32);
    }

    if (bottom === name) {
      context.putImageData(this.data.frontBottomTopLeft0, 16, 48);
      context.putImageData(this.data.frontBottomTopRight0, 32, 48);
    } else {
      context.putImageData(this.data.frontBottomBottomLeft0, 16, 48);
      context.putImageData(this.data.frontBottomBottomRight0, 32, 48);
    }
    if (front === name || frontLeft === name) {
      bottom === name ? context.putImageData(this.data.frontBottomTopRight0, 0, 48) : context.putImageData(this.data.frontBottomBottomRight0, 0, 48);
    } else {
      bottom === name ? context.putImageData(this.data.frontBottomTopRight1, 0, 48) : context.putImageData(this.data.frontBottomBottomRight1, 0, 48);
    }
    if (back === name || backLeft === name) {
      bottom === name ? context.putImageData(this.data.frontBottomTopLeft0, 48, 48) : context.putImageData(this.data.frontBottomBottomLeft0, 48, 48);
    } else {
      bottom === name ? context.putImageData(this.data.frontBottomTopLeft1, 48, 48) : context.putImageData(this.data.frontBottomBottomLeft1, 48, 48);
    }
  };

  drawTop = (canvas) => {
    const { back, backLeft, backRight, front, frontLeft, frontRight, left, name, right } = this.props;
    const context = canvas.getContext('2d');
    context.putImageData(this.data.topFrontLeft0, 16, 16);
    context.putImageData(this.data.topFrontRight0, 32, 16);
    context.putImageData(this.data.topBackLeft0, 16, 32);
    context.putImageData(this.data.topBackRight0, 32, 32);
    if (front === name) {
      context.putImageData(this.data.topFrontLeft0, 16, 48);
      context.putImageData(this.data.topFrontRight0, 32, 48);
      if (right === name) {
        frontRight === name ? context.putImageData(this.data.topFrontRight0, 0, 48) : context.putImageData(this.data.topFrontRight1, 0, 48);
      } else {
        context.putImageData(this.data.topFrontRight2, 0, 48)
      }
      if (left === name) {
        frontLeft === name ? context.putImageData(this.data.topFrontLeft0, 48, 48) : context.putImageData(this.data.topFrontLeft1, 48, 48);
      } else {
        context.putImageData(this.data.topFrontLeft2, 48, 48)
      }
    } else {
      context.putImageData(this.data.topFrontLeft3, 16, 48);
      context.putImageData(this.data.topFrontRight3, 32, 48);
      if (right === name) {
        context.putImageData(this.data.topFrontRight3, 0, 48)
      } else {
        context.putImageData(this.data.topFrontRight4, 0, 48)
      }
      if (left === name) {
        context.putImageData(this.data.topFrontLeft3, 48, 48)
      } else {
        context.putImageData(this.data.topFrontLeft4, 48, 48)
      }
    }
    if (back === name) {
      context.putImageData(this.data.topBackLeft0, 16, 0);
      context.putImageData(this.data.topBackRight0, 32, 0);
      if (right === name) {
        backRight === name ? context.putImageData(this.data.topBackRight0, 0, 0) : context.putImageData(this.data.topBackRight1, 0, 0);
      } else {
        context.putImageData(this.data.topBackRight2, 0, 0);
      }
      if (left === name) {
        backLeft === name ? context.putImageData(this.data.topBackLeft0, 48, 0) : context.putImageData(this.data.topBackLeft1, 48, 0);
      } else {
        context.putImageData(this.data.topBackLeft2, 48, 0);
      }
    } else {
      context.putImageData(this.data.topBackLeft3, 16, 0);
      context.putImageData(this.data.topBackRight3, 32, 0);
      if (right === name) {
        context.putImageData(this.data.topBackRight3, 0, 0);
      } else {
        context.putImageData(this.data.topBackRight4, 0, 0);
      }
      if (left === name) {
        context.putImageData(this.data.topBackLeft3, 48, 0);
      } else {
        context.putImageData(this.data.topBackLeft4, 48, 0);
      }
    }
    if (left === name) {
      context.putImageData(this.data.topFrontLeft0, 48, 16);
      context.putImageData(this.data.topBackLeft0, 48, 32);
    } else {
      context.putImageData(this.data.topFrontLeft2, 48, 16);
      context.putImageData(this.data.topBackLeft2, 48, 32);
    }
    if (right === name) {
      context.putImageData(this.data.topFrontRight0, 0, 16);
      context.putImageData(this.data.topBackRight0, 0, 32);
    } else {
      context.putImageData(this.data.topFrontRight2, 0, 16);
      context.putImageData(this.data.topBackRight2, 0, 32);
    }
  };

  componentWillMount() {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.prepareImageData();
  }

  prepareImageData() {
    const { width, height } = this.props.settings.spriteImage;
    const [ x, y ] = this.props.settings.spriteOffset;
      this.canvas.width = width;
    this.canvas.height = height;
    this.context.drawImage(this.props.settings.spriteImage, 0, 0);

    this.data = {
      topFrontRight0: this.context.getImageData(32 + x, 48 + y, 16, 16), // front && right && frontRight
      topFrontRight1: this.context.getImageData(32 + x, 16 + y, 16, 16), // front && right && !frontRight
      topFrontRight2: this.context.getImageData(x, 48 + y, 16, 16), // front && !right
      topFrontRight3: this.context.getImageData(32 + x, 80 + y, 16, 16), // !front && right
      topFrontRight4: this.context.getImageData(x, 80 + y, 16, 16), // !front && !right
      topBackRight0: this.context.getImageData(32 + x, 64 + y, 16, 16), // back && right && backRight
      topBackRight1: this.context.getImageData(32 + x, y, 16, 16), // back && right && !backRight
      topBackRight2: this.context.getImageData(x, 64 + y, 16, 16), // back && !right
      topBackRight3: this.context.getImageData(32 + x, 32 + y, 16, 16), // !back && right
      topBackRight4: this.context.getImageData(x, 32 + y, 16, 16), // !back && !right
      topFrontLeft0: this.context.getImageData(16 + x, 48 + y, 16, 16), // front && left && frontLeft
      topFrontLeft1: this.context.getImageData(48 + x, 16 + y, 16, 16), // front && left && !frontLeft
      topFrontLeft2: this.context.getImageData(48 + x, 48 + y, 16, 16), // front && !left
      topFrontLeft3: this.context.getImageData(16 + x, 80 + y, 16, 16), // !front && left
      topFrontLeft4: this.context.getImageData(48 + x, 80 + y, 16, 16), // !front && !left
      topBackLeft0: this.context.getImageData(16 + x, 64 + y, 16, 16), // back && left && backLeft
      topBackLeft1: this.context.getImageData(48 + x, y, 16, 16), // back && left && !backLeft
      topBackLeft2: this.context.getImageData(48 + x, 64 + y, 16, 16), // back && !left
      topBackLeft3: this.context.getImageData(16 + x, 32 + y, 16, 16), // !back && left
      topBackLeft4: this.context.getImageData(48 + x, 32 + y, 16, 16), // !back && !left

      frontTopTopRight0: this.context.getImageData(32 + x, 96 + y, 16, 16), // right
      frontTopTopRight1: this.context.getImageData(x, 96 + y, 16, 16), // !right
      frontTopBottomRight0: this.context.getImageData(32 + x, 128 + y, 16, 16), // right
      frontTopBottomRight1: this.context.getImageData(x, 128 + y, 16, 16), // !right
      frontTopTopLeft0: this.context.getImageData(16 + x, 96 + y, 16, 16), // left
      frontTopTopLeft1: this.context.getImageData(48 + x, 96 + y, 16, 16), // !left
      frontTopBottomLeft0: this.context.getImageData(16 + x, 128 + y, 16, 16), // left
      frontTopBottomLeft1: this.context.getImageData(48 + x, 128 + y, 16, 16), // !left
      frontBottomTopRight0: this.context.getImageData(32 + x, 112 + y, 16, 16), // right
      frontBottomTopRight1: this.context.getImageData(x, 112 + y, 16, 16), // !right
      frontBottomBottomRight0: this.context.getImageData(32 + x, 144 + y, 16, 16), // right
      frontBottomBottomRight1: this.context.getImageData(x, 144 + y, 16, 16), // !right
      frontBottomTopLeft0: this.context.getImageData(16 + x, 112 + y, 16, 16), // left
      frontBottomTopLeft1: this.context.getImageData(48 + x, 112 + y, 16, 16), // !left
      frontBottomBottomLeft0: this.context.getImageData(16 + x, 144 + y, 16, 16), // left
      frontBottomBottomLeft1: this.context.getImageData(48 + x, 144 + y, 16, 16), // !left
    };
  }

  render() {
    const { back, front, left, name, right, size, styles } = this.props;
    return (
      <div className="Block pos-abs" style={styles}>
        {front !== name && (<canvas
          className="Block__side side--front pos-abs"
          width={size}
          height={size}
          ref={this.drawFront}
          style={{transform: `rotateX(-90deg) rotateY(90deg) translateY(-${size / 2}px) translateZ(${size / 2}px)`}}
        />)}
        {back !== name && (<canvas
          className="Block__side side--back pos-abs"
          width={size}
          height={size}
          ref={this.drawBack}
          style={{transform: `rotateY(90deg) rotateZ(-90deg) translateY(-${size / 2}px) translateZ(-${size / 2}px)`}}
        />)}
        {right !== name && (<canvas
          className="Block__side side--right pos-abs"
          width={size}
          height={size}
          ref={this.drawRight}
          style={{transform: `rotateX(-90deg) rotateY(180deg) translateY(-${size / 2}px) translateZ(-${size / 2}px)`}}
        />)}
        {left !== name && (<canvas
          className="Block__side side--left pos-abs"
          width={size}
          height={size}
          ref={this.drawLeft}
          style={{transform: `rotateX(-90deg) rotateY(180deg) translateY(-${size / 2}px) translateZ(${size / 2}px)`}}
        />)}
        <canvas
          className="Block__side side--top pos-abs"
          width={size}
          height={size}
          ref={this.drawTop}
          style={{transform: `rotateZ(-90deg) translateZ(${size}px)`}}
        />
      </div>
    );
  }

}

Block.defaultProps = {
  x: 0,
  y: 0,
};

export default Block;
