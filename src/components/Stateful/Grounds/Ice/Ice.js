import { connect } from 'react-redux';

import gameSettings from '../../../../settings/game';

import { handlePlayerUpdateRelativePos } from '../../../../redux/actions';
import { addAdjacentProps } from '../../../../services/board';
import { setTimeout } from '../../../../services/utils';

import Floor from '../../../Stateless/Grounds/Floor/Floor';

const mapStateToProps = (state) => {
  return ({
    direction: state.player ? state.player.props.direction : 0,
    grounds: state.grounds
  });
};

const mapDispatchToProps = (dispatch) => ({
  onMoveIn: (prevProps, nextProps) => {
    let x = 0;
    let y = 0;

    if (nextProps.x > prevProps.x) {
      x = 1;
    } else if (nextProps.x < prevProps.x) {
      x = -1;
    }

    if (nextProps.y > prevProps.y) {
      y = 1;
    } else if (nextProps.y < prevProps.y) {
      y = -1;
    }

    setTimeout(gameSettings.transitionTimer)
      .then(() => dispatch(handlePlayerUpdateRelativePos(x, y, 0)));
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...dispatchProps,
  ...addAdjacentProps(stateProps.grounds, ownProps.x, ownProps.y, ownProps.z)
});

export default connect(mapStateToProps,  mapDispatchToProps,  mergeProps,  {withRef: true})(Floor);
