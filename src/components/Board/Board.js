import React, { Component } from 'react';

import Floor from '../Grounds/Floor/Floor';

class Board extends Component {

  makeArray(from, to) {
    return Array.apply(null, new Array(to - from)).map(() => from++)
  }

  render() {
    const { height, settings, size, width } = this.props;

    const blocks = this.makeArray(0, width)
      .map(x =>
        this.makeArray(0, height).map(y =>
          <Floor key={x + '-' + y} x={x} y={y} size={size} settings={settings.floor}/>
        )
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
