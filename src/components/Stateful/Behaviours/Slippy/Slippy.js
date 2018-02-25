import gameSettings from '../../../../settings/game';
import { setTimeout } from '../../../../services/utils';
import { handleBlockMoveRelative } from '../../../../redux/actions';

export const slippy = (Component) =>  class Slippy extends Component {
  onMoveIn(prevProps, nextProps) {
    const { handleBlockMoveRelative, x, y, z } = this.props;
    let deltaX = 0;
    let deltaY = 0;

    if (nextProps.x > prevProps.x) {
      deltaX = 1;
    } else if (nextProps.x < prevProps.x) {
      deltaX = -1;
    }

    if (nextProps.y > prevProps.y) {
      deltaY = 1;
    } else if (nextProps.y < prevProps.y) {
      deltaY = -1;
    }

    setTimeout(gameSettings.transitionTimer)
      .then(() => handleBlockMoveRelative(x, y, z, deltaX, deltaY, 0));
  }
};

export const slippyMapStateToProps = () => ({});

export const slippyMapDispatchToProps = (dispatch) => ({
  handleBlockMoveRelative: (...params) => dispatch(handleBlockMoveRelative(...params)),
});
