const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');


startBtn.addEventListener('click', onClickStartBtn);
stopBtn.addEventListener('click', onClickStopBtn);

let intervalId = null;

function onClickStartBtn() {
    startBtn.setAttribute('disabled', 'disabled');
    intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    }, 2000);
        
};

function onClickStopBtn() {
    startBtn.removeAttribute('disabled');
    clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}