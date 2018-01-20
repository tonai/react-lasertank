import mathMod from 'ramda/es/mathMod';

export function getPlayerOnKeyUp(player) {
  const direction = mathMod(player.direction, 360);
  switch (direction) {
    case 0:
      if (player.front || !player.bottomFront) {
        return player;
      }
      return {...player, x: player.x + 1};

    case 180:
      if (player.back || !player.bottomBack) {
        return player;
      }
      return {...player, x: player.x - 1};

    case 90:
      if (player.right || !player.bottomRight) {
        return player;
      }
      return {...player, y: player.y + 1};

    case 270:
      if (player.left || !player.bottomLeft) {
        return player;
      }
      return {...player, y: player.y - 1};

    default:
  }
}

export function getPlayerOnKeyDown(player) {
  const direction = mathMod(player.direction, 360);
  switch (direction) {
    case 0:
      if (player.back || !player.bottomBack) {
        return player;
      }
      return {...player, x: player.x - 1};

    case 180:
      if (player.front || !player.bottomFront) {
        return player;
      }
      return {...player, x: player.x + 1};

    case 90:
      if (player.left || !player.bottomLeft) {
        return player;
      }
      return {...player, y: player.y - 1};

    case 270:
      if (player.right || !player.bottomRight) {
        return player;
      }
      return {...player, y: player.y + 1};

    default:
  }
}

export function getPlayerOnKeyLeft(player) {
  const direction = mathMod(player.direction, 360);
  return {...player, direction: direction - 90};
}

export function getPlayerOnKeyRight(player) {
  const direction = mathMod(player.direction, 360);
  return {...player, direction: direction + 90};
}
