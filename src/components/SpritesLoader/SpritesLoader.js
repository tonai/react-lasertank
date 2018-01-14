import { Component } from 'react';
import { mapObjIndexed, values } from 'ramda';

class SpritesLoader extends Component {

  state = {
    settings: null
  };

  componentDidMount() {
    const settings = mapObjIndexed(settings => ({...settings}))(this.props.settings);
    const settingsArray = values(settings);
    const promises = settingsArray.map(ground => import(`../../${ground.spritePath}`));
    Promise.all(promises)
      .then(sources => sources.forEach((src, index) => settingsArray[index].spriteSrc = src))
      .then(() => this.setState({settings}));
  }

  render() {
    return this.props.children && this.state.settings
      ? this.props.children(this.state.settings)
      : null;
  }

}

export default SpritesLoader;
