const randomBtn = document.getElementById("randomBtn");
const randomLabel1 = document.getElementById("randomLabel1");
const randomLabel2 = document.getElementById("randomLabel2");
const randomLabel3 = document.getElementById("randomLabel3");

const min=1;
const max=6;

let randomNum1;
let randomNum2;
let randomNum3;


randomBtn.onclick = function(){
    randomNum1 = Math.floor(Math.random() *max) + min;
    randomNum2 = Math.floor(Math.random() *max) + min;
    randomNum3 = Math.floor(Math.random() *max) + min;
    
    randomLabel1.textContent= randomNum1;
    randomLabel2.textContent= randomNum2;
    randomLabel3.textContent= randomNum3;
}