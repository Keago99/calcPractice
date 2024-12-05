const screen = document.querySelector("#calcScreen");
const num = document.querySelectorAll(".num");
const opperators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const equalButton = document.querySelector("#equals");
var opperatorArray = [];
var numberArray = [];
var busyCalc = false;

function equals(){
    if (numberArray.length === 1){
        let equalsNumber = 0
        equalsNumber = parseInt(screen.innerText);
        numberArray.push(equalsNumber);
        console.log(opperatorArray);
        Calculate();
        console.log(opperatorArray);
        busyCalc = true;
    }
}

function Calculate(){
        let newNumber = 0;
        switch(opperatorArray[0]){
            case "+":
                newNumber = numberArray[0] + numberArray[1];
                numberArray.unshift(newNumber);
                opperatorArray.shift();
                numberArray.splice(-2);
                break;
            
            case "-":
                newNumber = numberArray[0] - numberArray[1];
                numberArray.unshift(newNumber);
                opperatorArray.shift();
                numberArray.splice(-2);
                break;
            
            case "X":
                newNumber = numberArray[0] * numberArray[1];
                numberArray.unshift(newNumber);
                opperatorArray.shift();
                numberArray.splice(-2);
                break;
            
            case "%":
                newNumber = numberArray[0] / numberArray[1];
                numberArray.unshift(newNumber);
                opperatorArray.shift();
                numberArray.splice(-2);
                break;
            
            default:
                console.log("its a thing");
                break;
        }
        screen.innerText = numberArray[0].toFixed(2);
    }

function operate(){
    let numbertoNumbers = 0;
    if (busyCalc ===  true){
        opperatorArray.push(this.innerText);
        screen.innerText = "";
        busyCalc = false;
    }

    if (screen.innerText != "" && screen.innerText.length < 9 && numberArray.length < 1){
        opperatorArray.push(this.innerText);
        numbertoNumbers = parseInt(screen.innerText);
        numberArray.push(numbertoNumbers);
        screen.innerText = "";
    }
    else if (screen.innerText.length < 9 && screen.innerText != "" && numberArray.length === 1){
        opperatorArray.push(this.innerText);
        numbertoNumbers = parseInt(screen.innerText);
        numberArray.push(numbertoNumbers);
        Calculate();
        busyCalc = true;
    }
}


function clearScreen(){
    screen.innerText = "";
    opperatorArray = [];
    numberArray = [];
}

function addToScreen(){
    if (busyCalc === true){
        screen.innerText = "";
    }
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