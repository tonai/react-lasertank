import React, { PureComponent } from 'react';
import { addIndex, map, pipe, unnest } from 'ramda';

import { addAdjacentProps, getBlock } from '../../../services/board';

import KeyControls from '../../Stateful/KeyControls/KeyControls';
import Player from '../../Stateful/Player/Player';

class Board extends PureComponent {

  /* Properties */

  board = [];
  componentsCounter = 0;
  player = null;

  addAdjacentProps = (table, z, board) => {
    return table.map((line, x) => {
      return line.map((cell, y) => {
        if (cell) {
          cell.props = {...cell.props, ...addAdjacentProps(board, x, y, z)};
        }
        return this.createComponent(cell, `${z}-${x}-${y}`);
      });
    });
  };

  addEmptyBlocks = (table) => {
    const { height, width } = this.props;
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        table[i] = table[i] || [];
        table[i][j] = table[i][j] || ['empty'];
      }
    }
    return table;
  };

  boardInit = (table, z) => {
    const { blocksSettings, size } = this.props;
    return table.map((line, x) =>
      line.map((cell, y) => {
        if (cell[0] === 'player') {
          this.player = cell;
          cell[0] = 'floor';
        }
        return getBlock(cell, blocksSettings, size, x, y, z)
      })
    );
  };

  createComponent = (cell, key) => {
    if (cell) {
      this.componentsCounter++;
      const Component = cell.component;
      return (<Component key={key} {...cell.props} ref={this.initComponent}/>);
    }
  };

  initComponent = (component) => {
    this.componentsCounter--;
    if (component.getWrappedInstance) {
      component = component.getWrappedInstance();
    }
    const { x, y, z } = component.props;
    this.board[z] = this.board[z] || [];
    this.board[z][x] = this.board[z][x] || [];
    this.board[z][x][y] = component;
    if (this.componentsCounter === 0) {
      this.props.onBoardLoaded(this.board);
    }
  };

  /* Methods */

  render() {
    const { size } = this.props;
    const board = pipe(
      map(this.addEmptyBlocks),
      addIndex(map)(this.boardInit),
      board => board.map(this.addAdjacentProps),
      unnest,
      unnest
    )(this.props.map);

    return (
      <div className="Board">
        {board}
        <Player settings={this.player[1]} size={size}/>
        <KeyControls/>
      </div>
    );
  }

}

export default Board;
