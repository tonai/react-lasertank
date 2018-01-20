import { PureComponent } from 'react';
import { mapObjIndexed, values } from 'ramda';

class SpritesLoader extends PureComponent {

  state = {
    settings: null
  };

  componentDidMount() {
    const settings = mapObjIndexed(settings => ({...settings}))(this.props.settings);
    const settingsArray = values(settings);
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
      .then(() => this.setState({settings}));
  }

  render() {
    return this.props.children && this.state.settings
      ? this.props.children(this.state.settings)
      : null;
  }

}

export default SpritesLoader;
