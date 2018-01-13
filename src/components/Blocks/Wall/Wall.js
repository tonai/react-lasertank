import React, { Component } from 'react';

import './Wall.css';

class Wall extends Component {
  render() {
    const styles = {
      transform: `translateX(${this.props.x * this.props.size}px) translateY(${this.props.y * this.props.size}px)`
    };

    const wallStyles = {
      width: this.props.size,
      height: this.props.size
    };

    return (
      <div className="Wall" style={styles}>
        <div className="Wall__side side--front" style={{...wallStyles, transform: `rotateY(-90deg) translateZ(-${this.props.size}px)`}}></div>
        <div className="Wall__side side--back" style={{...wallStyles, transform: 'rotateY(-90deg)'}}></div>
        <div className="Wall__side side--left" style={{...wallStyles, transform: 'rotateX(90deg)'}}></div>
        <div className="Wall__side side--right" style={{...wallStyles, transform: `rotateX(90deg) translateZ(-${this.props.size}px)`}}></div>
        <div className="Wall__side side--top" style={{...wallStyles, transform: `translateZ(${this.props.size}px)`}}></div>
        <div className="Wall__side side--bottom" style={wallStyles}></div>
      </div>
    );
  }
}


Wall.defaultProps = {
  x: 0,
  y: 0,
};

export default Wall;
