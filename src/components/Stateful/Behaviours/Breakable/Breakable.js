import gameSettings from '../../../../settings/game';
import { setTimeout } from '../../../../services/utils';
import { handleGroundRemove, handleGroundUpdateProps } from '../../../../redux/actions';

export const breakable = (Component) =>  class Breakable extends Component {
  onMoveOut(prevProps) {
    const { handleGroundRemove, handleGroundUpdateProps } = this.props;
    const { x, y, z } = prevProps;
    handleGroundUpdateProps(x, y, z, {opacity: 0});
    setTimeout(gameSettings.transitionTimer)
      .then(() => handleGroundRemove(x, y, z));
  }
};

export const breakableMapStateToProps = () => ({});

export const breakableMapDispatchToProps = (dispatch) => ({
  handleGroundRemove: (...params) => dispatch(handleGroundRemove(...params)),
  handleGroundUpdateProps: (...params) => dispatch(handleGroundUpdateProps(...params)),
});

