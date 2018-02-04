import { connect } from 'react-redux';
import values from 'ramda/es/values';

import gameSettings from '../../../../settings/game';

import { handlePlayerControlsUpdate, handlePlayerUpdateProps } from '../../../../redux/actions';
import { addAdjacentProps } from '../../../../services/board';
import { setTimeout } from '../../../../services/utils';

import Teleporter from '../../../Stateless/Grounds/Teleporter/Teleporter';

const mapStateToProps = (state) => ({
  grounds: state.grounds
});

const mapDispatchToProps = (dispatch) => ({
  onMoveIn: (grounds, x, y, z, name) => {
    const teleporter = values(grounds).find(ground =>
      ground.props.name === name && !(ground.props.x === x && ground.props.y === y && ground.props.z === z)
    );
    if (teleporter) {
      const { x, y, z } = teleporter.props;
      setTimeout(gameSettings.transitionTimer)
        .then(() => dispatch(handlePlayerUpdateProps({active: false, opacity: 0})))
        .then(() => setTimeout(gameSettings.transitionTimer))
        .then(() => dispatch(handlePlayerUpdateProps({x, y, z})))
        .then(() => setTimeout(gameSettings.transitionTimer))
        .then(() => dispatch(handlePlayerUpdateProps({active: true, opacity: 1})))
        .then(() => setTimeout(gameSettings.transitionTimer))
        .then(() => dispatch(handlePlayerControlsUpdate()));
    } else {
      dispatch(handlePlayerControlsUpdate());
    }
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...dispatchProps,
  ...addAdjacentProps(stateProps.grounds, ownProps.x, ownProps.y, ownProps.z),
  onMoveIn: () => dispatchProps.onMoveIn(stateProps.grounds, ownProps.x, ownProps.y, ownProps.z, ownProps.name)
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps, {withRef: true})(Teleporter);
