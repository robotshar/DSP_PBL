function playSound(soundFile) {
    var audio = document.getElementById('sound');
    
    if (audio.paused || audio.src !== soundFile) {
      audio.src = soundFile;
      audio.play();
    } else {
      audio.pause();
    }
  }
  