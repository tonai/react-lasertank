import { connect } from 'react-redux';

import { handlePlayerControlsUpdate } from '../../../../redux/actions';
import { addAdjacentProps } from '../../../../services/board';

import Floor from '../../../Stateless/Grounds/Floor/Floor';

const mapStateToProps = (state) => ({
  grounds: state.grounds
});

const mapDispatchToProps = (dispatch) => ({
  onMoveIn: () => dispatch(handlePlayerControlsUpdate())
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...dispatchProps,
  ...addAdjacentProps(stateProps.grounds, ownProps.x, ownProps.y, ownProps.z)
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps, {withRef: true})(Floor);
