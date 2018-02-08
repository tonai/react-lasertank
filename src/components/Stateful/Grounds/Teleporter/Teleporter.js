import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import values from 'ramda/es/values';

import gameSettings from '../../../../settings/game';

import { handlePlayerControlsUpdate, handlePlayerUpdateProps } from '../../../../redux/actions';
import { setTimeout } from '../../../../services/utils';

import Teleporter from '../../../Stateless/Grounds/Teleporter/Teleporter';

class StatefulTeleporter extends PureComponent {

  onMoveIn() {
    const { grounds, handlePlayerControlsUpdate, handlePlayerUpdateProps, name, x, y, z } = this.props;
    const teleporter = values(grounds).find(ground =>
      ground.props.name === name && !(ground.props.x === x && ground.props.y === y && ground.props.z === z)
    );
    if (teleporter) {
      const { x, y, z } = teleporter.props;
      setTimeout(gameSettings.transitionTimer)
        .then(() => handlePlayerUpdateProps({active: false, opacity: 0}))
        .then(() => setTimeout(gameSettings.transitionTimer))
        .then(() => handlePlayerUpdateProps({x, y, z}))
        .then(() => setTimeout(gameSettings.transitionTimer))
        .then(() => handlePlayerUpdateProps({active: true, opacity: 1}))
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
  handlePlayerControlsUpdate: (...params) => dispatch(handlePlayerControlsUpdate(...params)),
  handlePlayerUpdateProps: (...params) => dispatch(handlePlayerUpdateProps(...params)),
});

export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(StatefulTeleporter);
