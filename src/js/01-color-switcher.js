const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');


startBtn.addEventListener('click', onClickStartBtn);
stopBtn.addEventListener('click', onClickStopBtn);

function onClickStartBtn() {
    const intervalId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor();
    }, 2000);
    startBtn.setAttribute('disabled', 'disabled');
};

function onClickStopBtn() {
    startBtn.removeAttribute('disabled');
    clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}