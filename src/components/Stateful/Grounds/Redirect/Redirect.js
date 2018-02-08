import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import mathMod from 'ramda/es/mathMod';

import gameSettings from '../../../../settings/game';

import { handlePlayerUpdateRelativePos } from '../../../../redux/actions';
import { setTimeout } from '../../../../services/utils';

import Redirect from '../../../Stateless/Grounds/Redirect/Redirect';

class StatefulRedirect extends PureComponent {

  onMoveIn() {
    const { direction, handlePlayerUpdateRelativePos } = this.props;
    let x = 0;
    let y = 0;

    switch(mathMod(direction, 360)) {
      case 0:
        x++;
        break;

      case 90:
        y++;
        break;

      case 180:
        x--;
        break;

      case 270:
        y--;
        break;

      default:
    }

    setTimeout(gameSettings.transitionTimer)
      .then(() => handlePlayerUpdateRelativePos(x, y, 0));
  }

  render() {
    return (<Redirect {...this.props}/>);
  }

}

const mapDispatchToProps = (dispatch) => ({
  handlePlayerUpdateRelativePos: (...params) => dispatch(handlePlayerUpdateRelativePos(...params)),
});

export default connect(null,  mapDispatchToProps,  null,  {withRef: true})(StatefulRedirect);
