import React, { PureComponent } from 'react';

import Shoot from '../Shoot/Shoot';

export default class ShootArea extends PureComponent {

  render() {
    const { surfaces } = this.props;
    return (
      <div className="ShootArea">
        {surfaces.map((surface, key) => (<Shoot key={key} {...surface}/>))}
      </div>
    );
  }

}
