import Player from '@vimeo/player';
import { save, load } from './storage';
const iframe = document.querySelector('iframe');
const vimeoPlayer = new Player(iframe);
const throttle = require('lodash.throttle');

/**
 * @returns stored VimeoPlayer current playing time from local storage. Returns "0" If there is no such key.
 */
const readStoredTime = () =>
  !load('videoplayer-current-time') ? 0 : load('videoplayer-current-time');

/**
 * restoring VimeoPlayer current playing time from local storage
 */
vimeoPlayer
  .setCurrentTime(readStoredTime())
  .then(function (seconds) {
    // console.log('stored player time :>> ', seconds);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log(
          'Saved time for player was less than 0 or greater than the video duration'
        );
        break;
      default:
        console.log('Error', error.name);
        break;
    }
  });

/**
 * reading VimeoPlayer playing time with throttle
 */
vimeoPlayer.on('timeupdate', throttle(onPlay, 1000));

/**
 * storing VimeoPlayer current playing time to local storage
 */
function onPlay(data) {
  // console.log('player time :>> ', data.seconds);
  save('videoplayer-current-time', data.seconds);
}
