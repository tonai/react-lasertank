import React, { Component } from 'react';

import './Board.css';

import Wall from '../Blocks/Wall/Wall';

const scrollBarWidth = 25;

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      containerWidth: null,
      containerHeight: null
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
    this.setState({
      containerWidth: this.el.offsetWidth,
      containerHeight: this.el.offsetHeight
    });
  };

  resize = () => {
    this.setState({
      containerWidth: this.el.offsetWidth,
      containerHeight: this.el.offsetHeight
    });
  };

  makeArray(from, to) {
    return Array.apply(null, new Array(to - from)).map(() => from++)
  }

  render() {
    const size = this.props.size;
    const width = this.props.width * this.props.size;
    const height = this.props.height * this.props.size;
    const a = this.props.zAngle * Math.PI / 180;
    const b = this.props.xAngle * Math.PI / 180;
    const max = Math.max(width, height);

    const x = max / (1 + 1 / Math.sin(a) + 1 / Math.tan(a));
    const l = x * Math.cos(a);
    const L = l * 2 + max;
    const H = L * Math.cos(b);

    const isWider = this.state.containerWidth && L * this.props.scale > this.state.containerWidth;
    const isHigher = this.state.containerHeight && H * this.props.scale > this.state.containerHeight;
    const containerWidth = isHigher ? this.state.containerWidth - scrollBarWidth : this.state.containerWidth;
    const containerHeight = isWider ? this.state.containerHeight - scrollBarWidth : this.state.containerHeight;

    const boardZoomStyles = {
      position: 'absolute',
      width: `${max}px`,
      height: `${max}px`,
      transform: `translateX(-50%) translateY(-50%) scale3d(${this.props.scale}, ${this.props.scale}, ${this.props.scale})`,
      top: '50%',
      left: '50%'
    };

    const boardSceneStyles = {
      width: `${max}px`,
      height: `${max}px`,
      backgroundColor: `rgba(0,0,0,0.5)`,
      transform: `rotateX(${b}rad) rotateZ(${a}rad)`
    };

    const boardInnerStyles = {
      width: `${width}px`,
      height: `${height}px`
    };

    if (isWider) {
      boardSceneStyles.left = l;
      boardZoomStyles.marginLeft = max * this.props.scale / 2 - containerWidth / 2;
    }

    if (isHigher) {
      boardSceneStyles.top = (H - max) / 2;
      boardZoomStyles.marginTop = max * this.props.scale / 2 - containerHeight / 2;
    }

    const blocks = this.makeArray(0, this.props.width)
      .map(x =>
        this.makeArray(0, this.props.height).map(y =>
          <Wall key={x + '-' + y} x={x} y={y} size={size}/>
        )
      )
      .reduce((acc, arr) => acc.concat(arr), []);

    return (
      <div className="Board" ref={this.initElement}>
        <div className="Board__zoom" style={boardZoomStyles}>
          <div className="Board__scene" style={boardSceneStyles}>
            <div className="Board__inner" style={boardInnerStyles}>
              {blocks}
            </div>
          </div>
        </div>
        <div style={{position:'absolute',left:'50%', width:'2px',top:0,bottom:0,marginLeft:'-1px', backgroundColor:'rgba(255,0,0,0.5)'}}></div>
        <div style={{position:'absolute',top:'50%', height:'2px',left:0,right:0,marginTop:'-1px', backgroundColor:'rgba(255,0,0,0.5)'}}></div>
      </div>
    );
  }

}

export default Board;