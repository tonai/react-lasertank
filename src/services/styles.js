export function getTopStyles(size, offset = 0) {
  return {transform: `rotateZ(-90deg) translateZ(${size + offset}px)`};
}

export function getBottomStyles() {
  return {transform: `rotateZ(-90deg)`};
}

export function getFrontStyles(size, offset = 0) {
  return {transform: `rotateX(-90deg) rotateY(90deg) translateY(-${size / 2}px) translateZ(${size / 2 + offset}px)`};
}

export function getBackStyles(size, offset = 0) {
  return {transform: `rotateY(90deg) rotateZ(-90deg) translateY(-${size / 2}px) translateZ(-${size / 2 + offset}px)`};
}

export function getRightStyles(size, offset = 0) {
  return {transform: `rotateX(-90deg) rotateY(180deg) translateY(-${size / 2}px) translateZ(-${size / 2 + offset}px)`};
}

export function getLeftStyles(size, offset = 0) {
  return {transform: `rotateX(-90deg) rotateY(180deg) translateY(-${size / 2}px) translateZ(${size / 2 + offset}px)`};
}
