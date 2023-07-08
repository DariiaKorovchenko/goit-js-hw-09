function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', onStartPress);
stopBtn.addEventListener('click', onStopPress);

let interval = null;
const INTERVAL_DELAY = 1000;

function onStartPress() {
  body.style.backgroundColor = getRandomHexColor();
  startBtn.setAttribute('disabled', '');
  if (stopBtn.hasAttribute('disabled', '')) {
    stopBtn.removeAttribute('disabled', '');
  }
  interval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, INTERVAL_DELAY);
}

function onStopPress() {
  stopBtn.setAttribute('disabled', '');
  startBtn.removeAttribute('disabled', '');
  clearInterval(interval);
}
