let speed = document.getElementById("speed");
let passedTime = 0
document.addEventListener('keydown', function(event) {
    if (event === 32 || event.key === ' ') {
        speed.style.color = "green"
    }
    stop();
});
document.addEventListener('keyup', function(event) {
    if (event === 32 || event.key === ' ') {
        speed.style.color = "black"
    }
    start();
});
/* timer controls */
const display = document.getElementById("speed")
let timer = null;
let startTime = 0;
let elaspstTime = 0;
let solveNumber = 1;
let isRunning = false;
let table = document.getElementById("cubeTimes");
let avrg = document.getElementById("avrg");
let total = 0;
function start(){
    if(!isRunning){
        startTime = Date.now() - elaspstTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
    else{
        reset();
    }
}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elaspstTime = Date.now() - startTime;
    }
}
function reset(){
    console.log(elaspstTime);
    let newRow = table.insertRow(-1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.textContent = solveNumber;
    cell2.textContent = Math.floor(elaspstTime / (1000 * 60) % 60) + ":" + Math.floor(elaspstTime / (1000*60*60)) + ":" + Math.floor(elaspstTime / 1000 % 60) + ":" + Math.floor(elaspstTime % 1000 / 10);
    total += elaspstTime;
    console.log(total/solveNumber)
    avrg.textContent = Math.floor((total/solveNumber) / (1000 * 60) % 60) + ":" + Math.floor((total/solveNumber) / (1000*60*60)) + ":" + Math.floor((total/solveNumber) / 1000 % 60) + ":" + Math.floor((total/solveNumber) % 1000 / 10);
    solveNumber++;
    clearInterval(timer);
    isRunning = false;
    startTime = 0;
    elaspstTime = 0;
    display.textContent = "00:00:00";
}

function update(){
    const currTime = Date.now();
    elaspstTime = currTime - startTime;

    let hours = Math.floor(elaspstTime / (1000*60*60));
    let minutes = Math.floor(elaspstTime / (1000 * 60) % 60);
    let seconds = Math.floor(elaspstTime / 1000 % 60);
    let milliseconds = Math.floor(elaspstTime % 1000 / 10);
    display.textContent = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
