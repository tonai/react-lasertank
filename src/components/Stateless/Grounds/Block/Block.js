import React, { Component } from 'react';

class Block extends Component {

  drawFront = (canvas) => {
    const { bottom, frontLeft, frontRight, left, right } = this.props;
    const context = canvas.getContext('2d');
    context.putImageData(this.data.frontTopLeft0, 16, 0);
    context.putImageData(this.data.frontTopRight0, 32, 0);
    if (right || frontRight) {
      context.putImageData(this.data.frontTopRight0, 0, 0);
    } else {
      context.putImageData(this.data.frontTopRight1, 0, 0);
    }
    if (left || frontLeft) {
      context.putImageData(this.data.frontTopLeft0, 48, 0);
    } else {
      context.putImageData(this.data.frontTopLeft1, 48, 0);
    }
    if (bottom) {
      context.putImageData(this.data.frontTopLeft0, 16, 32);
      context.putImageData(this.data.frontTopRight0, 32, 32);
      if (right || frontRight) {
        context.putImageData(this.data.frontTopRight0, 0, 32);
      } else {
        context.putImageData(this.data.frontTopRight1, 0, 32);
      }
      if (left || frontLeft) {
        context.putImageData(this.data.frontTopLeft0, 48, 32);
      } else {
        context.putImageData(this.data.frontTopLeft1, 48, 32);
      }
    } else {
      context.putImageData(this.data.frontBottomLeft0, 16, 32);
      context.putImageData(this.data.frontBottomRight0, 32, 32);
      if (right || frontRight) {
        context.putImageData(this.data.frontBottomRight0, 0, 32);
      } else {
        context.putImageData(this.data.frontBottomRight1, 0, 32);
      }
      if (left || frontLeft) {
        context.putImageData(this.data.frontBottomLeft0, 48, 32);
      } else {
        context.putImageData(this.data.frontBottomLeft1, 48, 32);
      }
    }
  };

  drawBack = (canvas) => {
    const { backLeft, backRight, bottom, left, right } = this.props;
    const context = canvas.getContext('2d');
    context.putImageData(this.data.frontTopLeft0, 16, 0);
    context.putImageData(this.data.frontTopRight0, 32, 0);
    if (right || backRight) {
      context.putImageData(this.data.frontTopRight0, 0, 0);
    } else {
      context.putImageData(this.data.frontTopRight1, 0, 0);
    }
    if (left || backLeft) {
      context.putImageData(this.data.frontTopLeft0, 48, 0);
    } else {
      context.putImageData(this.data.frontTopLeft1, 48, 0);
    }
    if (bottom) {
      context.putImageData(this.data.frontTopLeft0, 16, 32);
      context.putImageData(this.data.frontTopRight0, 32, 32);
      if (right || backRight) {
        context.putImageData(this.data.frontTopRight0, 0, 32);
      } else {
        context.putImageData(this.data.frontTopRight1, 0, 32);
      }
      if (left || backLeft) {
        context.putImageData(this.data.frontTopLeft0, 48, 32);
      } else {
        context.putImageData(this.data.frontTopLeft1, 48, 32);
      }
    } else {
      context.putImageData(this.data.frontBottomLeft0, 16, 32);
      context.putImageData(this.data.frontBottomRight0, 32, 32);
      if (right || backRight) {
        context.putImageData(this.data.frontBottomRight0, 0, 32);
      } else {
        context.putImageData(this.data.frontBottomRight1, 0, 32);
      }
      if (left || backLeft) {
        context.putImageData(this.data.frontBottomLeft0, 48, 32);
      } else {
        context.putImageData(this.data.frontBottomLeft1, 48, 32);
      }
    }
  };

  drawRight = (canvas) => {
    const { back, backRight, bottom, front, frontRight } = this.props;
    const context = canvas.getContext('2d');
    context.putImageData(this.data.frontTopLeft0, 16, 0);
    context.putImageData(this.data.frontTopRight0, 32, 0);
    if (front || frontRight) {
      context.putImageData(this.data.frontTopRight0, 0, 0);
    } else {
      context.putImageData(this.data.frontTopRight1, 0, 0);
    }
    if (back || backRight) {
      context.putImageData(this.data.frontTopLeft0, 48, 0);
    } else {
      context.putImageData(this.data.frontTopLeft1, 48, 0);
    }
    if (bottom) {
      context.putImageData(this.data.frontTopLeft0, 16, 32);
      context.putImageData(this.data.frontTopRight0, 32, 32);
      if (front || frontRight) {
        context.putImageData(this.data.frontTopRight0, 0, 32);
      } else {
        context.putImageData(this.data.frontTopRight1, 0, 32);
      }
      if (back || backRight) {
        context.putImageData(this.data.frontTopLeft0, 48, 32);
      } else {
        context.putImageData(this.data.frontTopLeft1, 48, 32);
      }
    } else {
      context.putImageData(this.data.frontBottomLeft0, 16, 32);
      context.putImageData(this.data.frontBottomRight0, 32, 32);
      if (front || frontRight) {
        context.putImageData(this.data.frontBottomRight0, 0, 32);
      } else {
        context.putImageData(this.data.frontBottomRight1, 0, 32);
      }
      if (back || backRight) {
        context.putImageData(this.data.frontBottomLeft0, 48, 32);
      } else {
        context.putImageData(this.data.frontBottomLeft1, 48, 32);
      }
    }
  };

