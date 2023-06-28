export { readStoredTime as default };

/**
 * @returns stored VimeoPlayer current playing time from local storage. Returns "0" If there is no such key.
 */
const readStoredTime = () =>
  !localStorage.getItem('videoplayer-current-time')
    ? 0
    : localStorage.getItem('videoplayer-current-time');
