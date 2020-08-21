function startGame2() {
    let myData = document.getElementById("myclick2").getElementsByTagName('td') //myData einai pinakas twn td elements
    let myArray = createArray(myData);
    let clickedTd = '';

    myArray = shuffleArray(myArray);
    for (let i = 0; i < myArray.length; i++) {
        myData[i].innerHTML = myArray[i];
    }

    for (let i = 0; i < myData.length; i++) {
        console.log(clickedTd)
        myData[i].onclick = function() {
            if (clickedTd == '') {
                this.style.boxShadow = "0px 0px 10px 5px rgba(127,221,250,0.85)";
                clickedTd = this //set clickedTd
            } else {
                let temptd = this.innerHTML;
                this.innerHTML = clickedTd.innerHTML;
                clickedTd.innerHTML = temptd;
                clickedTd.style.boxShadow = "none";
                clickedTd = '';
                checkStatus(myData);
            }
        };

    }

}

function createArray(tdarray) {
    let tempArray = [];
    for (let i = 0; i < tdarray.length; i++) {
        tempArray.push(tdarray[i].innerHTML);
    }
    return tempArray;
}

function shuffleArray(a) {
    for (let i = a.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


// tsekarei an exei mpei se seira o pinakas
function checkStatus(array) {
    let status = true;
    for (let i = 0; i < array.length; i++) {
        if (!(array[i].firstChild.src.endsWith("/" + (i + 1) + ".jpg"))) {
            status = false;
        }
    }
    if (status) {
        for (let i = 0; i < array.length; i++) {
            array[i].onclick = "";
        }
        setTimeout(function() { alert("Congrats you solved the puzzle!"); }, 100);
    }
}