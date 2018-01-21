import { connect } from 'react-redux';

import { handlePlayerUpdated } from '../../../../redux/actions';

import Block from '../../../Stateless/Blocks/Block/Block';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  onMoveOver: () => dispatch(handlePlayerUpdated())
});

export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(Block);
