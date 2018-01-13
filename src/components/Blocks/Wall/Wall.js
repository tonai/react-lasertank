import React, { Component } from 'react';

import './Wall.css';

class Wall extends Component {
  render() {
    const styles = {
      transform: `translateX(${this.props.x * 64}px) translateY(${this.props.y * 64}px)`
    };

    return (
      <div className="Wall" style={styles}>
        <div className="Wall__side side--front"></div>
        <div className="Wall__side side--back"></div>
        <div className="Wall__side side--left"></div>
        <div className="Wall__side side--right"></div>
        <div className="Wall__side side--top"></div>
        <div className="Wall__side side--bottom"></div>
      </div>
    );
  }
}


Wall.defaultProps = {
  x: 0,
  y: 0,
};

export default Wall;
