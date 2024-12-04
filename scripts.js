const screen = document.querySelector("#calcScreen");
const num = document.querySelectorAll(".num");
const clear = document.querySelector("#clear");

function clearScreen(){
    screen.innerText = "";
}


function addToScreen(){
    screen.append(this.innerText);
}

for (let i = 0; i < num.length; i++){
    num[i].addEventListener("click", addToScreen);
}

clear.addEventListener("click", clearScreen);