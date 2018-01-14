import React, { Component } from 'react';

import boardSettings from '../../settings/board';
import groundsSettings from '../../settings/grounds';

import Board from '../Stateless/Board/Board';
import Scene from '../Stateful/Scene/Scene';
import SpritesLoader from '../Stateful/SpritesLoader/SpritesLoader';
import SceneControls from '../Stateful/SceneControls/SceneControls';

class App extends Component {
  render() {
    const width = 5;
    const height = 5;

    return (
      <div className="App">
        <SpritesLoader settings={groundsSettings}>
          {settings => (
            <Scene
              width={width}
              height={height}
              size={boardSettings.size}
              scale={1}
              styles={{top: 0, right: 0, bottom: 100, left: 0}}
            >
              <Board size={boardSettings.size} settings={settings}/>
            </Scene>
          )}
        </SpritesLoader>
        <SceneControls styles={{right: 0, left: 0, bottom: 0, height: 100}}/>
      </div>
    );
  }
}

export default App;
