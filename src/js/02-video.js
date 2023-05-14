import Player from "@vimeo/player";

import Lodash from "lodash.throttle";

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', function(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);

const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime !== null) {
 player.setCurrentTime(currentTime);
};

