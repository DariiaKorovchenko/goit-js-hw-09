import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onInputForm);

const values = {};

function onInputForm(event) {
  values[event.target.name] = event.target.value;
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

function onFormSubmit(event) {
  event.preventDefault();
  let timeSum = Number.parseInt(values.delay);
  let counter = 1;
  createPromise(counter, timeSum)
    .then(result => Notify.success(result))
    .catch(error => Notify.failure(error));
  counter += 1;
  setInterval(() => {
    if (counter <= values.amount) {
      timeSum += Number.parseInt(values.step);
      createPromise(counter, timeSum)
        .then(result => Notify.success(result))
        .catch(error => Notify.failure(error));
      counter += 1;
    }
  }, 0);
}
