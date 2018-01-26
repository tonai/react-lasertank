import React, { PureComponent } from 'react';
import { addIndex, map, pipe, unnest } from 'ramda';

import { addAdjacentProps, getBlock } from '../../../services/board';

import KeyControls from '../../Stateful/KeyControls/KeyControls';

class Board extends PureComponent {

  /* Properties */

  blocks = [];
  blocksCounter = 0;
  grounds = [];
  groundsCounter = 0;
  player = null;

  addAdjacentProps = (board) => {
    return board.map((table, z) => {
      return table.map((line, x) => {
        return line.map((cell, y) => {
          if (cell) {
            cell.props = {...cell.props, ...addAdjacentProps(board, x, y, z)};
          }
          return cell;
        });
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
        return getBlock(cell, blocksSettings, size, x, y, z)
      })
    );
  };

  createComponent = (cell, key, counter, refCallback) => {
    if (cell) {
      this[counter]++;
      const Component = cell.component;
      refCallback = cell.originalName === 'player'
        ? this.initPayerComponent
        : refCallback;
      return (<Component key={key} {...cell.props} ref={refCallback}/>);
    }
  };

  initBlocksComponent = (component) => {
    this.blocksCounter--;
    if (component.getWrappedInstance) {
      component = component.getWrappedInstance();
    }
    const { x, y, z } = component.props;
    this.blocks[z] = this.blocks[z] || [];
    this.blocks[z][x] = this.blocks[z][x] || [];
    this.blocks[z][x][y] = component;
    if (this.blocksCounter === 0) {
      this.props.onBlocksLoaded(this.blocks);
    }
  };

  initGroundsComponent = (component) => {
    this.groundsCounter--;
    if (component.getWrappedInstance) {
      component = component.getWrappedInstance();
    }
    const { x, y, z } = component.props;
    this.grounds[z] = this.grounds[z] || [];
    this.grounds[z][x] = this.grounds[z][x] || [];
    this.grounds[z][x][y] = component;
    if (this.groundsCounter === 0) {
      this.props.onGroundsLoaded(this.grounds);
    }
  };

  initPayerComponent = (component) => {
    this.initBlocksComponent(component);
    if (component.getWrappedInstance) {
      component = component.getWrappedInstance();
    }
    this.props.onPlayerLoaded(component);
  };

  /* Methods */

  createComponents(refCallback, counter, board) {
    return board.map((table, z) => {
      return table.map((line, x) => {
        return line.map((cell, y) => {
          return this.createComponent(cell, `${z}-${x}-${y}`, counter, refCallback);
        });
      });
    });
  }

  generateBoard(board, refCallback, counter) {
    return pipe(
      map(this.addEmptyBlocks),
      addIndex(map)(this.boardInit),
      this.addAdjacentProps,
      this.createComponents.bind(this, refCallback, counter),
      unnest,
      unnest
    )(board);
  }

  render() {
    const { blocks, grounds } = this.props;
    const blocksBoard = this.generateBoard(blocks, this.initBlocksComponent, 'blocksCounter');
    const groundsBoard = this.generateBoard(grounds, this.initGroundsComponent, 'groundsCounter');

    return (
      <div className="Board">
        {blocksBoard}
        {groundsBoard}
        <KeyControls/>
      </div>
    );
  }

}

export default Board;
