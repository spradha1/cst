// An async request for time delayed by a second
export function delaySecond () {
  return new Promise<{}>((resolve) =>
    setTimeout(() => resolve({}), 1000)
  );
}
