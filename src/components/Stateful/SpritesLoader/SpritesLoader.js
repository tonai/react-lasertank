import { PureComponent } from 'react';
import { connect } from 'react-redux';
import addIndex from 'ramda/es/addIndex';
import filter from 'ramda/es/filter';
import map from 'ramda/es/map';
import pipe from 'ramda/es/pipe';
import prop from 'ramda/es/prop';
import unnest from 'ramda/es/unnest';
import values from 'ramda/es/values';

import { handleSpritesLoaded } from '../../../redux/actions';

class SpritesLoader extends PureComponent {

  /* Methods */

  componentDidMount() {
    const { blocksSettings, onSpritesLoaded } = this.props;

    const spriteSettings = pipe(
      values,
      map(prop('sprites')),
      filter(sprites => sprites && (sprites instanceof Array)),
      unnest
    )(blocksSettings);
    const promises = spriteSettings.map(sprite => import(`../../../${sprite.path}`));

    Promise.all(promises)
      .then(map(this.loadImage))
      .then(promises => Promise.all(promises))
      .then(addIndex(map)((image, index) => spriteSettings[index].image = image))
      .then(() => onSpritesLoaded(blocksSettings));
  }

  loadImage(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = src;
    });
  }

  render() {
    if (this.props.spritesLoaded) {
      return this.props.children;
    }
    return null;
  }

}

const mapStateToProps = (state) => ({
  blocksSettings: state.blocksSettings,
  spritesLoaded: state.spritesLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onSpritesLoaded: (settings) => dispatch(handleSpritesLoaded(settings))
});

export default connect(mapStateToProps, mapDispatchToProps)(SpritesLoader);
