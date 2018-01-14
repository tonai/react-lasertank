import React, { Component } from 'react';
import { addIndex, map, pipe, unnest } from 'ramda';

class Board extends Component {

  componentAround = (line, x, grounds) => {
    const { width, height } = this.props;
    return line.map((cell, y) => {
      cell.props.back = (cell.props.x > 0 && cell.component === grounds[x - 1][y].component);
      cell.props.front = (cell.props.x < width - 1 && cell.component === grounds[x + 1][y].component);
      cell.props.left = (cell.props.y > 0 && cell.component === grounds[x][y - 1].component);
      cell.props.right = (cell.props.y < height - 1 && cell.component === grounds[x][y + 1].component);
      return cell;
    });
  };

  componentCreate = (cell) => {
    const Component = cell.component;
    return (<Component {...cell.props}/>);
  };

  componentPrepate = (line, x) => {
    const { settings, size } = this.props;
    return line.map((cell, y) => {
      const componentSettings = settings[cell[0]];
      return {
        component: componentSettings.component,
        props: {
          x,
          y,
          key: `${x}-${y}`,
          size,
          settings:
          componentSettings,
          styles: {transform: `translateX(${x * size}px) translateY(${y * size}px)`}
        }
      }
    });
  };

  render() {
    const grounds = pipe(
      addIndex(map)(this.componentPrepate),
      grounds => grounds.map(this.componentAround),
      unnest,
      map(this.componentCreate)
    )(this.props.map.grounds);

    return (
      <div className="Board">
        {grounds}
      </div>
    );
  }

}

export default Board;
