import React, { PureComponent } from 'react';
import mathMod from 'ramda/es/mathMod';

import './Scene.css';

class Scene extends PureComponent {

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

  render() {
    const { scale, size, styles } = this.props;
    const width = this.props.width * size;
    const height = this.props.height * size;
    const depth = this.props.depth * size;
    const containerWidth = this.state.containerWidth;
    const containerHeight = this.state.containerHeight;

    const a = this.props.zAngle * Math.PI / 180;
    const aMathMod = mathMod(a, Math.PI / 2);
    const b = this.props.xAngle * Math.PI / 180;
    const bMathMod = mathMod(b, Math.PI / 2);
    const max = Math.max(width, height);

    const x = max / (1 + 1 / Math.sin(aMathMod) + 1 / Math.tan(aMathMod));
    const l = x * Math.cos(aMathMod);
    const L = l * 2 + max;
    const H = L * Math.cos(bMathMod);
    const D = depth * Math.sin(bMathMod);

    const isWider = containerWidth && L * scale > containerWidth;
    const isHigher = containerHeight && (H / 2 + D + height / 2 - max / 2) * scale > containerHeight / 2;

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
      sceneZoomStyles.marginTop = D * scale + max * scale / 2 - containerHeight / 2;
    }

    return (
      <div className="Scene pos-abs" style={styles}>
        <div className="Scene__container pos-abs" ref={this.initElement}>
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