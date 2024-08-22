let speed = document.getElementById("speed");
let letters = document.getElementById("letters");
let passedTime = 0
document.addEventListener('keydown', function(event) {
    if (event === 32 || event.key === ' ') {
        event.preventDefault();
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
fetch("/api/users").then(response => response.json())
.then(data => letters.innerHTML = data.name)
.catch(error => console.error(error));
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
let lowest = 100000000000000000000000000000000000;
const best = document.getElementById("best");
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
    avrg.textContent = "Avrg: " + Math.floor((total/solveNumber) / (1000 * 60) % 60) + ":" + Math.floor((total/solveNumber) / (1000*60*60)) + ":" + Math.floor((total/solveNumber) / 1000 % 60) + ":" + Math.floor((total/solveNumber) % 1000 / 10);
    solveNumber++;
    if(lowest>elaspstTime){
        lowest = elaspstTime;
        best.textContent = "Best: " + Math.floor(lowest / (1000 * 60) % 60) + ":" + Math.floor(lowest / (1000*60*60)) + ":" + Math.floor(lowest / 1000 % 60) + ":" + Math.floor(lowest % 1000 / 10);
    }

    clearInterval(timer);
    isRunning = false;
    startTime = 0;
    elaspstTime = 0;
    display.textContent = "00:00:00";

    fetch("/api/users").then(response => response.json())
    .then(data => letters.innerHTML = data.name)
    .catch(error => console.error(error));
   

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




