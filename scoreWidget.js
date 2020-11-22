let p1Score = document.querySelector("#p1Score");
let p2Score = document.querySelector("#p2Score");
const p1AddPoint = document.querySelector("#p1AddPoint");
const p2AddPoint = document.querySelector("#p2AddPoint");
const winningScore = document.querySelector("#winningScore");
const resetButton = document.querySelector(".resetButton");
//////////////////////////////////////////////////////////////

// winningScore.addEventListener('load', function () {
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

/////////////////////////////////////////////////////////////


//Note: winningScore.innerText is "5↵6↵7↵8↵9↵10↵11↵12" while winningScore.value is the selected string option.
p1AddPoint.addEventListener('click', function () {
    let winnningScoreValue = parseInt(winningScore.value);
    if (parseInt(p1Score.innerText) < winnningScoreValue) {
        p1Score.innerText = parseInt(p1Score.innerText) + 1;
        if (p1Score.innerText == winningScore.value) {
            //add function to disable buttons - toggle
            toggle(p1AddPoint);
            toggle(p2AddPoint);
        }
    }
    console.dir(p1AddPoint);
});

p2AddPoint.addEventListener('click', function () {
    let winnningScoreValue = parseInt(winningScore.value);
    if (parseInt(p2Score.innerText) < parseInt(winningScore.value)) {
        p2Score.innerText = parseInt(p2Score.innerText) + 1;
        if (p1Score.innerText == winningScore.value) {
            toggle(p1AddPoint);
            toggle(p2AddPoint);
        }
    }
});

console.dir(resetButton);
resetButton.addEventListener('click', function () {
    p1Score.innerText = "0";
    p2Score.innerText = "0";
    if (p1AddPoint.disabled == true) {
        toggle(p1AddPoint);
        toggle(p2AddPoint);
    }
})
//////////////////////////////////////////////////////////////////

function toggle(button) {
    switch (button.disabled) {
        case true:
            button.disabled = false;
            break;
        case false:
            button.disabled = true;
            break;
    }

}