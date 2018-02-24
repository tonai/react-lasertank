import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import values from 'ramda/es/values';

import gameSettings from '../../../../settings/game';

import { handleBlockMove, handleBlockUpdateProps, handlePlayerControlsUpdate } from '../../../../redux/actions';
import { setTimeout } from '../../../../services/utils';

import Teleporter from '../../../Stateless/Grounds/Teleporter/Teleporter';

class StatefulTeleporter extends PureComponent {

  onMoveIn(prevProps, nextProps) {
    const { grounds, handleBlockMove, handleBlockUpdateProps, handlePlayerControlsUpdate, name, x, y, z } = this.props;
    const teleporter = values(grounds).find(ground =>
      ground.props.name === name && !(ground.props.x === x && ground.props.y === y && ground.props.z === z)
    );
    if (teleporter) {
      const { x: x1, y: y1, z: z1 } = nextProps;
      const { x: x2, y: y2, z: z2 } = teleporter.props;
      setTimeout(gameSettings.transitionTimer)
        .then(() => handleBlockUpdateProps(x1, y1, z1, {active: false, opacity: 0}))
        .then(() => setTimeout(gameSettings.transitionTimer))
        .then(() => handleBlockMove(x1, y1, z1, x2, y2, z2))
        .then(() => setTimeout(gameSettings.transitionTimer))
        .then(() => handleBlockUpdateProps(x2, y2, z2, {active: true, opacity: 1}))
        .then(() => setTimeout(gameSettings.transitionTimer))
        .then(() => handlePlayerControlsUpdate());
    } else {
      handlePlayerControlsUpdate();
    }
  }

  render() {
    return (<Teleporter {...this.props}/>);
  }

}

const mapStateToProps = (state) => ({
  grounds: state.grounds,
});

const mapDispatchToProps = (dispatch) => ({
  handleBlockMove: (...params) => dispatch(handleBlockMove(...params)),
  handleBlockUpdateProps: (...params) => dispatch(handleBlockUpdateProps(...params)),
  handlePlayerControlsUpdate: (...params) => dispatch(handlePlayerControlsUpdate(...params)),
});

export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(StatefulTeleporter);
