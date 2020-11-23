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
    let winnningScoreValue = parseInt(winningScore.value);
    if (parseInt(player.score.innerText) < winnningScoreValue) {
        player.score.innerText = parseInt(player.score.innerText) + 1;
        if (player.score.innerText == winnningScoreValue) {
            //add function to disable buttons - toggle
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
    switch (button.disabled) {
        case true:
            button.disabled = false;
            break;
        case false:
            button.disabled = true;
            break;
    }
};