var screen = document.querySelector("#calcScreen");
var num = document.querySelectorAll(".num");
numberino = 0;

function addToScreen(){
    screen.append(this.innerText);
}

for (let i = 0; i < num.length; i++){
    num[i].addEventListener("click", addToScreen);
}