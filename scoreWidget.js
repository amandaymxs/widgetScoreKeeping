let p1Score = document.querySelector("#p1Score");
let p2Score = document.querySelector("#p2Score");
const p1AddPoint = document.querySelector("#p1AddPoint");
const p2AddPoint = document.querySelector("#p2AddPoint");
const winningScore = document.querySelector("#winningScore");


//////////////////////////////////////////////////////////////
winningScore.addEventListener('click', function () {
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

p1AddPoint.addEventListener('click', function () {
    if (parseInt(p1Score.innerText) < parseInt(winningScore.innerText)) {
        p1Score.innerText = parseInt(p1Score.innerText) + 1;
    }
    console.log(winningScore.innerText);
    console.dir(winningScore.innerHTML);
});

p2AddPoint.addEventListener('click', function () {
    if (parseInt(p2Score.innerText) < parseInt(winningScore.innerText)) {
        p2Score.innerText = parseInt(p2Score.innerText) + 1;
    }
});
