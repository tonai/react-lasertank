import { connect } from 'react-redux';

import { addAdjacentProps } from '../../../../services/board';

import Door from '../../../Stateless/Blocks/Door/Door';

const mapStateToProps = (state) => ({
  blocks: state.blocks
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...dispatchProps,
  ...addAdjacentProps(stateProps.blocks, ownProps.x, ownProps.y, ownProps.z)
});

export default connect(mapStateToProps, null, mergeProps, {withRef: true})(Door);
