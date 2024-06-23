let speed = document.getElementById("speed");

document.addEventListener('keydown', function(event) {
    if (event === 32 || event.key === ' ') {
        speed.style.color = "green"
    }
});
document.addEventListener('keyup', function(event) {
    if (event === 32 || event.key === ' ') {
        speed.style.color = "black"
    }
});