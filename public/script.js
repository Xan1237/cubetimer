// constants
let speed = document.getElementById("speed");
let isRunning = false;
let letters = document.getElementById("letters");
let passedTime = 0

//timer constants
const display = document.getElementById("speed")
let timer = null;
let startTime = 0;
let elaspstTime = 0;
let solveNumber = 1;
let table = document.getElementById("cubeTimes");
let avrg = document.getElementById("avrg");
let total = 0;
let lowest = 100000000000000000000000000000000000;
const best = document.getElementById("best");

//runs when the spacebar is pressed down changes the color of timer before it starts also resets the timer to 0
document.addEventListener('keydown', function(event) {
    if (event === 32 || event.key === ' ' && !isRunning) {
        event.preventDefault();
        speed.style.color = "green"
        display.textContent = "0.00";
        
    }
    stop();
});

//starts the timer
document.addEventListener('keyup', function(event) {
    if (event === 32 || event.key === ' ') {
        speed.style.color = "black"
    }
    start();
});

//fetches the inital scramble
fetch("/api/users").then(response => response.json())
.then(data => letters.innerHTML = data.name)
.catch(error => console.error(error));


/* timer controls */
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

//function that stops the timer
function stop(){
    if(isRunning){
        clearInterval(timer);
        elaspstTime = Date.now() - startTime;
    }
}

//function that resets the timer
function reset(){
    
    //takes the time and adds it to the spreadsheet
    let newRow = table.insertRow(-1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.textContent = solveNumber;
    if((Math.floor(elaspstTime / (1000*60*60)))>0){
        cell2.textContent = Math.floor(elaspstTime / (1000*60*60)) + ":" + Math.floor(elaspstTime / (1000 * 60) % 60) + ":" + Math.floor(elaspstTime / 1000 % 60) + "." + Math.floor(elaspstTime % 1000 / 10);
    }
    else if((Math.floor(elaspstTime / (1000 * 60) % 60))>0){
        cell2.textContent =  Math.floor(elaspstTime / (1000 * 60) % 60) + ":" + Math.floor(elaspstTime / 1000 % 60) + "." + Math.floor(elaspstTime % 1000 / 10);
    }
    else{
        cell2.textContent =  Math.floor(elaspstTime / 1000 % 60) + "." + Math.floor(elaspstTime % 1000 / 10);
    }

    //calculates the avrg
    total += elaspstTime;
    console.log(total/solveNumber)
    avrg.textContent = "Avrg: " + Math.floor((total/solveNumber) / (1000 * 60) % 60) + ":" + Math.floor((total/solveNumber) / (1000*60*60)) + ":" + Math.floor((total/solveNumber) / 1000 % 60) + ":" + Math.floor((total/solveNumber) % 1000 / 10);
    solveNumber++;

    //calculates the best time
    if(lowest>elaspstTime){
        lowest = elaspstTime;
        best.textContent = "Best: " + Math.floor(lowest / (1000 * 60) % 60) + ":" + Math.floor(lowest / (1000*60*60)) + ":" + Math.floor(lowest / 1000 % 60) + ":" + Math.floor(lowest % 1000 / 10);
    }

    //resets timer
    clearInterval(timer);
    isRunning = false;
    startTime = 0;

    //displays the last time 
    if((Math.floor(elaspstTime / (1000*60*60)))>0){
        display.textContent = Math.floor(elaspstTime / (1000*60*60)) + ":" + Math.floor(elaspstTime / (1000 * 60) % 60) + ":" + Math.floor(elaspstTime / 1000 % 60) + "." + Math.floor(elaspstTime % 1000 / 10);
    }
    else if((Math.floor(elaspstTime / (1000 * 60) % 60))>0){
        display.textContent =  Math.floor(elaspstTime / (1000 * 60) % 60) + ":" + Math.floor(elaspstTime / 1000 % 60) + "." + Math.floor(elaspstTime % 1000 / 10);
    }
    else{
        display.textContent =  Math.floor(elaspstTime / 1000 % 60) + "." + Math.floor(elaspstTime % 1000 / 10);
    }
    elaspstTime = 0;

    //fetches next scramble
    fetch("/api/users").then(response => response.json())
    .then(data => letters.innerHTML = data.name)
    .catch(error => console.error(error));
}

//updates the timer live on the website
function update(){
    const currTime = Date.now();
    elaspstTime = currTime - startTime;

    let hours = Math.floor(elaspstTime / (1000*60*60));
    let minutes = Math.floor(elaspstTime / (1000 * 60) % 60);
    let seconds = Math.floor(elaspstTime / 1000 % 60);
    let milliseconds = Math.floor(elaspstTime % 1000 / 10);
    if(hours>0){
        display.textContent = hours + ":" + minutes + ":" + seconds + '.' + milliseconds;
    }
    else if(minutes>0){
        display.textContent =  minutes + ":" + seconds + '.' + milliseconds;
    }
    else{
        display.textContent =  seconds + '.' + milliseconds;
    }
}




