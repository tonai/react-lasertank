import React, { PureComponent } from 'react';
import { addIndex, map, pipe, unnest } from 'ramda';

import { addAdjacentProps, getBlock } from '../../../services/board';

import KeyControls from '../../Stateful/KeyControls/KeyControls';

class Board extends PureComponent {

  addAdjacentProps = (table, z, board) => {
    return table.map((line, x) => {
      return line.map((cell, y) => {
        if (cell) {
          cell.props = {...cell.props, ...addAdjacentProps(board, x, y, z)};
        }
        return cell;
      });
    });
  };

  boardInit = (table, z) => {
    const { settings, size } = this.props;
    return table.map((line, x) =>
      line.map((cell, y) =>
        getBlock(cell, settings, size, x, y, z)
      )
    );
  };

  componentCreate = (cell) => {
    if (cell) {
      const Component = cell.component;
      return (<Component {...cell.props}/>);
    }
  };

  playerInit(board) {
    const { settings, size } = this.props;
    const { direction, x, y, z } = this.props.player;
    const block = getBlock(['player', {direction}], settings, size, x, y, z);
    block.props = {...block.props, ...addAdjacentProps(board, x, y, z)};
    return block;
  }

  render() {
    const board = pipe(
      addIndex(map)(this.boardInit),
      board => board.map(this.addAdjacentProps)
    )(this.props.map);
    const player = this.playerInit(board);

    const boardComponents = pipe(
      unnest,
      unnest,
      map(this.componentCreate)
    )(board);
    const playerComponent = this.componentCreate(player);

    return (
      <div className="Board">
        {boardComponents}
        {playerComponent}
        <KeyControls player={playerComponent}/>
      </div>
    );
  }

}

export default Board;
