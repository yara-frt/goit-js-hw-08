import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(getTime,1000));

function getTime(event) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(event.seconds));
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
