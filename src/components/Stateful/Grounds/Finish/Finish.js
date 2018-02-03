import { connect } from 'react-redux';

import Finish from '../../../Stateless/Grounds/Finish/Finish';

const mapDispatchToProps = () => ({
  onMoveIn: () => console.log('Finish !')
});

export default connect(null, mapDispatchToProps, null, {withRef: true})(Finish);
