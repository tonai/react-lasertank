import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Finish from '../../../Stateless/Grounds/Finish/Finish';

class StatefulFinish extends PureComponent {

  onMoveIn() {
    console.log('Finish !');
  }

  render() {
    return (<Finish {...this.props}/>);
  }

}

export default connect(null, null, null, {withRef: true})(StatefulFinish);