  drawLeft = (canvas) => {
    const { back, backLeft, bottom, front, frontLeft } = this.props;
    const context = canvas.getContext('2d');
    context.putImageData(this.data.frontTopLeft0, 16, 0);
    context.putImageData(this.data.frontTopRight0, 32, 0);
    if (front || frontLeft) {
      context.putImageData(this.data.frontTopRight0, 0, 0);
    } else {
      context.putImageData(this.data.frontTopRight1, 0, 0);
    }
    if (back || backLeft) {
      context.putImageData(this.data.frontTopLeft0, 48, 0);
    } else {
      context.putImageData(this.data.frontTopLeft1, 48, 0);
    }
    if (bottom) {
      context.putImageData(this.data.frontTopLeft0, 16, 32);
      context.putImageData(this.data.frontTopRight0, 32, 32);
      if (front || frontLeft) {
        context.putImageData(this.data.frontTopRight0, 0, 32);
      } else {
        context.putImageData(this.data.frontTopRight1, 0, 32);
      }
      if (back || backLeft) {
        context.putImageData(this.data.frontTopLeft0, 48, 32);
      } else {
        context.putImageData(this.data.frontTopLeft1, 48, 32);
      }
    } else {
      context.putImageData(this.data.frontBottomLeft0, 16, 32);
      context.putImageData(this.data.frontBottomRight0, 32, 32);
      if (front || frontLeft) {
        context.putImageData(this.data.frontBottomRight0, 0, 32);
      } else {
        context.putImageData(this.data.frontBottomRight1, 0, 32);
      }
      if (back || backLeft) {
        context.putImageData(this.data.frontBottomLeft0, 48, 32);
      } else {
        context.putImageData(this.data.frontBottomLeft1, 48, 32);
      }
    }
  };

