const screen = document.querySelector("#calcScreen");
const num = document.querySelectorAll(".num");
const opperators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const equalButton = document.querySelector("#equals");
var opperatorArray = [];
var numberArray = [];

function Calculate(){
    if (numberArray.length < 1){
        let newNumber = 0;
        switch(opperatorArray[0]){
            case "+":
                newNumber = numberArray[0] + numberArray[1];
                break;
            
            case "-":
                newNumber = numberArray[0] - numberArray[1];
                break;
            
            case "X":
                newNumber = numberArray[0] * numberArray[1];
                break;
            
            case "%":
                newNumber = numberArray[0] / numberArray[1];
                break;
            
            default:
                console.log("its a thing");
                break;
        }
    }
}

function equals(){
    if(screen.innerText !="" && (numberArray.length % 2 != 0)){
        
    }
}

function operate(){
    let numbertoNumbers = 0;
    if (screen.innerText != "" && screen.innerText.length < 9 && numberArray.length < 1){
        opperatorArray.push(this.innerText);
        numbertoNumbers = parseInt(screen.innerText);
        numberArray.push(numbertoNumbers);
        clearScreen();
    }
    else{
        console.log("do something");
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
equalButton.addEventListener("click", equals);