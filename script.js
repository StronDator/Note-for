document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById('background-music');
  const playButton = document.getElementById('play-button');
  const hint = document.getElementById('hint');
  const body = document.body;

  audio.volume = 0.5;

  playButton.addEventListener('click', () => {
    audio.play().then(() => {
      body.classList.add('play-music');
      playButton.style.display = 'none';
      hint.style.display = 'none';
    }).catch(error => {
      console.error("Audio playback failed: ", error);
    });
  });

  audio.addEventListener('pause', () => {
    body.classList.remove('play-music');
  });
});
