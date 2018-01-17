export function getTopStyles(size) {
  return {transform: `rotateZ(-90deg) translateZ(${size}px)`};
}

export function getBottomStyles() {
  return {transform: `rotateZ(-90deg)`};
}

export function getFrontStyles(size) {
  return {transform: `rotateX(-90deg) rotateY(90deg) translateY(-${size / 2}px) translateZ(${size / 2}px)`};
}

export function getBackStyles(size) {
  return {transform: `rotateY(90deg) rotateZ(-90deg) translateY(-${size / 2}px) translateZ(-${size / 2}px)`};
}

export function getRightStyles(size) {
  return {transform: `rotateX(-90deg) rotateY(180deg) translateY(-${size / 2}px) translateZ(-${size / 2}px)`};
}

export function getLeftStyles(size) {
  return {transform: `rotateX(-90deg) rotateY(180deg) translateY(-${size / 2}px) translateZ(${size / 2}px)`};
}
