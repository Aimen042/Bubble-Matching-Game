var timer = 60;
var num = 0;
var hit = 0;
var scr = 0;

function makeBubbles() {
    var clusters = "";
    for (var i = 1; i <= 75; i++) {
        num = Math.floor(Math.random() * 10);
        clusters += ` <div class="bubble">${num}</div>`;
        document.querySelector("#gbtm").innerHTML = clusters;
    }
}

function setTimer() {
    var timeval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeval").textContent = timer;
        }
        else {
            clearInterval(timeval);
            document.querySelector("#gbtm").innerHTML = `<h1>Game Over. Your Total Score is ${scr}</h1>`;
        }
    }, 1000);
}

function getHit() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hit;
}

function getScore() {
    scr += 10;
    document.querySelector("#score").textContent = scr;
}

makeBubbles();
getHit();
setTimer();

document.querySelector("#gbtm").addEventListener("click", function (details) {
    var clickedBubbled = Number(details.target.textContent);
    if (clickedBubbled === hit) {
        getScore();
        makeBubbles();
        getHit();
    }
    else{
        alert("Wrong Hit");
    }
})

