import React, { Component } from 'react';
import { connect } from 'react-redux';

import './SceneControls.css';

import { handleXAngleChange, handleZAngleChange } from '../../../redux/actions';

class SceneControls extends Component {

  render() {
    const { onXAngleChange, onZAngleChange, styles, xAngle, zAngle } = this.props;

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
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  xAngle: state.xAngle,
  zAngle: state.zAngle
});

const mapDispatchToProps = (dispatch) => ({
  onXAngleChange: event => dispatch(handleXAngleChange(+event.target.value)),
  onZAngleChange: event => dispatch(handleZAngleChange(+event.target.value))
});

export default connect(mapStateToProps , mapDispatchToProps)(SceneControls);
