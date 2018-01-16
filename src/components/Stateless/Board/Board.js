import React, { Component } from 'react';
import { addIndex, map, pipe, unnest } from 'ramda';

class Board extends Component {

  componentAround = (table, z, board) => {
    return table.map((line, x) => {
      return line.map((cell, y) => {
        if (cell.component) {
          cell.props.bottom = this.getComponentName(board, z - 1, 1, y);
          cell.props.top = this.getComponentName(board, z + 1, x, y);
          cell.props.back = this.getComponentName(board, z, x - 1, y);
          cell.props.backLeft = this.getComponentName(board, z, x - 1, y - 1);
          cell.props.backRight = this.getComponentName(board, z, x - 1, y + 1);
          cell.props.front = this.getComponentName(board, z, x + 1, y);
          cell.props.frontLeft = this.getComponentName(board, z, x + 1, y - 1);
          cell.props.frontRight = this.getComponentName(board, z, x + 1, y + 1);
          cell.props.left = this.getComponentName(board, z, x, y - 1);
          cell.props.right = this.getComponentName(board, z, x, y + 1);
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
            name: cell[0],
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

  getComponentName(board, z, x, y) {
    return board[z] && board[z][x] && board[z][x][y] && board[z][x][y].props.name;
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
