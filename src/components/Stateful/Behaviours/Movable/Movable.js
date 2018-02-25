import { getBlock } from '../../../../services/blocks';

export const movable = (Component) => class Movable extends Component {
  componentDidUpdate(prevProps) {
    const { x: x1, y: y1, z: z1 } = prevProps;
    const { active = 1, blocks, grounds, x: x2, y: y2, z: z2 } = this.props;
    if (active && !(x1 === x2 && y1 === y2 && z1 === z2)) {
      const block1 = getBlock(blocks, x1, y1, z1);
      const ground1 = getBlock(grounds, x1, y1, z1);
      if (block1 && block1.ref && block1.ref.onMoveOut) {
        block1.ref.onMoveOut(prevProps, this.props);
      } else if (ground1 && ground1.ref && ground1.ref.onMoveOut) {
        ground1.ref.onMoveOut(prevProps, this.props);
      }
      const block2 = getBlock(blocks, x2, y2, z2);
      const ground2 = getBlock(grounds, x2, y2, z2);
      if (block2 && block2.ref && block2.ref.onMoveIn) {
        block2.ref.onMoveIn(prevProps, this.props);
      } else if (ground2 && ground2.ref && ground2.ref.onMoveIn) {
        ground2.ref.onMoveIn(prevProps, this.props);
      }
    }
  }
};

export const movableMapStateToProps = (state) => ({
  blocks: state.blocks,
  grounds: state.grounds
});

export const movableMapDispatchToProps = () => ({});
