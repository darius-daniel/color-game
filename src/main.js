import './style.css'


let randomColor = selectRandomColor();
let score = 0;

const colorBox = document.getElementsByClassName('color-box')[0]
const colorBtns = document.getElementsByClassName('color-option');
const gameScore = document.getElementById('score');

function selectRandomColor() {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'pink'];
    return colors[Math.floor(Math.random() * colors.length)];
}


Array.prototype.forEach.call(colorBtns, (btn) => {
    btn.addEventListener('click', (e) => {
        const gameStatus = document.getElementById('game-status');
        if (randomColor === btn.value) {
            gameStatus.innerHTML = "Correct!"
            gameStatus.style.color = "green";
            score += 1;
            gameScore.innerHTML = `Score: ${score}`;
        } else {
            gameStatus.innerHTML = "Incorrect!"
            gameStatus.style.color = "red";
        }

        colorBox.style.backgroundColor = randomColor;
        randomColor = selectRandomColor();
    })
});


const resetScore = document.getElementById('reset-score');
resetScore.addEventListener('click', (e) => {
    score = 0;
    gameScore.innerHTML = `Score: ${score}`;
})


