import values from 'ramda/es/values';

const spritesData = {};

function getCacheKey(sprite) {
  const { path, offset, type } = sprite;
  const [ x, y ] = offset;
  return `${path}-${type}-${x}-${y}`;
}

function loadTopTextureData(sprite) {
  const { image, offset } = sprite;
  const { width, height } = image;
  const [ x, y ] = offset;
  const cacheKey = getCacheKey(sprite);

  if (!spritesData[cacheKey]) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);

    spritesData[cacheKey] = {
      top_0_0: context.getImageData(x, 32 + y, 16, 16),
      top_0_1: context.getImageData(16 + x, 32 + y, 16, 16),
      top_0_2: context.getImageData(32 + x, 32 + y, 16, 16),
      top_0_3: context.getImageData(48 + x, 32 + y, 16, 16),
      top_1_0: context.getImageData(x, 48 + y, 16, 16),
      top_1_1: context.getImageData(16 + x, 48 + y, 16, 16),
      top_1_2: context.getImageData(32 + x, 48 + y, 16, 16),
      top_1_3: context.getImageData(48 + x, 48 + y, 16, 16),
      top_2_0: context.getImageData(x, 64 + y, 16, 16),
      top_2_1: context.getImageData(16 + x, 64 + y, 16, 16),
      top_2_2: context.getImageData(32 + x, 64 + y, 16, 16),
      top_2_3: context.getImageData(48 + x, 64 + y, 16, 16),
      top_3_0: context.getImageData(x, 80 + y, 16, 16),
      top_3_1: context.getImageData(16 + x, 80 + y, 16, 16),
      top_3_2: context.getImageData(32 + x, 80 + y, 16, 16),
      top_3_3: context.getImageData(48 + x, 80 + y, 16, 16),
      corner_0_0: context.getImageData(32 + x, y, 16, 16),
      corner_0_1: context.getImageData(32 + x, 16 + y, 16, 16),
      corner_1_0: context.getImageData(48 + x, y, 16, 16),
      corner_1_1: context.getImageData(48 + x, 16 + y, 16, 16)
    };
  }
}

function loadSideTextureData(sprite) {
  const { image, offset } = sprite;
  const { width, height } = image;
  const [ x, y ] = offset;
  const cacheKey = getCacheKey(sprite);

  if (!spritesData[cacheKey]) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);

    spritesData[cacheKey] = {
      front_0_0: context.getImageData(x, y, 16, 16),
      front_0_1: context.getImageData(16 + x, y, 16, 16),
      front_0_2: context.getImageData(32 + x, y, 16, 16),
      front_0_3: context.getImageData(48 + x, y, 16, 16),
      front_1_0: context.getImageData(x, 16 + y, 16, 16),
      front_1_1: context.getImageData(16 + x, 16 + y, 16, 16),
      front_1_2: context.getImageData(32 + x, 16 + y, 16, 16),
      front_1_3: context.getImageData(48 + x, 16 + y, 16, 16),
      front_2_0: context.getImageData(x, 32 + y, 16, 16),
      front_2_1: context.getImageData(16 + x, 32 + y, 16, 16),
      front_2_2: context.getImageData(32 + x, 32 + y, 16, 16),
      front_2_3: context.getImageData(48 + x, 32 + y, 16, 16),
      front_3_0: context.getImageData(x, 48 + y, 16, 16),
      front_3_1: context.getImageData(16 + x, 48 + y, 16, 16),
      front_3_2: context.getImageData(32 + x, 48 + y, 16, 16),
      front_3_3: context.getImageData(48 + x, 48 + y, 16, 16)
    };
  }
}

export function loadTextures(sprites) {
  values(sprites).forEach(sprite => {
    switch (sprite.type) {
      case 'top':
        return loadTopTextureData(sprite);

      case 'side':
        return loadSideTextureData(sprite);

      default:
    }
  });
}

