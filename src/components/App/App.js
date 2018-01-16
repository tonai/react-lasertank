import React, { Component } from 'react';
import { unnest } from 'ramda';

import boardSettings from '../../settings/board';
import groundsSettings from '../../settings/grounds';

import map from '../../maps/test.json';

import Board from '../Stateless/Board/Board';
import Scene from '../Stateful/Scene/Scene';
import SpritesLoader from '../Stateful/SpritesLoader/SpritesLoader';
import SceneControls from '../Stateful/SceneControls/SceneControls';

class App extends Component {

  maxLength(acc, array) {
    return Math.max(acc, array.length);
  }

  render() {
    const depth = map.length;
    const width = map.reduce(this.maxLength, 0);
    const height = unnest(map).reduce(this.maxLength, 0);
    console.log(depth, width, height);

    return (
      <div className="App">
        <SpritesLoader settings={groundsSettings}>
          {settings => (
            <Scene
              depth={depth}
              width={width}
              height={height}
              size={boardSettings.size}
              styles={{top: 0, right: 0, bottom: 100, left: 0}}
            >
              <Board
                depth={depth}
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
