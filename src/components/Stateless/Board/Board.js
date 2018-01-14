import React, { Component } from 'react';

import data from './Board.json';

class Board extends Component {

  render() {
    const { settings, size } = this.props;

    const blocks = data.grounds
      .map((line, x) =>
        line.map((cell, y) => {
          const componentSettings = settings[cell[0]];
          const Component = componentSettings.component;
          return <Component key={x + '-' + y} x={x} y={y} size={size} settings={componentSettings}/>
        })
      )
      .reduce((acc, arr) => acc.concat(arr), []);

    return (
      <div className="Board">
        {blocks}
      </div>
    );
  }

}

export default Board;
