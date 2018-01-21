import { connect } from 'react-redux';

import { handlePlayerUpdated } from '../../../../redux/actions';

import Wall from '../../../Stateless/Blocks/Wall/Wall';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  onMoveOver: () => dispatch(handlePlayerUpdated())
});

export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(Wall);
