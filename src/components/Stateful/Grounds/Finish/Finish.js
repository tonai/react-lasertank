import { connect } from 'react-redux';

import Finish from '../../../Stateless/Grounds/Finish/Finish';

const mapDispatchToProps = () => ({
  onMoveOver: () => console.log('Finish !')
});

export default connect(null, mapDispatchToProps, null, {withRef: true})(Finish);
