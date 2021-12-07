let pageX = 0;
let pageY = 0;
let gameArea = document.getElementById('gameArea');
let snake = document.getElementById('snake');
let ball = document.getElementById('ball');
let winnerSound = new Audio("./assets/music/winner.wav")
document.addEventListener("keydown", (e) => {
    if (snake.offsetTop == ball.offsetTop && snake.offsetLeft == ball.offsetLeft) {
        winnerSound.play();
        alert("!!!WINNER!!!");
        ball.style.top = `${numberRandomGeneration(0, (gameArea.clientHeight-ball.offsetHeight))}px`;
        ball.style.left = `${numberRandomGeneration(0, (gameArea.clientWidth-ball.offsetWidth))}px`;
    } else {
        if (e.keyCode == 40) {
            if (snake.offsetTop != (gameArea.clientHeight - snake.offsetHeight)) {
                snake.style.top = `${++pageY}px`;
            }

        } else if (e.keyCode == 39) {
            if (snake.offsetLeft != (gameArea.clientWidth - snake.offsetWidth)) {
                snake.style.left = `${++pageX}px`;
            }
        } else if (e.keyCode == 38) {
            console.log("alsma");
            if (snake.offsetTop != 0) {
                snake.style.top = `${--pageY}px`;
            }
        } else if (e.keyCode == 37) {
            if (snake.offsetLeft != 0) {
                snake.style.left = `${--pageX}px`;
            }
        }
    }
})

function numberRandomGeneration(min, max) {
    return (min + Math.round(Math.random() * (max - min)));
}