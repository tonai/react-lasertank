import React, { Component } from 'react';

import './Floor.css';

class Floor extends Component {
  render() {
    const styles = {
      transform: `translateX(${this.props.x * this.props.size}px) translateY(${this.props.y * this.props.size}px)`
    };

    const floorStyles = {
      width: this.props.size,
      height: this.props.size
    };

    return (
      <div className="Floor" style={styles}>
        <div className="Floor__side side--front" style={{...floorStyles, transform: `rotateY(-90deg) translateZ(-${this.props.size}px)`}}></div>
        <div className="Floor__side side--back" style={{...floorStyles, transform: 'rotateY(-90deg)'}}></div>
        <div className="Floor__side side--left" style={{...floorStyles, transform: 'rotateX(90deg)'}}></div>
        <div className="Floor__side side--right" style={{...floorStyles, transform: `rotateX(90deg) translateZ(-${this.props.size}px)`}}></div>
        <div className="Floor__side side--top" style={{...floorStyles, transform: `translateZ(${this.props.size}px)`}}></div>
        <div className="Floor__side side--bottom" style={floorStyles}></div>
      </div>
    );
  }
}

Floor.defaultProps = {
  x: 0,
  y: 0,
};

export default Floor;