export function setTopTexture(canvas, name, sprite, props = {}) {
  const { back, front, left, right, topBack, topFront, topLeft, topRight } = props;
  const { connect, topConnect } = sprite;
  const cacheKey = getCacheKey(sprite);
  
  const context = canvas.getContext('2d');
  const data = spritesData[cacheKey];

  setTopTextureCornerBackLeft(canvas, name, sprite, props);
  setTopTextureCornerBackRight(canvas, name, sprite, props);
  setTopTextureCornerFrontLeft(canvas, name, sprite, props);
  setTopTextureCornerFrontRight(canvas, name, sprite, props);

  // Tests
  const frontTest = (connect && front === name && !(topFront === name && topConnect));
  const backTest = (connect && back === name && !(topBack === name && topConnect));
  const rightTest = (connect && right === name && !(topRight === name && topConnect));
  const leftTest = (connect && left === name && !(topLeft === name && topConnect));

  // Center
  context.putImageData(data.top_1_1, 16, 16);
  context.putImageData(data.top_1_2, 32, 16);
  context.putImageData(data.top_2_1, 16, 32);
  context.putImageData(data.top_2_2, 32, 32);

  // Front
  if (frontTest) {
    context.putImageData(data.top_1_1, 16, 48);
    context.putImageData(data.top_1_2, 32, 48);
  } else {
    context.putImageData(data.top_3_1, 16, 48);
    context.putImageData(data.top_3_2, 32, 48);
  }

  // Back
  if (backTest) {
    context.putImageData(data.top_2_1, 16, 0);
    context.putImageData(data.top_2_2, 32, 0);
  } else {
    context.putImageData(data.top_0_1, 16, 0);
    context.putImageData(data.top_0_2, 32, 0);
  }

  // Right
  if (rightTest) {
    context.putImageData(data.top_1_2, 0, 16);
    context.putImageData(data.top_2_2, 0, 32);
  } else {
    context.putImageData(data.top_1_0, 0, 16);
    context.putImageData(data.top_2_0, 0, 32);
  }

  // Left
  if (leftTest) {
    context.putImageData(data.top_1_1, 48, 16);
    context.putImageData(data.top_2_1, 48, 32);
  } else {
    context.putImageData(data.top_1_3, 48, 16);
    context.putImageData(data.top_2_3, 48, 32);
  }
}

export function setTopTextureCornerBackLeft(canvas, name, sprite, props = {}, posX = 48, posY = 0) {
  const { back, backLeft, left, topBack, topBackLeft, topLeft } = props;
  const { connect, topConnect } = sprite;
  const cacheKey = getCacheKey(sprite);

  const context = canvas.getContext('2d');
  const data = spritesData[cacheKey];

  // Tests
  const backTest = (connect && back === name && !(topBack === name && topConnect));
  const leftTest = (connect && left === name && !(topLeft === name && topConnect));
  const backLeftTest = (connect && backLeft === name && !(topBackLeft === name && topConnect));

  if (backTest) {
    if (leftTest) {
      backLeftTest ? context.putImageData(data.top_2_1, posX, posY) : context.putImageData(data.corner_1_0, posX, posY);
    } else {
      context.putImageData(data.top_2_3, posX, posY);
    }
  } else {
    if (leftTest) {
      context.putImageData(data.top_0_1, posX, posY);
    } else {
      context.putImageData(data.top_0_3, posX, posY);
    }
  }
}

export function setTopTextureCornerBackRight(canvas, name, sprite, props = {}, posX = 0, posY = 0) {
  const { back, backRight, right, topBack, topBackRight, topRight } = props;
  const { connect, topConnect } = sprite;
  const cacheKey = getCacheKey(sprite);

  const context = canvas.getContext('2d');
  const data = spritesData[cacheKey];

  // Tests
  const backTest = (connect && back === name && !(topBack === name && topConnect));
  const rightTest = (connect && right === name && !(topRight === name && topConnect));
  const backRightTest = (connect && backRight === name && !(topBackRight === name && topConnect));

  if (backTest) {
    if (rightTest) {
      backRightTest ? context.putImageData(data.top_2_2, posX, posY) : context.putImageData(data.corner_0_0, posX, posY);
    } else {
      context.putImageData(data.top_2_0, posX, posY);
    }
  } else {
    if (rightTest) {
      context.putImageData(data.top_0_2, posX, posY);
    } else {
      context.putImageData(data.top_0_0, posX, posY);
    }
  }
}

export function setTopTextureCornerFrontLeft(canvas, name, sprite, props = {}, posX = 48, posY = 48) {
  const { front, frontLeft, left, topFront, topFrontLeft, topLeft } = props;
  const { connect, topConnect } = sprite;
  const cacheKey = getCacheKey(sprite);

  const context = canvas.getContext('2d');
  const data = spritesData[cacheKey];

  // Tests
  const frontTest = (connect && front === name && !(topFront === name && topConnect));
  const leftTest = (connect && left === name && !(topLeft === name && topConnect));
  const frontLeftTest = (connect && frontLeft === name && !(topFrontLeft === name && topConnect));

  if (frontTest) {
    if (leftTest) {
      frontLeftTest ? context.putImageData(data.top_1_1, posX, posY) : context.putImageData(data.corner_1_1, posX, posY);
    } else {
      context.putImageData(data.top_1_3, posX, posY)
    }
  } else {
    if (leftTest) {
      context.putImageData(data.top_3_1, posX, posY)
    } else {
      context.putImageData(data.top_3_3, posX, posY)
    }
  }
}

export function setTopTextureCornerFrontRight(canvas, name, sprite, props = {}, posX = 0, posY = 48) {
  const { front, frontRight, right, topFront, topFrontRight, topRight } = props;
  const { connect, topConnect } = sprite;
  const cacheKey = getCacheKey(sprite);

  const context = canvas.getContext('2d');
  const data = spritesData[cacheKey];

  // Tests
  const frontTest = (connect && front === name && !(topFront === name && topConnect));
  const rightTest = (connect && right === name && !(topRight === name && topConnect));
  const frontRightTest = (connect && frontRight === name && !(topFrontRight === name && topConnect));

  if (frontTest) {
    if (rightTest) {
      frontRightTest ? context.putImageData(data.top_1_2, posX, posY) : context.putImageData(data.corner_0_1, posX, posY);
    } else {
      context.putImageData(data.top_1_0, posX, posY)
    }
  } else {
    if (rightTest) {
      context.putImageData(data.top_3_2, posX, posY)
    } else {
      context.putImageData(data.top_3_0, posX, posY)
    }
  }
}

