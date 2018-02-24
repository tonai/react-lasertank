import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import mathMod from 'ramda/es/mathMod';

import gameSettings from '../../../../settings/game';

import { handleBlockMoveRelative } from '../../../../redux/actions';
import { setTimeout } from '../../../../services/utils';

import Redirect from '../../../Stateless/Grounds/Redirect/Redirect';

class StatefulRedirect extends PureComponent {

  onMoveIn() {
    const { direction, handleBlockMoveRelative, x, y, z } = this.props;
    let deltaX = 0;
    let deltaY = 0;

    switch(mathMod(direction, 360)) {
      case 0:
        deltaX++;
        break;

      case 90:
        deltaY++;
        break;

      case 180:
        deltaX--;
        break;

      case 270:
        deltaY--;
        break;

      default:
    }

    setTimeout(gameSettings.transitionTimer)
      .then(() => handleBlockMoveRelative(x, y, z, deltaX, deltaY, 0));
  }

  render() {
    return (<Redirect {...this.props}/>);
  }

}

const mapDispatchToProps = (dispatch) => ({
  handleBlockMoveRelative: (...params) => dispatch(handleBlockMoveRelative(...params)),
});

export default connect(null,  mapDispatchToProps,  null,  {withRef: true})(StatefulRedirect);
