import { PureComponent } from 'react';
import { connect } from 'react-redux';
import addIndex from 'ramda/es/addIndex';
import filter from 'ramda/es/filter';
import map from 'ramda/es/map';
import pipe from 'ramda/es/pipe';
import unnest from 'ramda/es/unnest';
import values from 'ramda/es/values';

class SpritesLoader extends PureComponent {

  /* Properties */

  state = {
    isLoaded: false
  };

  loadBoardSprites = (board) => {
    const spriteSettings = pipe(
      values,
      map(block => block.props.sprites),
      filter(sprites => sprites && (sprites instanceof Object)),
      map(values),
      unnest
    )(board);
    const promises = spriteSettings.map(sprite => import(`../../../${sprite.path}`));

    return Promise.all(promises)
      .then(map(this.loadImage))
      .then(promises => Promise.all(promises))
      .then(addIndex(map)((image, index) => spriteSettings[index].image = image))
  };

  loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = src;
    });
  };

  /* Methods */

  componentDidMount() {
    const { blocks, grounds } = this.props;
    Promise.all([
      this.loadBoardSprites(blocks),
      this.loadBoardSprites(grounds)
    ]).then(() => this.setState({isLoaded: true}));
  }

  render() {
    if (this.state.isLoaded) {
      return this.props.children;
    }
    return null;
  }

}

const mapStateToProps = (state) => ({
  blocks: state.blocks,
  grounds: state.grounds
});

export default connect(mapStateToProps)(SpritesLoader);
