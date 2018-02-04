export function setTimeout(timer) {
  return new Promise(resolve => {
    window.setTimeout(resolve, timer);
  });
}