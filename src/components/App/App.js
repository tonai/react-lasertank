import React, { Component } from 'react';

import Board from '../Scene/Scene';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board size={64} width={10} height={10} zAngle={45} xAngle={45} scale={1.1}/>
      </div>
    );
  }
}

export default App;
