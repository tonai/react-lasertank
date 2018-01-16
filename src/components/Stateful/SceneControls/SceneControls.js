import React, { Component } from 'react';
import { connect } from 'react-redux';

import './SceneControls.css';

import { handleXAngleChange, handleZAngleChange, handleZoomChange } from '../../../redux/actions';

class SceneControls extends Component {

  render() {
    const { onXAngleChange, onZAngleChange, onZoomChange, styles, xAngle, zAngle, zoom } = this.props;

    return (
      <div className="SceneControls" style={styles}>
        <label>
          X angle :
          <input type="range" min="0" max="90" step="1" onChange={onXAngleChange} value={xAngle} />
        </label>
        <label>
          Z angle :
          <input type="range" min="0" max="360" step="1" onChange={onZAngleChange} value={zAngle} />
        </label>
        <label>
          Zoom :
          <input type="range" min="0.5" max="2" step="0.1" onChange={onZoomChange} value={zoom} />
        </label>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  xAngle: state.xAngle,
  zAngle: state.zAngle,
  zoom: state.zoom
});

const mapDispatchToProps = (dispatch) => ({
  onXAngleChange: event => dispatch(handleXAngleChange(+event.target.value)),
  onZAngleChange: event => dispatch(handleZAngleChange(+event.target.value)),
  onZoomChange: event => dispatch(handleZoomChange(+event.target.value))
});

export default connect(mapStateToProps , mapDispatchToProps)(SceneControls);
