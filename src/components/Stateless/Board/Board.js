import React, { PureComponent } from 'react';
import mapObjIndexed from 'ramda/es/mapObjIndexed';
import map from 'ramda/es/map';
import pipe from 'ramda/es/pipe';
import sort from 'ramda/es/sort';
import values from 'ramda/es/values';

class Board extends PureComponent {

  /* Properties */

  blocksCounter = 0;
  blocksRef = {};
  groundsCounter = 0;
  groundsRef = {};
  initialized = false;
  resolveBlocksLoaded = null;
  resolveGroundsLoaded = null;

  createBlockComponent = (block) => {
    const Component = block.props.component;
    !block.ref && this.blocksCounter++;
    return block.ref
      ? (<Component {...block.props}/>)
      : (<Component {...block.props} ref={this.initBlocksComponent.bind(this, block)}/>);
  };

  createGroundComponent = (ground) => {
    const Component = ground.props.component;
    !ground.ref && this.groundsCounter++;
    return ground.ref
      ? (<Component {...ground.props}/>)
      : (<Component {...ground.props} ref={this.initGroundsComponent.bind(this, ground)}/>);
  };

  /* Methods */

  componentWillMount() {
    Promise.all([
      new Promise(resolve => this.resolveBlocksLoaded = resolve),
      new Promise(resolve => this.resolveGroundsLoaded = resolve),
    ]).then(this.props.onUpdateBoard);
  }

  componentDidMount() {
    this.initialized = true;
  }

  getBlocks() {
    return mapObjIndexed(
      (block, key) => ({...block, ref: this.blocksRef[key]})
    )({...this.props.blocks});
  }

  getGrounds() {
    return mapObjIndexed(
      (ground, key) => ({...ground, ref: this.groundsRef[key]})
    )({...this.props.grounds});
  }

  initBlocksComponent(block, component) {
    if (!component) {
      return;
    }
    this.blocksCounter--;
    if (component.getWrappedInstance) {
      component = component.getWrappedInstance();
    }
    this.blocksRef[block.props.key] = component;
    if (this.initialized) {
      this.props.onUpdateBlocks(this.getBlocks());
    } else if (this.blocksCounter === 0) {
      this.resolveBlocksLoaded(this.getBlocks());
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
    this.groundsRef[ground.props.key] = component;
    if (this.initialized) {
      this.props.onUpdateGrounds(this.getGrounds());
    } else if (this.groundsCounter === 0) {
      this.resolveGroundsLoaded(this.getGrounds());
    }
  }

  render() {
    const { blocks, grounds } = this.props;

    const blocksBoard = pipe(
      values,
      sort((a, b) => a.props.key === b.props.key ? 0 : Number(a.props.key > b.props.key)),
      map(this.createBlockComponent)
    )(blocks);

    const groundsBoard = pipe(
      values,
      map(this.createGroundComponent)
    )(grounds);

    return (
      <div className="Board">
        {blocksBoard}
        {groundsBoard}
      </div>
    );
  }

}

export default Board;
