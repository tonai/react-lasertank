import React, { Component } from 'react';

import './Board.css';

import blank from '../../assets/images/blank.png';

import Wall from '../Blocks/Wall/Wall';

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      containerWidth: null
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  initElement = (el) => {
    this.el = el;
    this.setState({containerWidth: this.el.offsetWidth});
  };

  resize = () => {
    this.setState({containerWidth: this.el.offsetWidth});
  };

  makeArray(from, to) {
    return Array.apply(null, new Array(to - from)).map(x => from++)
  }

  render() {
    const w = this.props.width * this.props.size;
    const h = this.props.height * this.props.size;
    const a = this.props.zAngle * Math.PI / 180;
    const max = Math.max(w, h);

    const x = max / (1 + 1 / Math.sin(a) + 1 / Math.tan(a));
    const z = x / Math.tan(a);

    const l = (max + 2 * z * Math.sin(a)) * this.props.scale;

    let boardSceneStyles = {
      width: `${max}px`,
      height: `${max}px`,
      backgroundColor: `rgba(0,0,0,0.5)`
    };
    if (this.state.containerWidth && l > this.state.containerWidth) {
      const max = Math.max(x, z) * this.props.scale;
      console.log(x, z, max);
      boardSceneStyles.top = 0;
      boardSceneStyles.left = 0;
      boardSceneStyles.transform = `rotateX(${this.props.xAngle}deg) rotateY(0deg) rotateZ(${a}rad) translateX(${max}px) translateZ(${2 * this.props.size * this.props.scale}px) scale3d(${this.props.scale}, ${this.props.scale}, ${this.props.scale})`;
      boardSceneStyles.marginTop = `${h * (this.props.scale - 1) / 2}px`;
      boardSceneStyles.marginLeft = `${w * (this.props.scale - 1) / 2}px`;
    } else {
      boardSceneStyles.top = `50%`;
      boardSceneStyles.left = `50%`;
      boardSceneStyles.marginTop = `${- max / 2}px`;
      boardSceneStyles.marginLeft = `${- max / 2}px`;
      boardSceneStyles.transform = `rotateX(${this.props.xAngle}deg) rotateY(0deg) rotateZ(${a}rad) translateX(0px) translateZ(${2 * this.props.size * this.props.scale}px) scale3d(${this.props.scale}, ${this.props.scale}, ${this.props.scale})`;
    }


    const boardInnerStyles = {
      width: `${w}px`,
      height: `${h}px`
    };

    const blocks = this.makeArray(0, this.props.width)
      .map(x =>
        this.makeArray(0, this.props.height).map(y =>
          <Wall key={x + '-' + y} x={x} y={y}/>
        )
      )
      .reduce((acc, arr) => acc.concat(arr), []);

    return (
      <div className="Board" ref={this.initElement}>
        <div className="Board__scene" style={boardSceneStyles}>
          <div className="Board__inner" style={boardInnerStyles}>
            {blocks}
          </div>
        </div>
        <div style={{position:'absolute',left:'50%', width:'2px',top:0,bottom:0,marginLeft:'-1px', backgroundColor:'rgba(255,0,0,0.5)'}}></div>
        <div style={{position:'absolute',top:'50%', height:'2px',left:0,right:0,marginTop:'-1px', backgroundColor:'rgba(255,0,0,0.5)'}}></div>
      </div>
    );
  }

}

export default Board;