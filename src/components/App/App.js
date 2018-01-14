import React, { Component } from 'react';

import boardSettings from '../../settings/board';
import groundsSettings from '../../settings/grounds';

import Board from '../Board/Board';
import Scene from '../Scene/Scene';
import SpritesLoader from '../SpritesLoader/SpritesLoader';

class App extends Component {
  render() {
    const width = 5;
    const height = 5;

    return (
      <div className="App">
        <SpritesLoader settings={groundsSettings}>
          {settings => (
            <Scene width={width} height={height} size={boardSettings.size} scale={1} xAngle={45} zAngle={45}>
              <Board width={width} height={height} size={boardSettings.size} settings={settings}/>
            </Scene>
          )}
        </SpritesLoader>
      </div>
    );
  }
}

export default App;
