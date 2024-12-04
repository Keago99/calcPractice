const screen = document.querySelector("#calcScreen");
const num = document.querySelectorAll(".num");
const opperators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
var operators = {};
var numbers = {};


function operate(){
    if (screen.innerText != "" && screen.innerText.length < 9){
        switch (this.innerText){
            case "+":
                console.log("its a plus");
                break;
            
            case "-":
                console.log("its a minus");
                break;
            
            case "%":
                console.log("its a divide");
                break;

            case "X":
                console.log("its a multiplication");
                break;
            default:
                console.log("who knows what it is");
        }
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