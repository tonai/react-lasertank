import React, { Component } from 'react';
import { addIndex, map, pipe, unnest } from 'ramda';

class Board extends Component {

  componentAround = (table, z, board) => {
    const { depth, height, width } = this.props;
    return table.map((line, x) => {
      return line.map((cell, y) => {
        if (cell.component) {
          cell.props.bottom = (cell.props.z > 0 && this.isSameComponent(board, cell, z - 1, 1, y));
          cell.props.top = (cell.props.z < depth - 1 && this.isSameComponent(board, cell, z + 1, x, y));
          cell.props.back = (cell.props.x > 0 && this.isSameComponent(board, cell, z, x - 1, y));
          cell.props.backLeft = (cell.props.x > 0 && cell.props.y > 0 && this.isSameComponent(board, cell, z, x - 1, y - 1));
          cell.props.backRight = (cell.props.x > 0 && cell.props.y < height - 1 && this.isSameComponent(board, cell, z, x - 1, y + 1));
          cell.props.front = (cell.props.x < width - 1 && this.isSameComponent(board, cell, z, x + 1, y));
          cell.props.frontLeft = (cell.props.x < width - 1 && cell.props.y > 0 && this.isSameComponent(board, cell, z, x + 1, y - 1));
          cell.props.frontRight = (cell.props.x < width - 1 && cell.props.y < height - 1 && this.isSameComponent(board, cell, z, x + 1, y + 1));
          cell.props.left = (cell.props.y > 0 && this.isSameComponent(board, cell, z, x, y - 1));
          cell.props.right = (cell.props.y < height - 1 && this.isSameComponent(board, cell, z, x, y + 1));
        }
        return cell;
      });
    });
  };

  componentCreate = (cell) => {
    if (cell.component) {
      const Component = cell.component;
      return (<Component {...cell.props}/>);
    }
  };

  componentPrepate = (table, z) => {
    const { settings, size } = this.props;
    return table.map((line, x) => {
      return line.map((cell, y) => {
        const componentSettings = settings[cell[0]];
        return {
          component: componentSettings && componentSettings.component,
          props: {
            x,
            y,
            z,
            key: `${z}-${x}-${y}`,
            size,
            settings:
            componentSettings,
            styles: {transform: `translateX(${x * size}px) translateY(${y * size}px) translateZ(${z * size}px)`}
          }
        }
      });
    });
  };

  isSameComponent(board, cell, z, x, y) {
    return board[z] && board[z][x] && board[z][x][y] && cell.component === board[z][x][y].component;
  }

  render() {
    const board = pipe(
      addIndex(map)(this.componentPrepate),
      board => board.map(this.componentAround),
      unnest,
      unnest,
      map(this.componentCreate)
    )(this.props.map);

    return (
      <div className="Board">
        {board}
      </div>
    );
  }

}

export default Board;
