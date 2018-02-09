import React, { PureComponent } from 'react';

import BoardBlock from '../BoardBlock/BoardBlock';

class Player extends PureComponent {

  /* Methods */

  render() {
    const { size: L } = this.props;
    const l = L / Math.sqrt(2);

    const L16 = L / 6;
    const L26 = 2 * L16;
    const l13 = l / 3;
    const l23 = 2 * l13;
    const l16 = l / 6;
    const l110 = l / 10;
    const offsetMin = (L - l) / 2;

    const trackColor = 'rgba(0, 0, 0, 1)';
    const trackXSize = l - 4 * l110;
    const trackXSize2 = l - 2 * l110;
    const trackYSize = l16;
    const trackZSize = L16;
    const trackXMin = offsetMin + l110;
    const trackXMax = trackXMin + trackXSize2;
    const trackYMin1 = offsetMin + l16 / 2;
    const trackYMax1 = trackYMin1 + trackYSize;
    const trackYMin2 = offsetMin + l - l16 / 2 - trackYSize;
    const trackYMax2 = trackYMin2 + trackYSize;
    const trackZMin = 0;
    const trackZMax = trackZMin + trackZSize;
    const trackXDelta = (trackXSize2 - trackXSize) / 2;
    const trackFrontSize = Math.sqrt(trackXDelta * trackXDelta + trackZSize / 2 + trackZSize / 2);
    const trackFrontAngle = Math.atan(2 * trackXDelta / trackZSize) * 180 / Math.PI;

    const hullColor = 'rgba(0, 0, 255, 1)';
    const hullXSize = l;
    const hullXSize2 = l23;
    const hullYSize = l;
    const hullZSize = L26;
    const hullXMin = offsetMin;
    const hullXMax = hullXMin + hullXSize;
    const hullYMin = offsetMin;
    const hullYMax = hullYMin + hullYSize;
    const hullZMin = trackZSize;
    const hullZMax = hullZMin + hullZSize;
    const hullZMid = (hullZMin + hullZMax) / 2;
    const hullFront2Size = Math.sqrt(hullXSize2 / 2 * hullXSize2 / 2 + hullZSize / 2 * hullZSize / 2);
    const hullFront2Angle = Math.atan(hullXSize2 / hullZSize) * 180 / Math.PI;

    const turretColor = 'rgba(255, 0, 0, 1)';
    const turretXSize = l13;
    const turretYSize = l / 2;
    const turretZSize = L16;
    const turretXMin = offsetMin;
    const turretXMax = turretXMin + turretXSize;
    const turretYMin = offsetMin + l / 2 - turretYSize / 2;
    const turretYMax = turretYMin + turretYSize;
    const turretZMin = hullZMax;
    const turretZMax = turretZMin + turretZSize;

    const gunColor = 'rgba(0, 255, 0, 1)';
    const gunXSize = l - turretXSize;
    const gunYSize = l13;
    const gunYSize2 = l13 / 2;
    const gunZSize = L16 / 2;
    const gunXMin = offsetMin + turretXSize;
    const gunXMax = gunXMin + gunXSize;
    const gunYMin = offsetMin + l / 2 - gunYSize / 2;
    const gunYMax = gunYMin + gunYSize;
    const gunZMin = turretZMin + turretZSize / 2 - gunZSize / 2;
    const gunZMax = gunZMin + gunZSize;
    const gunYDelta = (gunYSize - gunYSize2) / 2;
    const gunSideSize = Math.sqrt(gunZSize * gunZSize + (gunYSize - gunYSize2) / 2 * (gunYSize - gunYSize2) / 2);
    const gunSideAngle = Math.atan((gunYSize - gunYSize2) / (2 * gunZSize)) * 180 / Math.PI;

    return (
      <div>
        <div className="player__track-1--left-1 pos-abs" style={{width: trackXSize, height: 0, borderSize: `0 ${trackXDelta}px ${trackZSize / 2}px`, borderColor: `${trackColor} transparent`, borderStyle: 'solid', transformOrigin: '0 0 0', transform: `translateX(${trackXMin}px) translateY(${trackYMin1}px) translateZ(${trackZMin}px) rotateX(90deg)`}}/>
        <div className="player__track-1--left-2 pos-abs" style={{width: trackXSize2, height: trackZSize / 2, backgroundColor: trackColor, transformOrigin: '0 0 0', transform: `translateX(${trackXMin}px) translateY(${trackYMin1}px) translateZ(${trackZMin + trackZSize / 2}px) rotateX(90deg)`}}/>
        <div className="player__track-1--right-1 pos-abs" style={{width: trackXSize, height: 0, borderSize: `0 ${trackXDelta}px ${trackZSize / 2}px`, borderColor: `${trackColor} transparent`, borderStyle: 'solid', transformOrigin: '0 0 0', transform: `translateX(${trackXMin}px) translateY(${trackYMax1}px) translateZ(${trackZMin}px) rotateX(90deg)`}}/>
        <div className="player__track-1--right-2 pos-abs" style={{width: trackXSize2, height: trackZSize / 2, backgroundColor: trackColor, transformOrigin: '0 0 0', transform: `translateX(${trackXMin}px) translateY(${trackYMax1}px) translateZ(${trackZMin + trackZSize / 2}px) rotateX(90deg)`}}/>
        <div className="player__track-1--back-1 pos-abs" style={{width: trackFrontSize, height: trackYSize, backgroundColor: trackColor, transformOrigin: '0 0 0', transform: `translateX(${trackXMin + trackXDelta}px) translateY(${trackYMin1}px) translateZ(${trackZMin}px) rotateY(${trackFrontAngle - 90}deg)`}}/>
        <div className="player__track-1--back-2 pos-abs" style={{width: trackZSize / 2, height: trackYSize, backgroundColor: trackColor, transformOrigin: '0 0 0', transform: `translateX(${trackXMin}px) translateY(${trackYMin1}px) translateZ(${trackZMin + trackZSize / 2}px) rotateY(-90deg)`}}/>
        <div className="player__track-1--front-1 pos-abs" style={{width: trackFrontSize, height: trackYSize, backgroundColor: trackColor, transformOrigin: '0 0 0', transform: `translateX(${trackXMax - trackXDelta}px) translateY(${trackYMin1}px) translateZ(${trackZMin}px) rotateY(${trackFrontAngle - 90}deg)`}}/>
        <div className="player__track-1--back-2 pos-abs" style={{width: trackZSize / 2, height: trackYSize, backgroundColor: trackColor, transformOrigin: '0 0 0', transform: `translateX(${trackXMax}px) translateY(${trackYMin1}px) translateZ(${trackZMin + trackZSize / 2}px) rotateY(-90deg)`}}/>

        <div className="player__track-2--left-1 pos-abs" style={{width: trackXSize, height: 0, borderSize: `0 ${trackXDelta}px ${trackZSize / 2}px`, borderColor: `${trackColor} transparent`, borderStyle: 'solid', transformOrigin: '0 0 0', transform: `translateX(${trackXMin}px) translateY(${trackYMin2}px) translateZ(${trackZMin}px) rotateX(90deg)`}}/>
        <div className="player__track-1--left-2 pos-abs" style={{width: trackXSize2, height: trackZSize / 2, backgroundColor: trackColor, transformOrigin: '0 0 0', transform: `translateX(${trackXMin}px) translateY(${trackYMin2}px) translateZ(${trackZMin + trackZSize / 2}px) rotateX(90deg)`}}/>
        <div className="player__track-2--right-1 pos-abs" style={{width: trackXSize, height: 0, borderSize: `0 ${trackXDelta}px ${trackZSize / 2}px`, borderColor: `${trackColor} transparent`, borderStyle: 'solid', transformOrigin: '0 0 0', transform: `translateX(${trackXMin}px) translateY(${trackYMax2}px) translateZ(${trackZMin}px) rotateX(90deg)`}}/>
        <div className="player__track-1--left-2 pos-abs" style={{width: trackXSize2, height: trackZSize / 2, backgroundColor: trackColor, transformOrigin: '0 0 0', transform: `translateX(${trackXMin}px) translateY(${trackYMax2}px) translateZ(${trackZMin + trackZSize / 2}px) rotateX(90deg)`}}/>
        <div className="player__track-1--back-1 pos-abs" style={{width: trackFrontSize, height: trackYSize, backgroundColor: trackColor, transformOrigin: '0 0 0', transform: `translateX(${trackXMin + trackXDelta}px) translateY(${trackYMin2}px) translateZ(${trackZMin}px) rotateY(${trackFrontAngle - 90}deg)`}}/>
        <div className="player__track-1--back-2 pos-abs" style={{width: trackZSize / 2, height: trackYSize, backgroundColor: trackColor, transformOrigin: '0 0 0', transform: `translateX(${trackXMin}px) translateY(${trackYMin2}px) translateZ(${trackZMin + trackZSize / 2}px) rotateY(-90deg)`}}/>
        <div className="player__track-1--back-1 pos-abs" style={{width: trackFrontSize, height: trackYSize, backgroundColor: trackColor, transformOrigin: '0 0 0', transform: `translateX(${trackXMax - trackXDelta}px) translateY(${trackYMin2}px) translateZ(${trackZMin}px) rotateY(${trackFrontAngle - 90}deg)`}}/>
        <div className="player__track-1--back-2 pos-abs" style={{width: trackZSize / 2, height: trackYSize, backgroundColor: trackColor, transformOrigin: '0 0 0', transform: `translateX(${trackXMax}px) translateY(${trackYMin2}px) translateZ(${trackZMin + trackZSize / 2}px) rotateY(-90deg)`}}/>

        <div className="player__hull--back pos-abs" style={{width: hullZSize, height: hullYSize, backgroundColor: hullColor, transformOrigin: '0 0 0', transform: `translateX(${hullXMin}px) translateY(${hullYMin}px) translateZ(${hullZMin}px) rotateY(-90deg)`}}/>
        <div className="player__hull--front-1 pos-abs" style={{width: hullZSize / 2, height: hullYSize, backgroundColor: hullColor, transformOrigin: '0 0 0', transform: `translateX(${hullXMax}px) translateY(${hullYMin}px) translateZ(${hullZMin}px) rotateY(-90deg)`}}/>
        <div className="player__hull--front-2 pos-abs" style={{width: hullFront2Size, height: hullYSize, backgroundColor: hullColor, transformOrigin: '0 0 0', transform: `translateX(${hullXMax}px) translateY(${hullYMin}px) translateZ(${hullZMid}px) rotateY(-${hullFront2Angle + 90}deg)`}}/>
        <div className="player__hull--left-1 pos-abs" style={{width: hullXSize, height: hullZSize / 2, backgroundColor: hullColor, transformOrigin: '0 0 0', transform: `translateX(${hullXMin}px) translateY(${hullYMin}px) translateZ(${hullZMin}px) rotateX(90deg)`}}/>
        <div className="player__hull--left-2 pos-abs" style={{width: hullXSize2, height: 0, borderSize: `${hullZSize / 2}px ${hullXSize - hullXSize2}px 0 0`, borderColor: `${hullColor} transparent`, borderStyle: 'solid', transformOrigin: '0 0 0', transform: `translateX(${hullXMin}px) translateY(${hullYMin}px) translateZ(${hullZMid}px) rotateX(90deg)`}}/>
        <div className="player__hull--right-1 pos-abs" style={{width: hullXSize, height: hullZSize / 2, backgroundColor: hullColor, transformOrigin: '0 0 0', transform: `translateX(${hullXMin}px) translateY(${hullYMax}px) translateZ(${hullZMin}px) rotateX(90deg)`}}/>
        <div className="player__hull--right-2 pos-abs" style={{width: hullXSize2, height: 0, borderSize: `${hullZSize / 2}px ${hullXSize - hullXSize2}px 0 0`, borderColor: `${hullColor} transparent`, borderStyle: 'solid', transformOrigin: '0 0 0', transform: `translateX(${hullXMin}px) translateY(${hullYMax}px) translateZ(${hullZMid}px) rotateX(90deg)`}}/>
        <div className="player__hull--bottom pos-abs" style={{width: hullXSize, height: hullYSize, backgroundColor: hullColor, transformOrigin: '0 0 0', transform: `translateX(${hullXMin}px) translateY(${hullYMin}px) translateZ(${hullZMin}px)`}}/>
        <div className="player__hull--top pos-abs" style={{width: hullXSize2, height: hullYSize, backgroundColor: hullColor, transformOrigin: '0 0 0', transform: `translateX(${hullXMin}px) translateY(${hullYMin}px) translateZ(${hullZMax}px)`}}/>

        <div className="player__turret--back pos-abs" style={{width: turretZSize, height: turretYSize, backgroundColor: turretColor, transformOrigin: '0 0 0', transform: `translateX(${turretXMin}px) translateY(${turretYMin}px) translateZ(${turretZMin}px) rotateY(-90deg)`}}/>
        <div className="player__turret--front pos-abs" style={{width: turretZSize, height: turretYSize, backgroundColor: turretColor, transformOrigin: '0 0 0', transform: `translateX(${turretXMax}px) translateY(${turretYMin}px) translateZ(${turretZMin}px) rotateY(-90deg)`}}/>
        <div className="player__turret--left pos-abs" style={{width: turretXSize, height: turretZSize, backgroundColor: turretColor, transformOrigin: '0 0 0', transform: `translateX(${turretXMin}px) translateY(${turretYMin}px) translateZ(${turretZMin}px) rotateX(90deg)`}}/>
        <div className="player__turret--right pos-abs" style={{width: turretXSize, height: turretZSize, backgroundColor: turretColor, transformOrigin: '0 0 0', transform: `translateX(${turretXMin}px) translateY(${turretYMax}px) translateZ(${turretZMin}px) rotateX(90deg)`}}/>
        <div className="player__turret--top pos-abs" style={{width: turretXSize, height: turretYSize, backgroundColor: turretColor, transformOrigin: '0 0 0', transform: `translateX(${turretXMin}px) translateY(${turretYMin}px) translateZ(${turretZMax}px)`}}/>

        <div className="player__gun--bottom pos-abs" style={{width: gunXSize, height: gunYSize, backgroundColor: gunColor, transformOrigin: '0 0 0', transform: `translateX(${gunXMin}px) translateY(${gunYMin}px) translateZ(${gunZMin}px)`}}/>
        <div className="player__gun--top pos-abs" style={{width: gunXSize, height: gunYSize2, backgroundColor: gunColor, transformOrigin: '0 0 0', transform: `translateX(${gunXMin}px) translateY(${(gunYMin + gunYMax) / 2 - gunYSize2 / 2}px) translateZ(${gunZMax}px)`}}/>
        <div className="player__gun--left pos-abs" style={{width: gunXSize, height: gunSideSize, backgroundColor: gunColor, transformOrigin: '0 0 0', transform: `translateX(${gunXMin}px) translateY(${gunYMin}px) translateZ(${gunZMin}px) rotateX(${90 - gunSideAngle}deg)`}}/>
        <div className="player__gun--left pos-abs" style={{width: gunXSize, height: gunSideSize, backgroundColor: gunColor, transformOrigin: '0 0 0', transform: `translateX(${gunXMin}px) translateY(${gunYMax}px) translateZ(${gunZMin}px) rotateX(${90 + gunSideAngle}deg)`}}/>
        <div className="player__gun--left pos-abs" style={{width: 0, height: gunYSize2, borderSize: `${gunYDelta}px 0 ${gunYDelta}px ${gunZSize}px`,borderColor: 'transparent black', borderStyle: 'solid', transformOrigin: '0 0 0', transform: `translateX(${gunXMax}px) translateY(${gunYMin}px) translateZ(${gunZMin}px) rotateY(-90deg)`}}/>
      </div>
    );
  }

}

export default BoardBlock(Player);
