import React, { PureComponent } from 'react';

class Empty extends PureComponent {

  render() {
    const { settings, size, styles } = this.props;

    const sideStyles = {
      width: size,
      height: size,
      backgroundColor: 'rgba(0, 100, 255, 0.5)'
    };

    return (
      <div className="Empty pos-abs" style={styles}>
        <div
          className="Empty__side side--bottom pos-abs"
          style={{...sideStyles, ...settings.bottomStyles, backgroundImage: `url(${settings.spriteSrc})`}}
        />
      </div>
    );
  }

}

Empty.defaultProps = {
  x: 0,
  y: 0,
};

export default Empty;
