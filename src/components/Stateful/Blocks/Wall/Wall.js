import { connect } from 'react-redux';

import { addAdjacentProps } from '../../../../services/board';

import Wall from '../../../Stateless/Blocks/Wall/Wall';

const mapStateToProps = (state) => ({
  blocks: state.blocks
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  ...addAdjacentProps(stateProps.blocks, ownProps.x, ownProps.y, ownProps.z)
});

export default connect(mapStateToProps, null, mergeProps, {withRef: true})(Wall);
