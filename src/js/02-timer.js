import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputEl = document.querySelector('#datetime-picker');
const startBtnEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let deadLine = 0;
startBtnEl.disabled = 'disabled';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      deadLine = selectedDates[0].getTime();
    
    if (deadLine < Date.now()) {
        Notiflix.Notify.failure('Please choose a date in the future');
        // alert('Please choose a date in the future')
        startBtnEl.disabled = 'disabled';
      } else {
        startBtnEl.removeAttribute('disabled');
      }
  },
};

flatpickr("#datetime-picker", options);

startBtnEl.addEventListener('click', onStartBtnClick);


function onStartBtnClick() {
   let intervalId = setInterval(() => {
    let currentTime = Date.now();
    const timeDifference = deadLine - currentTime;
    const time = convertMs(timeDifference);
    timeInterface(time);
    
    if (timeDifference < 1000) {
      clearInterval(intervalId);
    }

  }, 1000)
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

function timeInterface({ days, hours, minutes, seconds }) {
  daysEl.textContent = addZero(days.toString());
  hoursEl.textContent = addZero(hours.toString());
  minutesEl.textContent = addZero(minutes.toString());
  secondsEl.textContent = addZero(seconds.toString());
};


function addZero(value) {
  return value.padStart(2, '0');
}