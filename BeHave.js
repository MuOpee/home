window.addEventListener('load', function() {
    var footer = document.getElementById('myFooter');
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var i = 0;
    setInterval(function() {
        footer.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 1000);
});
var nav = document.getElementById("navBarMob")
        function navCome() {
            if (nav.style.left == `-105%`) {
                nav.style.left = `0`
            }
            else {

                nav.style.left = `-105%`
            }
        }
// script.js

const video = document.getElementById('my-video');
const playPauseButton = document.getElementById('play-pause-button');
const volumeControl = document.getElementById('volume-control');

playPauseButton.addEventListener('click', togglePlay);
volumeControl.addEventListener('input', setVolume);

function togglePlay() {
    if (video.paused || video.ended) {
        video.play();
        playPauseButton.textContent = 'Pause';
    } else {
        video.pause();
        playPauseButton.textContent = 'Play';
    }
}

function setVolume() {
    video.volume = volumeControl.value;
}

