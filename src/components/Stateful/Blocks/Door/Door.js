import { connect } from 'react-redux';

import Door from '../../../Stateless/Blocks/Door/Door';

const mapStateToProps = (state) => ({
  blocks: state.blocks
});

export default connect(mapStateToProps, null, null, {withRef: true})(Door);
