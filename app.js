document.addEventListener('DOMContentLoaded', function() {
  const timer = document.getElementById('timer');
  const breathingWaves = document.getElementById('breathingWaves');
  const startButton = document.getElementById('startButton');

  let timerInterval;
  let breathInterval;

  startButton.addEventListener('click', startMindfulnessTimer);

  function startMindfulnessTimer() {
      clearInterval(timerInterval);
      clearInterval(breathInterval);

      let seconds = 0;
      timer.innerText = formatTime(seconds);

      timerInterval = setInterval(() => {
          seconds++;
          timer.innerText = formatTime(seconds);
      }, 1000);

      breathInterval = setInterval(() => {
          breathingWaves.classList.toggle('breathing-animation');
      }, 4000);
  }

  function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  }
});
