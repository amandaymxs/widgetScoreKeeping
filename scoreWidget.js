let p1Score = document.querySelector("#p1Score");
let p2Score = document.querySelector("#p2Score");
const p1AddPoint = document.querySelector("#p1AddPoint");
const p2AddPoint = document.querySelector("#p1AddPoint");

//////////////////////////////////////////////////////////////
const winningScore = document.querySelector("#winningScore");

winningScore.addEventListener('click', function () {
    for (let i = 5; i <= 12; i++) {
        let newOption = document.createElement('option');
        newOption.innerText = `${i}`;
        newOption.innerValue = i;
        winningScore.appendChild(newOption);
    }
}, { once: true });

/////////////////////////////////////////////////////////////

p1AddPoint.addEventListener('click', function () {
    console.dir(p1Score);
    p1Score.innerText = parseInt(p1Score.innerText) + 1;
})