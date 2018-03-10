import mathMod from 'ramda/es/mathMod';

export function getSidePoint(direction, point, props) {
  const { size, x, y } = props;
  switch (mathMod(direction, 360)) {
    case 0:
      return { point: { x: (x + 1) * size, y: y * size + size / 2, z: point.z } };
    case 90:
      return { point: { x: x * size + size / 2, y: (y + 1) * size, z: point.z } };
    case 180:
      return { point: { x: x * size, y: y * size + size / 2, z: point.z } };
    case 270:
      return { point: { x: x * size + size / 2, y: y * size, z: point.z } };
    default:
      return null;
  }
}

export function getMiddlePoint(direction, point, props) {
  const { size, x, y } = props;
  return { point: { x: x * size + size / 2, y: y * size + size / 2, z: point.z } };
}
