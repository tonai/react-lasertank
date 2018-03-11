import React, { PureComponent } from 'react';
import mathMod from 'ramda/es/mathMod';

import { getColor } from '../../../../services/color';

import BoardBlock from '../../BoardBlock/BoardBlock';

class Player extends PureComponent {

  /* Properties */

  shootPoint = null;

  /* Methods */

  getShootPoint(gunX, gunY, gunZ) {
    const { direction, size, x, y, z } = this.props;
    switch (mathMod(direction, 360)) {
      case 0:
        return { x: x * size + gunX, y: y * size + gunY, z: z * size + gunZ };
      case 90:
        return { x: x * size + gunY, y: y * size + gunX, z: z * size + gunZ };
      case 180:
        return { x: (x + 1) * size - gunX, y: y * size + gunY, z: z * size + gunZ };
      case 270:
        return { x: x * size + gunY, y: (y + 1) * size - gunX, z: z * size + gunZ };
      default:
        return null;
    }
  }
  
  round(val) {
    return Math.ceil(val * 10 * 1.008) / 10;
  }

  render() {
    const { opacity = 1, size: L } = this.props;
    const l = L / Math.sqrt(2);

    const L16 = L / 6;
    const L26 = 2 * L16;
    const l13 = l / 3;
    const l23 = 2 * l13;
    const l16 = l / 6;
    const l110 = l / 10;
    const offsetMin = (L - l) / 2;

    const trackColor = getColor(0, 0, 10, 0.5);
    const trackXSize = this.round(l - 3 * l110);
    const trackXSize2 = this.round(l - 1 * l110);
    const trackXDelta = this.round((trackXSize2 - trackXSize) / 2);
    const trackYSize = this.round(l16);
    const trackZSize = this.round(L16);
    const trackZSize2 = this.round(trackZSize / 2);
    const trackXMin = offsetMin + l110 / 2;
    const trackXMin2 = trackXMin + trackXDelta;
    const trackXMax = trackXMin + trackXSize2;
    const trackXMax2 = trackXMax - trackXDelta;
    const trackYMin1 = offsetMin + l16 / 2;
    const trackYMax1 = trackYMin1 + trackYSize;
    const trackYMin2 = offsetMin + l - l16 / 2 - trackYSize;
    const trackYMax2 = trackYMin2 + trackYSize;
    const trackZMin = 0;
    const trackZMid = trackZMin + trackZSize2;
    const trackZMax = trackZMin + trackZSize;
    const trackFrontSize = this.round(Math.sqrt(trackXDelta * trackXDelta + trackZSize2 * trackZSize2));
    const trackFrontAngle = Math.atan(2 * trackXDelta / trackZSize) * 180 / Math.PI;

    const hullColor = getColor(0, 0, 30, 0.5);
    const hullXSize = this.round(l);
    const hullXSize2 = this.round(l23);
    const hullYSize = this.round(l);
    const hullYSize2 = this.round(l - l13);
    const hullZSize = this.round(L26);
    const hullZSize2 = this.round(hullZSize / 2);
    const hullXMin = offsetMin;
    const hullXMax = hullXMin + hullXSize;
    const hullYMin = offsetMin;
    const hullYMax = hullYMin + hullYSize;
    const hullZMin = trackZMax;
    const hullZMax = hullZMin + hullZSize;
    const hullZMid = (hullZMin + hullZMax) / 2;
    const hullXDelta = hullXSize - hullXSize2;
    const hullFront2Size = this.round(Math.sqrt(hullXSize2 / 2 * hullXSize2 / 2 + hullZSize / 2 * hullZSize / 2));
    const hullFront2Angle = Math.atan(hullXSize2 / hullZSize) * 180 / Math.PI;
    const hullYDelta =this.round( (hullYSize - hullYSize2) / 2);
    const hullSideSize = this.round(Math.sqrt(hullZSize / 2 * hullZSize / 2 + hullYDelta * hullYDelta));
    const hullSideAngle = Math.atan(2 * hullYDelta / hullZSize) * 180 / Math.PI;

    const turretColor = getColor(0, 0, 30, 0.5);
    const turretXSize = this.round(l13);
    const turretYSize = this.round(l / 2);
    const turretZSize = this.round(L16);
    const turretXMin = offsetMin + l110;
    const turretXMax = turretXMin + turretXSize;
    const turretYMin = offsetMin + l / 2 - turretYSize / 2;
    const turretYMax = turretYMin + turretYSize;
    const turretZMin = hullZMax;
    const turretZMax = turretZMin + turretZSize;

    const gunColor = getColor(0, 0, 50, 0.5);
    const gunXSize = this.round(l - turretXSize + l110);
    const gunYSize = this.round(l13);
    const gunYSize2 = this.round(l13 / 2);
    const gunZSize = this.round(L16 / 2);
    const gunXMin = offsetMin + turretXSize;
    const gunXMax = gunXMin + gunXSize;
    const gunYMin = offsetMin + l / 2 - gunYSize / 2;
    const gunYMax = gunYMin + gunYSize;
    const gunYMin2 = (gunYMin + gunYMax) / 2 - gunYSize2 / 2;
    const gunZMin = turretZMin + turretZSize / 2 - gunZSize / 2;
    const gunZMax = gunZMin + gunZSize;
    const gunYDelta = (gunYSize - gunYSize2) / 2;
    const gunSideSize = this.round(Math.sqrt(gunZSize * gunZSize + (gunYSize - gunYSize2) / 2 * (gunYSize - gunYSize2) / 2));
    const gunSideAngle = Math.atan((gunYSize - gunYSize2) / (2 * gunZSize)) * 180 / Math.PI;

    this.shootPoint = this.getShootPoint(gunXMax, gunYMin + gunYSize / 2, gunZMin);

    return (
      <div>
        <div className="player__track-1--left-1 pos-abs" style={{opacity, width: trackXSize, height: 0, borderWidth: `0 ${trackXDelta}px ${trackZSize2}px`, borderColor: `${trackColor(90)} transparent`, borderStyle: 'solid', transformOrigin: '0 0 0', transform: `translateX(${trackXMin}px) translateY(${trackYMin1}px) translateZ(${trackZMin}px) rotateX(90deg)`}}/>
        <div className="player__track-1--left-2 pos-abs" style={{opacity, width: trackXSize2, height: trackZSize2, backgroundColor: trackColor(90), transformOrigin: '0 0 0', transform: `translateX(${trackXMin}px) translateY(${trackYMin1}px) translateZ(${trackZMid}px) rotateX(90deg)`}}/>
        <div className="player__track-1--right-1 pos-abs" style={{opacity, width: trackXSize, height: 0, borderWidth: `0 ${trackXDelta}px ${trackZSize2}px`, borderColor: `${trackColor(90)} transparent`, borderStyle: 'solid', transformOrigin: '0 0 0', transform: `translateX(${trackXMin}px) translateY(${trackYMax1}px) translateZ(${trackZMin}px) rotateX(90deg)`}}/>
        <div className="player__track-1--right-2 pos-abs" style={{opacity, width: trackXSize2, height: trackZSize2, backgroundColor: trackColor(90), transformOrigin: '0 0 0', transform: `translateX(${trackXMin}px) translateY(${trackYMax1}px) translateZ(${trackZMid}px) rotateX(90deg)`}}/>
        <div className="player__track-1--back-1 pos-abs" style={{opacity, width: trackFrontSize, height: trackYSize, backgroundColor: trackColor(trackFrontAngle - 90), transformOrigin: '0 0 0', transform: `translateX(${trackXMin2}px) translateY(${trackYMin1}px) translateZ(${trackZMin}px) rotateY(${- 90 - trackFrontAngle}deg)`}}/>
        <div className="player__track-1--back-2 pos-abs" style={{opacity, width: trackZSize2, height: trackYSize, backgroundColor: trackColor(90), transformOrigin: '0 0 0', transform: `translateX(${trackXMin}px) translateY(${trackYMin1}px) translateZ(${trackZMid}px) rotateY(-90deg)`}}/>
        <div className="player__track-1--front-1 pos-abs" style={{opacity, width: trackFrontSize, height: trackYSize, backgroundColor: trackColor(trackFrontAngle - 90), transformOrigin: '0 0 0', transform: `translateX(${trackXMax2}px) translateY(${trackYMin1}px) translateZ(${trackZMin}px) rotateY(${- 90 + trackFrontAngle}deg)`}}/>
        <div className="player__track-1--front-2 pos-abs" style={{opacity, width: trackZSize2, height: trackYSize, backgroundColor: trackColor(90), transformOrigin: '0 0 0', transform: `translateX(${trackXMax}px) translateY(${trackYMin1}px) translateZ(${trackZMid}px) rotateY(-90deg)`}}/>
        <div className="player__track-1--bottom pos-abs" style={{opacity, width: trackXSize, height: trackYSize, backgroundColor: trackColor(0), transformOrigin: '0 0 0', transform: `translateX(${trackXMin2}px) translateY(${trackYMin1}px) translateZ(${trackZMin}px)`}}/>

        <div className="player__track-2--left-1 pos-abs" style={{opacity, width: trackXSize, height: 0, borderWidth: `0 ${trackXDelta}px ${trackZSize2}px`, borderColor: `${trackColor(90)} transparent`, borderStyle: 'solid', transformOrigin: '0 0 0', transform: `translateX(${trackXMin}px) translateY(${trackYMin2}px) translateZ(${trackZMin}px) rotateX(90deg)`}}/>
        <div className="player__track-2--left-2 pos-abs" style={{opacity, width: trackXSize2, height: trackZSize2, backgroundColor: trackColor(90), transformOrigin: '0 0 0', transform: `translateX(${trackXMin}px) translateY(${trackYMin2}px) translateZ(${trackZMid}px) rotateX(90deg)`}}/>
        <div className="player__track-2--right-1 pos-abs" style={{opacity, width: trackXSize, height: 0, borderWidth: `0 ${trackXDelta}px ${trackZSize2}px`, borderColor: `${trackColor(90)} transparent`, borderStyle: 'solid', transformOrigin: '0 0 0', transform: `translateX(${trackXMin}px) translateY(${trackYMax2}px) translateZ(${trackZMin}px) rotateX(90deg)`}}/>
        <div className="player__track-2--right-2 pos-abs" style={{opacity, width: trackXSize2, height: trackZSize2, backgroundColor: trackColor(90), transformOrigin: '0 0 0', transform: `translateX(${trackXMin}px) translateY(${trackYMax2}px) translateZ(${trackZMid}px) rotateX(90deg)`}}/>
        <div className="player__track-2--back-1 pos-abs" style={{opacity, width: trackFrontSize, height: trackYSize, backgroundColor: trackColor(trackFrontAngle - 90), transformOrigin: '0 0 0', transform: `translateX(${trackXMin2}px) translateY(${trackYMin2}px) translateZ(${trackZMin}px) rotateY(${-90 - trackFrontAngle}deg)`}}/>
        <div className="player__track-2--back-2 pos-abs" style={{opacity, width: trackZSize2, height: trackYSize, backgroundColor: trackColor(90), transformOrigin: '0 0 0', transform: `translateX(${trackXMin}px) translateY(${trackYMin2}px) translateZ(${trackZMid}px) rotateY(-90deg)`}}/>
        <div className="player__track-2--front-1 pos-abs" style={{opacity, width: trackFrontSize, height: trackYSize, backgroundColor: trackColor(trackFrontAngle - 90), transformOrigin: '0 0 0', transform: `translateX(${trackXMax2}px) translateY(${trackYMin2}px) translateZ(${trackZMin}px) rotateY(${-90 + trackFrontAngle}deg)`}}/>
        <div className="player__track-2--front-2 pos-abs" style={{opacity, width: trackZSize2, height: trackYSize, backgroundColor: trackColor(90), transformOrigin: '0 0 0', transform: `translateX(${trackXMax}px) translateY(${trackYMin2}px) translateZ(${trackZMid}px) rotateY(-90deg)`}}/>
        <div className="player__track-2--bottom pos-abs" style={{opacity, width: trackXSize, height: trackYSize, backgroundColor: trackColor(0), transformOrigin: '0 0 0', transform: `translateX(${trackXMin2}px) translateY(${trackYMin2}px) translateZ(${trackZMin}px)`}}/>

        <div className="player__hull--back pos-abs" style={{opacity, width: hullZSize2, height: hullYSize, backgroundColor: `${hullColor(90)}`, transformOrigin: '0 0 0', transform: `translateX(${hullXMin}px) translateY(${hullYMin}px) translateZ(${hullZMin}px) rotateY(-90deg)`}}/>
        <div className="player__hull--back2 pos-abs" style={{opacity, width: 0, height: hullYSize2, borderWidth: `${hullYDelta}px 0 ${hullYDelta}px ${hullZSize2}px `, borderColor: `transparent ${hullColor(90)}`, borderStyle: 'solid', transformOrigin: '0 0 0', transform: `translateX(${hullXMin}px) translateY(${hullYMin}px) translateZ(${hullZMid}px) rotateY(-90deg)`}}/>
        <div className="player__hull--front-1 pos-abs" style={{opacity, width: hullZSize2, height: hullYSize, backgroundColor: hullColor(90), transformOrigin: '0 0 0', transform: `translateX(${hullXMax}px) translateY(${hullYMin}px) translateZ(${hullZMin}px) rotateY(-90deg)`}}/>
        <div className="player__hull--front-2 pos-abs" style={{opacity, width: 0, height: hullYSize2, borderWidth: `${hullYDelta}px 0 ${hullYDelta}px ${hullFront2Size}px`, borderColor: `transparent ${hullColor(hullFront2Angle + 90)}`, borderStyle: 'solid', transformOrigin: '0 0 0', transform: `translateX(${hullXMax}px) translateY(${hullYMin}px) translateZ(${hullZMid}px) rotateY(${-hullFront2Angle - 90}deg)`}}/>
        <div className="player__hull--left-1 pos-abs" style={{opacity, width: hullXSize, height: hullZSize2, backgroundColor: hullColor(90), transformOrigin: '0 0 0', transform: `translateX(${hullXMin}px) translateY(${hullYMin}px) translateZ(${hullZMin}px) rotateX(90deg)`}}/>
        <div className="player__hull--left-2 pos-abs" style={{opacity, width: hullXSize2, height: 0, borderWidth: `${hullSideSize}px ${hullXDelta}px 0 0`, borderColor: `${hullColor(90 + hullSideAngle)} transparent`, borderStyle: 'solid', transformOrigin: '0 0 0', transform: `translateX(${hullXMin}px) translateY(${hullYMin}px) translateZ(${hullZMid}px) rotateX(${90 - hullSideAngle}deg)`}}/>
        <div className="player__hull--right-1 pos-abs" style={{opacity, width: hullXSize, height: hullZSize2, backgroundColor: hullColor(90), transformOrigin: '0 0 0', transform: `translateX(${hullXMin}px) translateY(${hullYMax}px) translateZ(${hullZMin}px) rotateX(90deg)`}}/>
        <div className="player__hull--right-2 pos-abs" style={{opacity, width: hullXSize2, height: 0, borderWidth: `${hullSideSize}px ${hullXDelta}px 0 0`, borderColor: `${hullColor(90 + hullSideAngle)} transparent`, borderStyle: 'solid', transformOrigin: '0 0 0', transform: `translateX(${hullXMin}px) translateY(${hullYMax}px) translateZ(${hullZMid}px) rotateX(${90 + hullSideAngle}deg)`}}/>
        <div className="player__hull--bottom pos-abs" style={{opacity, width: hullXSize, height: hullYSize, backgroundColor: hullColor(0), transformOrigin: '0 0 0', transform: `translateX(${hullXMin}px) translateY(${hullYMin}px) translateZ(${hullZMin}px)`}}/>
        <div className="player__hull--top pos-abs" style={{opacity, width: hullXSize2, height: hullYSize2, backgroundColor: hullColor(180), transformOrigin: '0 0 0', transform: `translateX(${hullXMin}px) translateY(${hullYMin + hullYDelta}px) translateZ(${hullZMax}px)`}}/>

        <div className="player__turret--back pos-abs" style={{opacity, width: turretZSize, height: turretYSize, backgroundColor: turretColor(90), transformOrigin: '0 0 0', transform: `translateX(${turretXMin}px) translateY(${turretYMin}px) translateZ(${turretZMin}px) rotateY(-90deg)`}}/>
        <div className="player__turret--front pos-abs" style={{opacity, width: turretZSize, height: turretYSize, backgroundColor: turretColor(90), transformOrigin: '0 0 0', transform: `translateX(${turretXMax}px) translateY(${turretYMin}px) translateZ(${turretZMin}px) rotateY(-90deg)`}}/>
        <div className="player__turret--left pos-abs" style={{opacity, width: turretXSize, height: turretZSize, backgroundColor: turretColor(90), transformOrigin: '0 0 0', transform: `translateX(${turretXMin}px) translateY(${turretYMin}px) translateZ(${turretZMin}px) rotateX(90deg)`}}/>
        <div className="player__turret--right pos-abs" style={{opacity, width: turretXSize, height: turretZSize, backgroundColor: turretColor(90), transformOrigin: '0 0 0', transform: `translateX(${turretXMin}px) translateY(${turretYMax}px) translateZ(${turretZMin}px) rotateX(90deg)`}}/>
        <div className="player__turret--top pos-abs" style={{opacity, width: turretXSize, height: turretYSize, backgroundColor: turretColor(180), transformOrigin: '0 0 0', transform: `translateX(${turretXMin}px) translateY(${turretYMin}px) translateZ(${turretZMax}px)`}}/>

        <div className="player__gun--bottom pos-abs" style={{opacity, width: gunXSize, height: gunYSize, backgroundColor: gunColor(0), transformOrigin: '0 0 0', transform: `translateX(${gunXMin}px) translateY(${gunYMin}px) translateZ(${gunZMin}px)`}}/>
        <div className="player__gun--top pos-abs" style={{opacity, width: gunXSize, height: gunYSize2, backgroundColor: gunColor(180), transformOrigin: '0 0 0', transform: `translateX(${gunXMin}px) translateY(${gunYMin2}px) translateZ(${gunZMax}px)`}}/>
        <div className="player__gun--left pos-abs" style={{opacity, width: gunXSize, height: gunSideSize, backgroundColor: gunColor(90 + gunSideAngle), transformOrigin: '0 0 0', transform: `translateX(${gunXMin}px) translateY(${gunYMin}px) translateZ(${gunZMin}px) rotateX(${90 - gunSideAngle}deg)`}}/>
        <div className="player__gun--right pos-abs" style={{opacity, width: gunXSize, height: gunSideSize, backgroundColor: gunColor(90 + gunSideAngle), transformOrigin: '0 0 0', transform: `translateX(${gunXMin}px) translateY(${gunYMax}px) translateZ(${gunZMin}px) rotateX(${90 + gunSideAngle}deg)`}}/>
        <div className="player__gun--front pos-abs" style={{opacity, width: 0, height: gunYSize2, borderWidth: `${gunYDelta}px 0 ${gunYDelta}px ${gunZSize}px`,borderColor: `transparent ${gunColor(0)}`, borderStyle: 'solid', transformOrigin: '0 0 0', transform: `translateX(${gunXMax}px) translateY(${gunYMin}px) translateZ(${gunZMin}px) rotateY(-90deg)`}}/>
      </div>
    );
  }

}

export default BoardBlock(Player);
