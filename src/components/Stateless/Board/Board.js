import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addIndex, map, pipe, unnest } from 'ramda';

import { addAdjacentProps, getBlock } from '../../../services/board';
import { handleBoardLoaded } from '../../../redux/actions';

import KeyControls from '../../Stateful/KeyControls/KeyControls';
import Player from '../../Stateful/Player/Player';

class Board extends PureComponent {

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

  boardInit = (table, z) => {
    const { blocksSettings, size } = this.props;
    return table.map((line, x) =>
      line.map((cell, y) =>
        getBlock(cell, blocksSettings, size, x, y, z)
      )
    );
  };

  createComponent = (cell, key) => {
    if (cell) {
      const Component = cell.component;
      return (<Component key={key} {...cell.props}/>);
    }
  };

  componentDidMount() {
    const board = pipe(
      addIndex(map)(this.boardInit),
      board => board.map(this.addAdjacentProps)
    )(this.props.map);
    this.props.onBoardLoaded(board);
  }

  render() {
    const { board, size } = this.props;
    if (board) {
      return (
        <div className="Board">
          {unnest(unnest(board))}
          <Player size={size}/>
          <KeyControls/>
        </div>
      );
    }
    return null;
  }

}

const mapStateToProps = (state) => ({
  blocksSettings: state.blocksSettings,
  board: state.board,
  map: state.map
});

const mapDispatchToProps = (dispatch) => ({
  onBoardLoaded: (board) => dispatch(handleBoardLoaded(board))
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
