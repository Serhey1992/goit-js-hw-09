import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const delayEL = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');

formEl.addEventListener('submit', onFromSubmit);


function onFromSubmit(evt) {
  evt.preventDefault();
  let delayPromise = Number(delayEL.value);

  for (let i = 0; i < amountEl.value; i += 1) {
    createPromise(i, delayPromise).then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delayPromise += Number(stepEl.value);
  }
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      }
      reject({position, delay});
    }, delay);
  });
}
