document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".player__video");
  const playButton = document.querySelector(".toggle");
  const rewindButton = document.querySelector(".rewind");
  const progress = document.querySelector(".progress");

  function togglePlay() {
    if (video.paused) {
      video.play();
      playButton.textContent = "❚ ❚";
    } else {
      video.pause();
      playButton.textContent = "►";
    }
  }

  function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;
  }

  function setProgress() {
    video.currentTime = (progress.value / 100) * video.duration;
  }

  function rewindVideo() {
    video.currentTime -= 10;
  }

  playButton.addEventListener("click", togglePlay);
  rewindButton.addEventListener("click", rewindVideo);
  video.addEventListener("timeupdate", updateProgress);
  progress.addEventListener("input", setProgress);
});
