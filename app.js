// Base JS for ScoreKeeper
console.log('ScoreKeeper app loaded');
// alert('ScoreKeeper app loaded');

let p1score = 0;
let p2score = 0;

const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;

let winningScore = parseInt(winningScoreSelect.value);

let isGameOver = false;

p1button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
            p1button.disabled = true;
            p2button.disabled = true;
            p1button.classList.add('faded');
            p2button.classList.add('faded');
        }
        p1Display.textContent = p1Score;
    }
})
p2button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
            p1button.disabled = true;
            p2button.disabled = true;
            p1button.classList.add('faded');
            p2button.classList.add('faded');
        }
        p2Display.textContent = p2Score;
    }
})
resetButton.addEventListener('click', resetScore);

function resetScore() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    isGameOver = false;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
    p1button.disabled = false;
    p2button.disabled = false;
    p1button.classList.remove('faded');
    p2button.classList.remove('faded');
}

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetScore();
})