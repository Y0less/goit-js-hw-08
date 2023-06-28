import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const vimeoPlayer = new Player(iframe);

vimeoPlayer
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    console.log('seconds :>> ', seconds);
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

vimeoPlayer.on('timeupdate', onPlay);

function onPlay(data) {
  console.log('data :>> ', data.seconds);
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
