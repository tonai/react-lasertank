import { connect } from 'react-redux';

import { handlePlayerUpdateRelativePos } from '../../../../redux/actions';
import gameSettings from '../../../../settings/game';
import { addAdjacentProps } from '../../../../services/board';

import Ice from '../../../Stateless/Grounds/Ice/Ice';

const mapStateToProps = (state) => {
  return ({
    direction: state.player ? state.player.props.direction : 0,
    grounds: state.grounds
  });
};

const mapDispatchToProps = (dispatch) => ({
  onMoveOver: (prevProps, nextProps) => {
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

    setTimeout(() => dispatch(handlePlayerUpdateRelativePos(x, y, 0)), gameSettings.transitionTimer);
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...dispatchProps,
  ...addAdjacentProps(stateProps.grounds, ownProps.x, ownProps.y, ownProps.z)
});

export default connect(mapStateToProps,  mapDispatchToProps,  mergeProps,  {withRef: true})(Ice);
