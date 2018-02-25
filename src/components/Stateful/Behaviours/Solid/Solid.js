import { handlePlayerControlsUpdate } from '../../../../redux/actions';

export const solid = (Component) => class Solid extends Component {
  onMoveIn() {
    const {handlePlayerControlsUpdate} = this.props;
    handlePlayerControlsUpdate();
  }
};

export const solidMapStateToProps = () => ({});

export const solidMapDispatchToProps = (dispatch) => ({
  handlePlayerControlsUpdate: (...params) => dispatch(handlePlayerControlsUpdate(...params)),
});
