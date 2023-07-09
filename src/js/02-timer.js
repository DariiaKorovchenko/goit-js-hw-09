import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  daysCount: document.querySelector('span[data-days]'),
  hoursCount: document.querySelector('span[data-hours]'),
  minutesCount: document.querySelector('span[data-minutes]'),
  secondsCount: document.querySelector('span[data-seconds]'),
  timeInput: document.querySelector('input'),
};

refs.startBtn.setAttribute('disabled', '');
refs.startBtn.addEventListener('click', onTimerStart);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  startTime: '',
  deltaTime: 0,

  onClose(selectedDates) {
    if (selectedDates[0] < Date.now().toString()) {
      Notify.failure('Please choose a date in the future');
      return;
    }
    if (selectedDates[0] > Date.now().toString()) {
      refs.startBtn.removeAttribute('disabled', '');
    }
    options.startTime = selectedDates[0];
  },

  start() {
    const interval = setInterval(() => {
      const currentTime = Date.now();
      this.deltaTime = this.startTime - currentTime;
      const { days, hours, minutes, seconds } = convertMs(this.deltaTime);
      if (this.deltaTime < 1000) {
        clearInterval(interval);
      }
      getTimeComponents({ days, hours, minutes, seconds });
    }, 1000);
  },
};

flatpickr('#datetime-picker', options);

function onTimerStart() {
  refs.startBtn.setAttribute('disabled', '');
  refs.timeInput.setAttribute('disabled', '');
  options.start();
}

function getTimeComponents({ days, hours, minutes, seconds }) {
  refs.daysCount.textContent = `${days}`;
  refs.hoursCount.textContent = `${hours}`;
  refs.minutesCount.textContent = `${minutes}`;
  refs.secondsCount.textContent = `${seconds}`;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
