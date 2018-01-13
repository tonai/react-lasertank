import React, { Component } from 'react';

import Board from '../Board/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board size={64} width={10} height={15} zAngle={45} xAngle={240} scale={1}/>
      </div>
    );
  }
}

export default App;
