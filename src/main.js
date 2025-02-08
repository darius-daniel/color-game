import './style.css'


let randomColor = selectRandomColor();
let score = 0;

const colorBox = document.getElementsByClassName('color-box')[0]
const colorBtns = document.getElementsByClassName('color-option');
const gameScore = document.getElementById('score');

function selectRandomColor() {
    const colors = ['cyan', 'aqua', 'aquamarine', 'skyblue', 'turquoise', 'teal'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function resetGame() {
    randomColor = selectRandomColor();
    colorBox.style.backgroundColor = randomColor;
    score = 0;
    gameScore.innerHTML = `Score: ${score}`;
}

function updateScore() {
    score += 1
    gameScore.innerHTML = `Score: ${score}`;
}

colorBox.style.backgroundColor = randomColor;

Array.prototype.forEach.call(colorBtns, (btn) => {
    btn.style.backgroundColor = btn.value;
    btn.style.color = "#242424";
    btn.style.fontWeight = "bold";
    btn.addEventListener('click', (e) => {
        const gameStatus = document.getElementById('game-status');
        if (randomColor === btn.value) {
            gameStatus.innerHTML = "Correct!"
            gameStatus.style.color = "green";
            updateScore();
        } else {
            gameStatus.innerHTML = "Incorrect!"
            gameStatus.style.color = "red";
        }
        randomColor = selectRandomColor();
    })
});


const resetScore = document.getElementById('reset-score');
resetScore.addEventListener('click', (e) => {
    resetGame();
})


