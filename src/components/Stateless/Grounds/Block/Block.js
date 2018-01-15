import React, { Component } from 'react';

class Block extends Component {

  render() {
    const { back, backLeft, backRight, front, frontLeft, frontRight, left, right, settings, size, styles } = this.props;

    const sideStyles = {
      width: size,
      height: size
    };

    const sidePartStyles = {
      width: size / 2,
      height: size / 2,
      backgroundImage: `url(${settings.spriteSrc})`
    };

    const frontTopRightPos = right || frontRight ? `${- size * 2 / 2}px ${- size * 6 / 2}px` : `0px ${- size * 6 / 2}px`;
    const frontBottomRightPos = right || frontRight ? `${- size * 2 / 2}px ${- size * 9 / 2}px` : `0px ${- size * 9 / 2}px`;
    const frontTopLeftPos = left || frontLeft ? `${- size / 2}px ${- size * 6 / 2}px` : `${- size * 3 / 2}px ${- size * 6 / 2}px`;
    const frontBottomLeftPos = left || frontLeft ? `${- size / 2}px ${- size * 9 / 2}px` : `${- size * 3 / 2}px ${- size * 9 / 2}px`;

    const rightTopFront = front || frontRight ? `${- size * 2 / 2}px ${- size * 6 / 2}px` : `0px ${- size * 6 / 2}px`;
    const rightBottomFront = front || frontRight ? `${- size * 2 / 2}px ${- size * 9 / 2}px` : `0px ${- size * 9 / 2}px`;
    const rightTopBack = back || backRight ? `${- size / 2}px ${- size * 6 / 2}px` : `${- size * 3 / 2}px ${- size * 6 / 2}px`;
    const rightBottomBack = back || backRight ? `${- size / 2}px ${- size * 9 / 2}px` : `${- size * 3 / 2}px ${- size * 9 / 2}px`;

    const backTopRightPos = right || backRight ? `${- size * 2 / 2}px ${- size * 6 / 2}px` : `0px ${- size * 6 / 2}px`;
    const backBottomRightPos = right || backRight ? `${- size * 2 / 2}px ${- size * 9 / 2}px` : `0px ${- size * 9 / 2}px`;
    const backTopLeftPos = left || backLeft ? `${- size / 2}px ${- size * 6 / 2}px` : `${- size * 3 / 2}px ${- size * 6 / 2}px`;
    const backBottomLeftPos = left || backLeft ? `${- size / 2}px ${- size * 9 / 2}px` : `${- size * 3 / 2}px ${- size * 9 / 2}px`;

    const leftTopFront = front || frontLeft ? `${- size * 2 / 2}px ${- size * 6 / 2}px` : `0px ${- size * 6 / 2}px`;
    const leftBottomFront = front || frontLeft ? `${- size * 2 / 2}px ${- size * 9 / 2}px` : `0px ${- size * 9 / 2}px`;
    const leftTopBack = back || backLeft ? `${- size / 2}px ${- size * 6 / 2}px` : `${- size * 3 / 2}px ${- size * 6 / 2}px`;
    const leftBottomBack = back || backLeft ? `${- size / 2}px ${- size * 9 / 2}px` : `${- size * 3 / 2}px ${- size * 9 / 2}px`;

    const topFrontRight = front
      ? (right
        ? (frontRight ? `${-size * 2 / 2}px ${- size * 3 / 2}px` : `${-size * 2 / 2}px ${- size / 2}px`)
        : `0px ${- size * 3 / 2}px`)
      : (right
        ? `${-size * 2 / 2}px ${- size * 5 / 2}px`
        : `0px ${- size * 5 / 2}px`);
    const topBackRight = back
      ? (right
        ? (backRight ? `${-size * 2 / 2}px ${- size * 4 / 2}px` : `${-size * 2 / 2}px 0px`)
        : `0px ${- size * 4 / 2}px`)
      : (right
        ? `${-size * 2 / 2}px ${- size * 2 / 2}px`
        : `0px ${- size * 2 / 2}px`);
    const topFrontLeft = front
      ? (left
        ? (frontLeft ? `${- size / 2}px ${- size * 3 / 2}px` : `${- size * 3 / 2}px ${- size / 2}px`)
        : `${- size * 3 / 2}px ${- size * 3 / 2}px`)
      : (left
        ? `${- size / 2}px ${- size * 5 / 2}px`
        : `${- size * 3 / 2}px ${- size * 5 / 2}px`);
    const topBackLeft = back
      ? (left
        ? (backLeft ? `${- size / 2}px ${- size * 4 / 2}px` : `${- size * 3 / 2}px 0px`)
        : `${- size * 3 / 2}px ${- size * 4 / 2}px`)
      : (left
        ? `${- size / 2}px ${- size * 2 / 2}px`
        : `${- size * 3 / 2}px ${- size * 2 / 2}px`);

    return (
      <div className="Block pos-abs" style={styles}>
        <div
          className="Block__side side--front pos-abs"
          style={{...sideStyles, transform: `rotateX(-90deg) rotateY(90deg) translateY(-${size / 2}px) translateZ(${size / 2}px)`}}
        >
          <div className="side--top-right pos-abs" style={{...sidePartStyles, backgroundPosition: frontTopRightPos}}/>
          <div className="side--bottom-right pos-abs" style={{...sidePartStyles, top: size / 2, backgroundPosition: frontBottomRightPos}}/>
          <div className="side--top-left pos-abs" style={{...sidePartStyles, left: size / 2, backgroundPosition: frontTopLeftPos}}/>
          <div className="side--bottom-left pos-abs" style={{...sidePartStyles, left: size / 2, top: size / 2, backgroundPosition: frontBottomLeftPos}}/>
        </div>
        <div
          className="Block__side side--back pos-abs"
          style={{...sideStyles, transform: `rotateY(90deg) rotateZ(-90deg) translateY(-${size / 2}px) translateZ(-${size / 2}px)`}}
        >
          <div className="side--top-right pos-abs" style={{...sidePartStyles, backgroundPosition: backTopRightPos}}/>
          <div className="side--bottom-right pos-abs" style={{...sidePartStyles, top: size / 2, backgroundPosition: backBottomRightPos}}/>
          <div className="side--top-left pos-abs" style={{...sidePartStyles, left: size / 2, backgroundPosition: backTopLeftPos}}/>
          <div className="side--bottom-left pos-abs" style={{...sidePartStyles, left: size / 2, top: size / 2, backgroundPosition: backBottomLeftPos}}/>
        </div>
        <div
          className="Block__side side--left pos-abs"
          style={{...sideStyles, transform: `rotateX(-90deg) rotateY(180deg) translateY(-${size / 2}px) translateZ(${size / 2}px)`}}
        >
          <div className="side--top-front pos-abs" style={{...sidePartStyles, backgroundPosition: leftTopFront}}/>
          <div className="side--bottom-front pos-abs" style={{...sidePartStyles, top: size / 2, backgroundPosition: leftBottomFront}}/>
          <div className="side--top-back pos-abs" style={{...sidePartStyles, left: size / 2, backgroundPosition: leftTopBack}}/>
          <div className="side--bottom-back pos-abs" style={{...sidePartStyles, left: size / 2, top: size / 2, backgroundPosition: leftBottomBack}}/>
        </div>
        <div
          className="Block__side side--right pos-abs"
          style={{...sideStyles, transform: `rotateX(-90deg) rotateY(180deg) translateY(-${size / 2}px) translateZ(-${size / 2}px)`}}
        >
          <div className="side--top-front pos-abs" style={{...sidePartStyles, backgroundPosition: rightTopFront}}/>
          <div className="side--bottom-front pos-abs" style={{...sidePartStyles, top: size / 2, backgroundPosition: rightBottomFront}}/>
          <div className="side--top-back pos-abs" style={{...sidePartStyles, left: size / 2, backgroundPosition: rightTopBack}}/>
          <div className="side--bottom-back pos-abs" style={{...sidePartStyles, left: size / 2, top: size / 2, backgroundPosition: rightBottomBack}}/>
        </div>
        <div
          className="Block__side side--top pos-abs"
          style={{...sideStyles, transform: `rotateZ(-90deg) translateZ(${size}px)`}}
        >
          <div className="side--front-right pos-abs" style={{...sidePartStyles, top: size / 2, backgroundPosition: topFrontRight}}/>
          <div className="side--back-right pos-abs" style={{...sidePartStyles, backgroundPosition: topBackRight}}/>
          <div className="side--front-left pos-abs" style={{...sidePartStyles, left: size / 2, top: size / 2, backgroundPosition: topFrontLeft}}/>
          <div className="side--back-left pos-abs" style={{...sidePartStyles, left: size / 2, backgroundPosition: topBackLeft}}/>
        </div>
        <div
          className="Block__side side--bottom pos-abs"
          style={{...sideStyles, backgroundImage: null, background: 'black'}}
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
