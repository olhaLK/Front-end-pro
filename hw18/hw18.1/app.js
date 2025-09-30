const display = document.querySelector('.display');
let timer = null;
let startTime = 120 * 1000;
let elaplsedTime = 0;


function run() {
    timer = setInterval(update, 1000);
}


function update() {
    elaplsedTime += 1000;

    let remainingTime = startTime - elaplsedTime;

    if (remainingTime <= 0) {
        clearInterval(timer);
    }

    let min = Math.floor(remainingTime / (1000 * 60));
    let sec = Math.floor((remainingTime / 1000) % 60);

    display.textContent = `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;
}


run();