  drawTop = (canvas) => {
    const { back, backLeft, backRight, front, frontLeft, frontRight, left, right } = this.props;
    const context = canvas.getContext('2d');
    context.putImageData(this.data.topFrontLeft0, 16, 16);
    context.putImageData(this.data.topFrontRight0, 32, 16);
    context.putImageData(this.data.topBackLeft0, 16, 32);
    context.putImageData(this.data.topBackRight0, 32, 32);
    if (front) {
      context.putImageData(this.data.topFrontLeft0, 16, 48);
      context.putImageData(this.data.topFrontRight0, 32, 48);
      if (right) {
        frontRight ? context.putImageData(this.data.topFrontRight0, 0, 48) : context.putImageData(this.data.topFrontRight1, 0, 48);
      } else {
        context.putImageData(this.data.topFrontRight2, 0, 48)
      }
      if (left) {
        frontLeft ? context.putImageData(this.data.topFrontLeft0, 48, 48) : context.putImageData(this.data.topFrontLeft1, 48, 48);
      } else {
        context.putImageData(this.data.topFrontLeft2, 48, 48)
      }
    } else {
      context.putImageData(this.data.topFrontLeft3, 16, 48);
      context.putImageData(this.data.topFrontRight3, 32, 48);
      if (right) {
        context.putImageData(this.data.topFrontRight3, 0, 48)
      } else {
        context.putImageData(this.data.topFrontRight4, 0, 48)
      }
      if (left) {
        context.putImageData(this.data.topFrontLeft3, 48, 48)
      } else {
        context.putImageData(this.data.topFrontLeft4, 48, 48)
      }
    }
    if (back) {
      context.putImageData(this.data.topBackLeft0, 16, 0);
      context.putImageData(this.data.topBackRight0, 32, 0);
      if (right) {
        backRight ? context.putImageData(this.data.topBackRight0, 0, 0) : context.putImageData(this.data.topBackRight1, 0, 0);
      } else {
        context.putImageData(this.data.topBackRight2, 0, 0);
      }
      if (left) {
        backLeft ? context.putImageData(this.data.topBackLeft0, 48, 0) : context.putImageData(this.data.topBackLeft1, 48, 0);
      } else {
        context.putImageData(this.data.topBackLeft2, 48, 0);
      }
    } else {
      context.putImageData(this.data.topBackLeft3, 16, 0);
      context.putImageData(this.data.topBackRight3, 32, 0);
      if (right) {
        context.putImageData(this.data.topBackRight3, 0, 0);
      } else {
        context.putImageData(this.data.topBackRight4, 0, 0);
      }
      if (left) {
        context.putImageData(this.data.topBackLeft3, 48, 0);
      } else {
        context.putImageData(this.data.topBackLeft4, 48, 0);
      }
    }
    if (left) {
      context.putImageData(this.data.topFrontLeft0, 48, 16);
      context.putImageData(this.data.topBackLeft0, 48, 32);
    } else {
      context.putImageData(this.data.topFrontLeft2, 48, 16);
      context.putImageData(this.data.topBackLeft2, 48, 32);
    }
    if (right) {
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
    this.canvas.width = width;
    this.canvas.height = height;
    this.context.drawImage(this.props.settings.spriteImage, 0, 0);

    this.data = {
      topFrontRight0: this.context.getImageData(32, 48, 16, 16), // front && right && frontRight
      topFrontRight1: this.context.getImageData(32, 16, 16, 16), // front && right && !frontRight
      topFrontRight2: this.context.getImageData(0, 48, 16, 16), // front && !right
      topFrontRight3: this.context.getImageData(32, 80, 16, 16), // !front && right
      topFrontRight4: this.context.getImageData(0, 80, 16, 16), // !front && !right
      topBackRight0: this.context.getImageData(32, 64, 16, 16), // back && right && backRight
      topBackRight1: this.context.getImageData(32, 0, 16, 16), // back && right && !backRight
      topBackRight2: this.context.getImageData(0, 64, 16, 16), // back && !right
      topBackRight3: this.context.getImageData(32, 32, 16, 16), // !back && right
      topBackRight4: this.context.getImageData(0, 32, 16, 16), // !back && !right
      topFrontLeft0: this.context.getImageData(16, 48, 16, 16), // front && left && frontLeft
      topFrontLeft1: this.context.getImageData(48, 16, 16, 16), // front && left && !frontLeft
      topFrontLeft2: this.context.getImageData(48, 48, 16, 16), // front && !left
      topFrontLeft3: this.context.getImageData(16, 80, 16, 16), // !front && left
      topFrontLeft4: this.context.getImageData(48, 80, 16, 16), // !front && !left
      topBackLeft0: this.context.getImageData(16, 64, 16, 16), // back && left && backLeft
      topBackLeft1: this.context.getImageData(48, 0, 16, 16), // back && left && !backLeft
      topBackLeft2: this.context.getImageData(48, 64, 16, 16), // back && !left
      topBackLeft3: this.context.getImageData(16, 32, 16, 16), // !back && left
      topBackLeft4: this.context.getImageData(48, 32, 16, 16), // !back && !left
      frontTopRight0: this.context.getImageData(32, 96, 16, 32), // right
      frontTopRight1: this.context.getImageData(0, 96, 16, 32), // !right
      frontBottomRight0: this.context.getImageData(32, 128, 16, 32), // right
      frontBottomRight1: this.context.getImageData(0, 128, 16, 32), // !right
      frontTopLeft0: this.context.getImageData(16, 96, 16, 32), // left
      frontTopLeft1: this.context.getImageData(48, 96, 16, 32), // !left
      frontBottomLeft0: this.context.getImageData(16, 128, 16, 32), // left
      frontBottomLeft1: this.context.getImageData(48, 128, 16, 32), // !left
    };
  }

  render() {
    const { back, front, left, right, size, styles } = this.props;
    return (
      <div className="Block pos-abs" style={styles}>
        {!front && (<canvas
          className="Block__side side--front pos-abs"
          width={size}
          height={size}
          ref={this.drawFront}
          style={{transform: `rotateX(-90deg) rotateY(90deg) translateY(-${size / 2}px) translateZ(${size / 2}px)`}}
        />)}
        {!back && (<canvas
          className="Block__side side--back pos-abs"
          width={size}
          height={size}
          ref={this.drawBack}
          style={{transform: `rotateY(90deg) rotateZ(-90deg) translateY(-${size / 2}px) translateZ(-${size / 2}px)`}}
        />)}
        {!right && (<canvas
          className="Block__side side--right pos-abs"
          width={size}
          height={size}
          ref={this.drawRight}
          style={{transform: `rotateX(-90deg) rotateY(180deg) translateY(-${size / 2}px) translateZ(-${size / 2}px)`}}
        />)}
        {!left && (<canvas
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
