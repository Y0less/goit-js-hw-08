import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const vimeoPlayer = new Player(iframe);
const throttle = require('lodash.throttle');

/**
 * to restore VimeoPlayer current playing time from local storage
 */
vimeoPlayer
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    console.log('stored player time :>> ', seconds); //comment
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log(
          'Saved time for player was less than 0 or greater than the video’s duration'
        );
        break;
      default:
        console.log('Error', error.name);
        break;
    }
  });

/**
 * to read VimeoPlayer playing time with throtle
 */
vimeoPlayer.on('timeupdate', throttle(onPlay, 1000));

/**
 * to store VimeoPlayer current playing time to local storage
 */
function onPlay(data) {
  console.log('player time :>> ', data.seconds); //comment
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
