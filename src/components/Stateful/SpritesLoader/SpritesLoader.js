import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { mapObjIndexed, values } from 'ramda';

import { handleSpritesLoaded } from '../../../redux/actions';

class SpritesLoader extends PureComponent {

  /* Methods */

  componentDidMount() {
    const { blocksSettings, onSpritesLoaded } = this.props;
    const settings = mapObjIndexed(settings => ({...settings}))(blocksSettings);
    const settingsArray = values(settings).filter(block => block.spritePath);
    const promises = settingsArray.map(block => import(`../../../${block.spritePath}`));

    Promise.all(promises)
      .then(sources => sources.map((src, index) => settingsArray[index].spriteSrc = src))
      .then(() => settingsArray.map(settings => new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = reject;
        image.src = settings.spriteSrc;
      })))
      .then(promises => Promise.all(promises))
      .then(images => images.map((image, index) => settingsArray[index].spriteImage = image))
      .then(() => onSpritesLoaded(settings));
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
