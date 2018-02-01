import React, { PureComponent } from 'react';
import map from 'ramda/es/map';
import pipe from 'ramda/es/pipe';
import values from 'ramda/es/values';

class Board extends PureComponent {

  /* Properties */

  blocksCounter = 0;
  groundsCounter = 0;
  resolveBlocksLoaded = null;
  resolveGroundsLoaded = null;
  resolvePlayerLoaded = null;

  createBlockComponent = (block) => {
    this.blocksCounter++;
    const Component = block.props.component;
    return block.ref
      ? (<Component {...block.props}/>)
      : (<Component {...block.props} ref={this.initBlocksComponent.bind(this, block)}/>);
  };

  createGroundComponent = (ground) => {
    this.groundsCounter++;
    const Component = ground.props.component;
    return ground.ref
      ? (<Component {...ground.props}/>)
      : (<Component {...ground.props} ref={this.initGroundsComponent.bind(this, ground)}/>);
  };

  createPlayerComponent = (player) => {
    const Component = player.props.component;
    return player.ref
      ? (<Component {...player.props}/>)
      : (<Component {...player.props} ref={this.initPlayerComponent.bind(this, player)}/>);
  };

  /* Methods */

  componentWillMount() {
    this.blocks = {...this.props.blocks};
    this.grounds = {...this.props.grounds};
    this.player = this.props.player;

    Promise.all([
      new Promise(resolve => this.resolveBlocksLoaded = resolve),
      new Promise(resolve => this.resolveGroundsLoaded = resolve),
      new Promise(resolve => this.resolvePlayerLoaded = resolve)
    ]).then(this.props.onBoardLoaded);
  }

  initBlocksComponent(block, component) {
    if (!component) {
      return;
    }
    this.blocksCounter--;
    if (component.getWrappedInstance) {
      component = component.getWrappedInstance();
    }
    this.blocks[block.props.key] = {
      ...this.blocks[block.props.key],
      ref: component
    };
    if (this.blocksCounter === 0) {
      this.resolveBlocksLoaded(this.blocks);
    }
  }

  initGroundsComponent(ground, component) {
    if (!component) {
      return;
    }
    this.groundsCounter--;
    if (component.getWrappedInstance) {
      component = component.getWrappedInstance();
    }
    this.grounds[ground.props.key] = {
      ...this.grounds[ground.props.key],
      ref: component
    };
    if (this.groundsCounter === 0) {
      this.resolveGroundsLoaded(this.grounds);
    }
  }

  initPlayerComponent(player, component) {
    if (!component) {
      return;
    }
    if (component.getWrappedInstance) {
      component = component.getWrappedInstance();
    }
    this.player = {
      ...player,
      ref: component
    };
    this.resolvePlayerLoaded(this.player);
  }

  render() {
    const { blocks, grounds, player } = this.props;

    const blocksBoard = pipe(
      values,
      map(this.createBlockComponent)
    )(blocks);

    const groundsBoard = pipe(
      values,
      map(this.createGroundComponent)
    )(grounds);

    const playerBoard = this.createPlayerComponent(player);

    return (
      <div className="Board">
        {blocksBoard}
        {groundsBoard}
        {playerBoard}
      </div>
    );
  }

}

export default Board;
