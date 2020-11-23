let p1Score = document.querySelector("#p1Score");
let p2Score = document.querySelector("#p2Score");
const p1AddPoint = document.querySelector("#p1AddPoint");
const p2AddPoint = document.querySelector("#p2AddPoint");
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
    }
    winningScore.appendChild(docFragment);
}, { once: true });

winningScore.addEventListener('change', function () {
    reset();
})

//Note: winningScoreSelectSelect.innerText is "5↵6↵7↵8↵9↵10↵11↵12" while winningScoreSelectSelect.value is the selected string option.
p1AddPoint.addEventListener('click', function () {
    let winnningScoreValue = parseInt(winningScore.value);
    if (parseInt(p1Score.innerText) < winnningScoreValue) {
        p1Score.innerText = parseInt(p1Score.innerText) + 1;
        if (p1Score.innerText == winnningScoreValue) {
            //add function to disable buttons - toggle
            isGameOver(p1AddPoint);
            isGameOver(p2AddPoint);
        }
    }
});

p2AddPoint.addEventListener('click', function () {
    let winnningScoreValue = parseInt(winningScore.value);
    if (parseInt(p2Score.innerText) < parseInt(winnningScoreValue)) {
        p2Score.innerText = parseInt(p2Score.innerText) + 1;
        if (p2Score.innerText == winnningScoreValue) {
            isGameOver(p1AddPoint);
            isGameOver(p2AddPoint);
        }
    }
});

resetButton.addEventListener('click', reset);

//////////////////////////////////////////////////////////////////////

function reset() {
    p1Score.innerText = "0";
    p2Score.innerText = "0";
    if (p1AddPoint.disabled) {
        isGameOver(p1AddPoint);
        isGameOver(p2AddPoint);
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

}