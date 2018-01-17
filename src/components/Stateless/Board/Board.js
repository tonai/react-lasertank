import React, { PureComponent } from 'react';
import { addIndex, map, pipe, unnest } from 'ramda';

class Board extends PureComponent {

  componentAround = (table, z, board) => {
    return table.map((line, x) => {
      return line.map((cell, y) => {
        if (cell) {
          cell.props.bottom = this.getComponentName(board, z - 1, x, y);
          cell.props.bottomBack = this.getComponentName(board, z - 1, x - 1, y);
          cell.props.bottomBackLeft = this.getComponentName(board, z - 1, x - 1, y - 1);
          cell.props.bottomBackRight = this.getComponentName(board, z - 1, x - 1, y + 1);
          cell.props.bottomFront = this.getComponentName(board, z - 1, x + 1, y);
          cell.props.bottomFrontLeft = this.getComponentName(board, z - 1, x + 1, y - 1);
          cell.props.bottomFrontRight = this.getComponentName(board, z - 1, x + 1, y + 1);
          cell.props.bottomLeft = this.getComponentName(board, z - 1, x, y - 1);
          cell.props.bottomRight = this.getComponentName(board, z - 1, x, y + 1);
          cell.props.top = this.getComponentName(board, z + 1, x, y);
          cell.props.topBack = this.getComponentName(board, z + 1, x - 1, y);
          cell.props.topBackLeft = this.getComponentName(board, z + 1, x - 1, y - 1);
          cell.props.topBackRight = this.getComponentName(board, z + 1, x - 1, y + 1);
          cell.props.topFront = this.getComponentName(board, z + 1, x + 1, y);
          cell.props.topFrontLeft = this.getComponentName(board, z + 1, x + 1, y - 1);
          cell.props.topFrontRight = this.getComponentName(board, z + 1, x + 1, y + 1);
          cell.props.topLeft = this.getComponentName(board, z + 1, x, y - 1);
          cell.props.topRight = this.getComponentName(board, z + 1, x, y + 1);
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
    if (cell) {
      const Component = cell.component;
      return (<Component {...cell.props}/>);
    }
  };

  componentPrepare = (table, z) => {
    const { settings, size } = this.props;
    return table.map((line, x) => {
      return line.map((cell, y) => {
        if (!cell || !cell[0] || !settings[cell[0]]) {
          return null;
        }
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
      addIndex(map)(this.componentPrepare),
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
