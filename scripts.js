const screen = document.querySelector("#calcScreen");
const num = document.querySelectorAll(".num");
const opperators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
var opperatorArray = [];
var numberArray = [];

function equals(){
    console.log("this is the equals button");
}

function operate(){
    let numbertoNumbers = 0;
    if (screen.innerText != "" && screen.innerText.length < 9){
        opperatorArray.push(this.innerText);
        numbertoNumbers = parseInt(screen.innerText);
        numberArray.push(numbertoNumbers);
        clearScreen();
    }
}


function clearScreen(){
    screen.innerText = "";
}

function addToScreen(){
    screen.append(this.innerText);
}

for (let i = 0; i < opperators.length; i++){
    opperators[i].addEventListener("click", operate);
}



for (let i = 0; i < num.length; i++){
    num[i].addEventListener("click", addToScreen);
}

clear.addEventListener("click", clearScreen);