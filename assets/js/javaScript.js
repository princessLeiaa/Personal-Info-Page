let timeLeft = 30;
let timerId;
let firstNumber = document.getElementById("demo");
let myData = document.getElementById("myclick1").getElementsByTagName("td");
let totalSumTrue = 0;
let userTrue = 0;
let userFalse = 0;
let userScore = 0;

function startGame1() {
    for (let i = 0; i < myData.length; i++) {
        myData[i].onclick = function() {
            if (this.innerHTML % firstNumber.innerHTML == 0) {
                this.style.backgroundColor = "#0f0";
                this.style.color = "#FFFFFF";
            } else {
                this.style.backgroundColor = "#f00";
                this.style.color = "#FFFFFF";
            }
        };
    }

    firstNumber.innerHTML = generator(3, 9);
    document.getElementById("timer").innerHTML = "Time remaining: 30 seconds";

    fillTable();
    clearTimeout(timerId);
    timeLeft = 30;
    timerId = setInterval(countdown, 1000);
}

function generator(first, last) {
    return Math.floor(Math.random() * (last - first + 1)) + first;
}

function fillTable() {
    for (let i = 0; i < myData.length; i++) {
        myData[i].innerHTML = generator(1, 100);
        myData[i].style.backgroundColor = "#fff"
        myData[i].style.color = "#000"

    }
}

function countdown() {
    document.getElementById("timer").innerHTML = 'Time remaining: ' + timeLeft + " seconds";
    timeLeft--;
    if (timeLeft < 0) {
        clearTimeout(timerId);
        totalScore();
    }

}



// myData[0].addEventListener("click", changeColor);

// function changeColor() {
//     myData[0].style.backgroundColor = "green";
//     console.log('just clicked')
// }


function totalScore() {
    for (let i = 0; i < myData.length; i++) {
        if (myData[i].innerHTML % firstNumber.innerHTML == 0) {
            totalSumTrue++;
            if (myData[i].style.backgroundColor == "rgb(0, 255, 0)") {
                userTrue++;
            } else {
                myData[i].style.backgroundColor = "rgb(172, 255, 172)";
            }
        };

        if (myData[i].style.backgroundColor == "rgb(255, 0, 0)") {
            userFalse++;
        };
        myData[i].onclick = "";
    }

    userScore = ((userTrue / totalSumTrue) - (userFalse / (5 * 5 - totalSumTrue))) * 100;
    userScore = Math.round(userScore);
    document.getElementById("timer").innerHTML = ' Your score is: ' + userScore + '%';
    totalSumTrue = 0;
    userTrue = 0;
    userFalse = 0;
    userScore = 0;
}