export function setSideTexture(canvas, name, sprite, props = {}) {
  setSideTextureCenterLeft(canvas, name, sprite, props);
  setSideTextureCenterRight(canvas, name, sprite, props);
  setSideTextureLeft(canvas, name, sprite, props);
  setSideTextureRight(canvas, name, sprite, props);
}

export function setSideTextureCenterLeft(canvas, name, sprite, props = {}, pos = 32) {
  const { bottom, top } = props;
  const { connect } = sprite;
  const cacheKey = getCacheKey(sprite);

  const context = canvas.getContext('2d');
  const data = spritesData[cacheKey];

  // Tests.
  const topTest = (connect && top === name);
  const bottomTest = (connect && bottom === name);

  context.putImageData(data.front_1_2, pos, 16);
  context.putImageData(data.front_2_2, pos, 32);

  if (topTest) {
    context.putImageData(data.front_2_2, pos, 0);
  } else {
    context.putImageData(data.front_0_2, pos, 0);
  }

  if (bottomTest) {
    context.putImageData(data.front_1_2, pos, 48);
  } else {
    context.putImageData(data.front_3_2, pos, 48);
  }
}

export function setSideTextureCenterRight(canvas, name, sprite, props = {}, pos = 16) {
  const { bottom, top } = props;
  const { connect } = sprite;
  const cacheKey = getCacheKey(sprite);

  const context = canvas.getContext('2d');
  const data = spritesData[cacheKey];

  // Tests.
  const topTest = (connect && top === name);
  const bottomTest = (connect && bottom === name);

  context.putImageData(data.front_1_1, pos, 16);
  context.putImageData(data.front_2_1, pos, 32);

  if (topTest) {
    context.putImageData(data.front_2_1, pos, 0);
  } else {
    context.putImageData(data.front_0_1, pos, 0);
  }

  if (bottomTest) {
    context.putImageData(data.front_1_1, pos, 48);
  } else {
    context.putImageData(data.front_3_1, pos, 48);
  }
}

export function setSideTextureLeft(canvas, name, sprite, props = {}, pos = 48) {
  const { bottom, frontLeft, left, top } = props;
  const { connect } = sprite;
  const cacheKey = getCacheKey(sprite);

  const context = canvas.getContext('2d');
  const data = spritesData[cacheKey];

  // Tests.
  const topTest = (connect && top === name);
  const bottomTest = (connect && bottom === name);
  const leftTest = (connect && (left === name || frontLeft === name));

  if (leftTest) {
    topTest ? context.putImageData(data.front_2_1, 48, 0) : context.putImageData(data.front_0_1, pos, 0);
    bottomTest ? context.putImageData(data.front_1_1, 48, 48) : context.putImageData(data.front_3_1, pos, 48);
    context.putImageData(data.front_1_1, pos, 16);
    context.putImageData(data.front_2_1, pos, 32);
  } else {
    topTest ? context.putImageData(data.front_2_3, 48, 0) : context.putImageData(data.front_0_3, pos, 0);
    bottomTest ? context.putImageData(data.front_1_3, 48, 48) : context.putImageData(data.front_3_3, pos, 48);
    context.putImageData(data.front_1_3, pos, 16);
    context.putImageData(data.front_2_3, pos, 32);
  }
}

export function setSideTextureRight(canvas, name, sprite, props = {}, pos = 0) {
  const { bottom, frontRight, right, top } = props;
  const { connect } = sprite;
  const cacheKey = getCacheKey(sprite);

  const context = canvas.getContext('2d');
  const data = spritesData[cacheKey];

  // Tests.
  const topTest = (connect && top === name);
  const bottomTest = (connect && bottom === name);
  const rightTest = (connect && (right === name || frontRight === name));

  if (rightTest) {
    topTest ? context.putImageData(data.front_2_2, 0, 0) : context.putImageData(data.front_0_2, pos, 0);
    bottomTest ? context.putImageData(data.front_1_2, 0, 48) : context.putImageData(data.front_3_2, pos, 48);
    context.putImageData(data.front_1_2, pos, 16);
    context.putImageData(data.front_2_2, pos, 32);
  } else {
    topTest ? context.putImageData(data.front_2_0, 0, 0) : context.putImageData(data.front_0_0, pos, 0);
    bottomTest ? context.putImageData(data.front_1_0, 0, 48) : context.putImageData(data.front_3_0, pos, 48);
    context.putImageData(data.front_1_0, pos, 16);
    context.putImageData(data.front_2_0, pos, 32);
  }
}