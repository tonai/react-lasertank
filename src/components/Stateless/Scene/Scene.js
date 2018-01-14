import React, { Component } from 'react';

import './Scene.css';

class Scene extends Component {

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

  modulo(value, modulo) {
    if (value > modulo) {
      return this.modulo(value - modulo, modulo);
    } else if (value < 0) {
      return this.modulo(value + modulo, modulo)
    }
    return value;
  }

  render() {
    const { scale, size, styles } = this.props;
    const width = this.props.width * this.props.size;
    const height = this.props.height * this.props.size;
    const containerWidth = this.state.containerWidth;
    const containerHeight = this.state.containerHeight;

    const a = this.props.zAngle * Math.PI / 180;
    const aModulo = this.modulo(a, Math.PI / 2);
    const b = this.props.xAngle * Math.PI / 180;
    const bModulo = this.modulo(b, Math.PI / 2);
    const max = Math.max(width, height);

    const x = max / (1 + 1 / Math.sin(aModulo) + 1 / Math.tan(aModulo));
    const l = x * Math.cos(aModulo);
    const L = l * 2 + max;
    const H = L * Math.cos(bModulo);

    const isWider = containerWidth && L * scale > containerWidth;
    const isHigher = containerHeight && H * scale > containerHeight;

    const sceneContainerStyles = {
      marginTop: 2 * size * scale * Math.cos(bModulo)
    };

    const sceneZoomStyles = {
      width: `${max}px`,
      height: `${max}px`,
      transform: `translateX(-50%) translateY(-50%) scale3d(${scale}, ${scale}, ${scale})`
    };

    const scene3dStyles = {
      width: `${max}px`,
      height: `${max}px`,
      backgroundColor: `rgba(0,0,0,0.5)`,
      transform: `rotateX(${b}rad) rotateZ(${a}rad)`
    };

    const sceneInnerStyles = {
      width: `${width}px`,
      height: `${height}px`
    };

    if (isWider) {
      scene3dStyles.left = l;
      sceneZoomStyles.marginLeft = max * scale / 2 - containerWidth / 2;
    }

    if (isHigher) {
      scene3dStyles.top = (H - max) / 2;
      sceneZoomStyles.marginTop = max * scale / 2 - containerHeight / 2;
    }

    return (
      <div className="Scene pos-abs" style={styles}>
        <div className="Scene__container pos-abs" style={sceneContainerStyles} ref={this.initElement}>
          <div className="Scene__zoom pos-abs" style={sceneZoomStyles}>
            <div className="Scene__3d pos-abs" style={scene3dStyles}>
              <div className="Scene__inner pos-abs" style={sceneInnerStyles}>
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Scene;