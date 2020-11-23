//P1 Object:
const p1 = {
    score: document.querySelector(".p1Score"),
    button: document.querySelector(".p1AddPoint")
};

//P2 Object:
const p2 = {
    score: document.querySelector(".p2Score"),
    button: document.querySelector(".p2AddPoint")
};

const winningScore = document.querySelector("#winningScore");
const resetButton = document.querySelector(".resetButton");

//////////////////////////////////////////////////////////////

// winningScoreSelect.addEventListener('load', function () {
window.addEventListener("load", function () {
    let docFragment = document.createDocumentFragment();
    for (let i = 6; i <= 12; i++) {
        let newOption = document.createElement('option');
        newOption.value = i;
        newOption.innerText = i;
        docFragment.appendChild(newOption);
    };
    winningScore.appendChild(docFragment);
}, { once: true });

winningScore.addEventListener('change', function () {
    reset();
});

p1.button.addEventListener('click', function () {
    updateScore(p1, p2);
});
p2.button.addEventListener('click', function () {
    updateScore(p2, p1);
});

resetButton.addEventListener('click', reset);

function updateScore(player, opponent) {
    setWinningScore(player, opponent);
    if (player.score.innerText < getWinningScore()) {
        player.score.innerText = parseInt(player.score.innerText) + 1;
        if (player.score.innerText >= getWinningScore()) {
            player.score.classList.add("has-text-success");
            opponent.score.classList.add("has-text-danger");
            isGameOver(player);
            isGameOver(opponent);
        };
    };
};

function reset() {
    for (let p of [p1, p2]) {
        p.score.innerText = "0";
        if (p.button.disabled) {
            isGameOver(p.button);
        }
        p.score.classList.remove("has-text-success", "has-text-danger");
    }
};

function isGameOver(button) {
    button.disabled = !button.disabled;
};

function setWinningScore(player, opponent) {
    let greaterScore = Math.max(parseInt(player.score.innerText), parseInt(opponent.score.innerText));
    let leastScore = Math.min(parseInt(player.score.innerText), parseInt(opponent.score.innerText));
    if (Math.abs(greaterScore - leastScore) <= 1 && greaterScore == -1 + parseInt(winningScore.value)) {
        winningScore.value = leastScore + 2;
    }
}

function getWinningScore() {
    return winningScore.value;
}