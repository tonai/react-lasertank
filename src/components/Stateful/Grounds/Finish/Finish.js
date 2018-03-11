import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { handlePlayerWin } from '../../../../redux/actions';

import Finish from '../../../Stateless/Grounds/Finish/Finish';

class StatefulFinish extends PureComponent {

  onMoveIn(prevProps) {
    if (prevProps.originalName === 'player') {
      this.props.handlePlayerWin();
    }
  }

  render() {
    return (<Finish {...this.props}/>);
  }

}

const mapDispatchToProps = (dispatch) => ({
  handlePlayerWin: () => dispatch(handlePlayerWin()),
});

export default connect(null, mapDispatchToProps, null, {withRef: true})(StatefulFinish);
