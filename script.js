const video = document.getElementById('video');
const playPauseButton = document.getElementById('play-pause');
const rewindButton = document.getElementById('rewind');
const fastForwardButton = document.getElementById('fast-forward');
const volumeInput = document.getElementById('volume');
const playbackSpeedInput = document.getElementById('playback-speed');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

// Play/Pause functionality
playPauseButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = '❚ ❚'; // Change to pause symbol
    } else {
        video.pause();
        playPauseButton.textContent = '►'; // Change to play symbol
    }
});

// Rewind 10 seconds
rewindButton.addEventListener('click', () => {
    video.currentTime -= 10;
});

// Fast forward 25 seconds
fastForwardButton.addEventListener('click', () => {
    video.currentTime += 25;
});

// Volume control
volumeInput.addEventListener('input', (e) => {
    video.volume = e.target.value;
});

// Playback speed control
playbackSpeedInput.addEventListener('input', (e) => {
    video.playbackRate = e.target.value;
});

// Update progress bar as video plays
video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
});

// Click on progress bar to seek
progress.addEventListener('click', (e) => {
    const rect = progress.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / progress.offsetWidth;
    video.currentTime = percent * video.duration;
});