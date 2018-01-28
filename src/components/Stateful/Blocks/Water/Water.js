import { connect } from 'react-redux';

import { addAdjacentProps } from '../../../../services/board';

import Water from '../../../Stateless/Blocks/Water/Water';

const mapStateToProps = (state) => ({
  blocks: state.blocks
});

const mapDispatchToProps = () => ({
  onMoveOver: () => console.log('Plouf !')
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...dispatchProps,
  ...addAdjacentProps(stateProps.blocks, ownProps.x, ownProps.y, ownProps.z)
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps, {withRef: true})(Water);
