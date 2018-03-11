export function getColor(hue, saturation, luminosity = 50, range = 1, opacity = 1) {
  return angle => {
    const lum = Math.min(100, Math.max(0, (Math.abs(angle) - 90) / 180 * 100 * range + luminosity));
    return `hsla(${hue}, ${saturation}%, ${lum}%, ${opacity})`;
  };
}
