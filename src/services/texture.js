const spritesData = {};

export function loadTextureData(settings) {
  const { spritePath, spriteImage, spriteOffset } = settings;
  const { width, height } = spriteImage;
  const [ x, y ] = spriteOffset;

  if (!spritesData[`${spritePath}-${x}-${y}`]) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d');
    context.drawImage(spriteImage, 0, 0);

    spritesData[`${spritePath}-${x}-${y}`] = {
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

      front_0_0: context.getImageData(x, 96 + y, 16, 16),
      front_0_1: context.getImageData(16 + x, 96 + y, 16, 16),
      front_0_2: context.getImageData(32 + x, 96 + y, 16, 16),
      front_0_3: context.getImageData(48 + x, 96 + y, 16, 16),
      front_1_0: context.getImageData(x, 112 + y, 16, 16),
      front_1_1: context.getImageData(16 + x, 112 + y, 16, 16),
      front_1_2: context.getImageData(32 + x, 112 + y, 16, 16),
      front_1_3: context.getImageData(48 + x, 112 + y, 16, 16),
      front_2_0: context.getImageData(x, 128 + y, 16, 16),
      front_2_1: context.getImageData(16 + x, 128 + y, 16, 16),
      front_2_2: context.getImageData(32 + x, 128 + y, 16, 16),
      front_2_3: context.getImageData(48 + x, 128 + y, 16, 16),
      front_3_0: context.getImageData(x, 144 + y, 16, 16),
      front_3_1: context.getImageData(16 + x, 144 + y, 16, 16),
      front_3_2: context.getImageData(32 + x, 144 + y, 16, 16),
      front_3_3: context.getImageData(48 + x, 144 + y, 16, 16),

      corner_0_0: context.getImageData(32 + x, y, 16, 16),
      corner_0_1: context.getImageData(32 + x, 16 + y, 16, 16),
      corner_1_0: context.getImageData(48 + x, y, 16, 16),
      corner_1_1: context.getImageData(48 + x, 16 + y, 16, 16),
    };
  }
}

