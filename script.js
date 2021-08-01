const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

function toggleVideoStatus() {
  //paused and pause are the inbuilt method for this
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = "<i class='fa fa-play fa-2x'></i>";
  } else {
    play.innerHTML = "<i class='fa fa-pause fa-2x'></i>";
  }
}

function updateProgress() {
  // console.log(video.currentTime);
  // console.log(video.duration)
  //we have decalred as a value property in progress
  progress.value = (video.currentTime / video.duration) * 100;
  // console.log(`progress.value is ${progress.value}`);

  let mins = Math.floor(video.currentTime / 60);
  if (mins < video.duration) {
    mins = '0' + String(mins);
  }
  let secs = Math.floor(video.currentTime % 60);
  if (secs < video.duration) {
    secs = String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

function setVideoProgress() {
  video.currentTime = (parseInt(progress.value) * video.duration) / 100;
  // console.log(`video.currentTime is ${video.currentTime}`);
}
//if we stop the video, then make it 0
function stopVideo() {
  video.currentTime = 0;

  //if we are not doing pause, then upon click on stop button it keeps on playing from 0.1 seconds
  video.pause();
}

//Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
