import React, { PureComponent } from 'react';

import boardSettings from '../../settings/board';

import Board from '../Stateful/Board/Board';
import Scene from '../Stateful/Scene/Scene';
import SceneControls from '../Stateful/SceneControls/SceneControls';
import SpritesLoader from '../Stateful/SpritesLoader/SpritesLoader';

class App extends PureComponent {

  render() {
    return (
      <div className="App">
        <SpritesLoader>
          <Scene size={boardSettings.size} styles={{top: 0, right: 0, bottom: 100, left: 0}}>
            <Board size={boardSettings.size}/>
          </Scene>
        </SpritesLoader>
        <SceneControls styles={{right: 0, left: 0, bottom: 0, height: 100}}/>
      </div>
    );
  }

}

export default App;