export function setTopTexture(canvas, name, settings, props) {
  const { back, backLeft, backRight, front, frontLeft, frontRight, left, right, topBack, topBackLeft, topBackRight,
    topFront, topFrontLeft, topFrontRight, topLeft, topRight } = props;
  const { spriteConnect, spritePath, spriteOffset, spriteTopConnect } = settings;
  const [ x, y ] = spriteOffset;
  
  const context = canvas.getContext('2d');
  const data = spritesData[`${spritePath}-${x}-${y}`];

  // Tests
  const frontTest = (spriteConnect && front === name && !(topFront === name && spriteTopConnect));
  const backTest = (spriteConnect && back === name && !(topBack === name && spriteTopConnect));
  const rightTest = (spriteConnect && right === name && !(topRight === name && spriteTopConnect));
  const leftTest = (spriteConnect && left === name && !(topLeft === name && spriteTopConnect));
  const frontRightTest = (spriteConnect && frontRight === name && !(topFrontRight === name && spriteTopConnect));
  const frontLeftTest = (spriteConnect && frontLeft === name && !(topFrontLeft === name && spriteTopConnect));
  const backRightTest = (spriteConnect && backRight === name && !(topBackRight === name && spriteTopConnect));
  const backLeftTest = (spriteConnect && backLeft === name && !(topBackLeft === name && spriteTopConnect));

  // Center
  context.putImageData(data.top_1_1, 16, 16);
  context.putImageData(data.top_1_2, 32, 16);
  context.putImageData(data.top_2_1, 16, 32);
  context.putImageData(data.top_2_2, 32, 32);

  // Front
  if (frontTest) {
    context.putImageData(data.top_1_1, 16, 48);
    context.putImageData(data.top_1_2, 32, 48);
    if (rightTest) {
      frontRightTest ? context.putImageData(data.top_1_2, 0, 48) : context.putImageData(data.corner_0_1, 0, 48);
    } else {
      context.putImageData(data.top_1_0, 0, 48)
    }
    if (leftTest) {
      frontLeftTest ? context.putImageData(data.top_1_1, 48, 48) : context.putImageData(data.corner_1_1, 48, 48);
    } else {
      context.putImageData(data.top_1_3, 48, 48)
    }
  } else {
    context.putImageData(data.top_3_1, 16, 48);
    context.putImageData(data.top_3_2, 32, 48);
    if (rightTest) {
      context.putImageData(data.top_3_2, 0, 48)
    } else {
      context.putImageData(data.top_3_0, 0, 48)
    }
    if (leftTest) {
      context.putImageData(data.top_3_1, 48, 48)
    } else {
      context.putImageData(data.top_3_3, 48, 48)
    }
  }

  // Back
  if (backTest) {
    context.putImageData(data.top_2_1, 16, 0);
    context.putImageData(data.top_2_2, 32, 0);
    if (rightTest) {
      backRightTest ? context.putImageData(data.top_2_2, 0, 0) : context.putImageData(data.corner_0_0, 0, 0);
    } else {
      context.putImageData(data.top_2_0, 0, 0);
    }
    if (leftTest) {
      backLeftTest ? context.putImageData(data.top_2_1, 48, 0) : context.putImageData(data.corner_1_0, 48, 0);
    } else {
      context.putImageData(data.top_2_3, 48, 0);
    }
  } else {
    context.putImageData(data.top_0_1, 16, 0);
    context.putImageData(data.top_0_2, 32, 0);
    if (rightTest) {
      context.putImageData(data.top_0_2, 0, 0);
    } else {
      context.putImageData(data.top_0_0, 0, 0);
    }
    if (leftTest) {
      context.putImageData(data.top_0_1, 48, 0);
    } else {
      context.putImageData(data.top_0_3, 48, 0);
    }
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

export function setSideTexture(canvas, name, settings, props) {
  const { bottom, frontLeft, frontRight, left, right, top } = props;
  const { spriteConnect, spritePath, spriteOffset } = settings;
  const [ x, y ] = spriteOffset;
  
  const context = canvas.getContext('2d');
  const data = spritesData[`${spritePath}-${x}-${y}`];

  // Tests.
  const topTest = (spriteConnect && top === name);
  const bottomTest = (spriteConnect && bottom === name);
  const rightTest = (spriteConnect && (right === name || frontRight === name));
  const leftTest = (spriteConnect && (left === name || frontLeft === name));

  // Center
  context.putImageData(data.front_1_1, 16, 16);
  context.putImageData(data.front_1_2, 32, 16);
  context.putImageData(data.front_2_1, 16, 32);
  context.putImageData(data.front_2_2, 32, 32);

  // Top
  if (topTest) {
    context.putImageData(data.front_2_1, 16, 0);
    context.putImageData(data.front_2_2, 32, 0);
  } else {
    context.putImageData(data.front_0_1, 16, 0);
    context.putImageData(data.front_0_2, 32, 0);
  }
  if (rightTest) {
    topTest ? context.putImageData(data.front_2_2, 0, 0) : context.putImageData(data.front_0_2, 0, 0);
  } else {
    topTest ? context.putImageData(data.front_2_0, 0, 0) : context.putImageData(data.front_0_0, 0, 0);
  }
  if (leftTest) {
    topTest ? context.putImageData(data.front_2_1, 48, 0) : context.putImageData(data.front_0_1, 48, 0);
  } else {
    topTest ? context.putImageData(data.front_2_3, 48, 0) : context.putImageData(data.front_0_3, 48, 0);
  }

  // Bottom
  if (bottomTest) {
    context.putImageData(data.front_1_1, 16, 48);
    context.putImageData(data.front_1_2, 32, 48);
  } else {
    context.putImageData(data.front_3_1, 16, 48);
    context.putImageData(data.front_3_2, 32, 48);
  }
  if (rightTest) {
    bottomTest ? context.putImageData(data.front_1_2, 0, 48) : context.putImageData(data.front_3_2, 0, 48);
  } else {
    bottomTest ? context.putImageData(data.front_1_0, 0, 48) : context.putImageData(data.front_3_0, 0, 48);
  }
  if (leftTest) {
    bottomTest ? context.putImageData(data.front_1_1, 48, 48) : context.putImageData(data.front_3_1, 48, 48);
  } else {
    bottomTest ? context.putImageData(data.front_1_3, 48, 48) : context.putImageData(data.front_3_3, 48, 48);
  }

  // Right
  if (rightTest) {
    context.putImageData(data.front_1_2, 0, 16);
  } else {
    context.putImageData(data.front_1_0, 0, 16);
  }
  if (leftTest) {
    context.putImageData(data.front_1_1, 48, 16);
  } else {
    context.putImageData(data.front_1_3, 48, 16);
  }

  // Left
  if (rightTest) {
    context.putImageData(data.front_2_2, 0, 32);
  } else {
    context.putImageData(data.front_2_0, 0, 32);
  }
  if (leftTest) {
    context.putImageData(data.front_2_1, 48, 32);
  } else {
    context.putImageData(data.front_2_3, 48, 32);
  }
}
