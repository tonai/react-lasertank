import React, { Component } from 'react';

import boardSettings from '../../settings/board';
import groundsSettings from '../../settings/grounds';

import map from '../../maps/test.json';

import Board from '../Stateless/Board/Board';
import Scene from '../Stateful/Scene/Scene';
import SpritesLoader from '../Stateful/SpritesLoader/SpritesLoader';
import SceneControls from '../Stateful/SceneControls/SceneControls';

class App extends Component {
  render() {
    const width = map.grounds.length;
    const height = map.grounds[0].length;

    return (
      <div className="App">
        <SpritesLoader settings={groundsSettings}>
          {settings => (
            <Scene
              width={width}
              height={height}
              size={boardSettings.size}
              styles={{top: 0, right: 0, bottom: 100, left: 0}}
            >
              <Board
                width={width}
                height={height}
                map={map}
                size={boardSettings.size}
                settings={settings}
              />
            </Scene>
          )}
        </SpritesLoader>
        <SceneControls styles={{right: 0, left: 0, bottom: 0, height: 100}}/>
      </div>
    );
  }
}

export default App;
