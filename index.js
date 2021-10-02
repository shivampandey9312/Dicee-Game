let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*6)+1;

let imageSource1 = "images/dice" + randomNumber1 + ".png";
let imageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",imageSource1);
document.querySelectorAll("img")[1].setAttribute("src",imageSource2);

if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML = "Player 1 wins";
else if(randomNumber1<randomNumber2)
document.querySelector("h1").innerHTML = "Player 2 Wins";
else
document.querySelector("h1").innerHTML = "DRAW";

// Dice rolling function and updating the page 
function Roll_Dice(){
    randomNumber1 = Math.floor(Math.random()*6)+1;
    randomNumber2 = Math.floor(Math.random()*6)+1;
    imageSource1 = "images/dice" + randomNumber1 + ".png";
    imageSource2 = "images/dice" + randomNumber2 + ".png"
    if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML = "Player 1 wins";
else if(randomNumber1<randomNumber2)
document.querySelector("h1").innerHTML = "Player 2 Wins";
else
document.querySelector("h1").innerHTML = "DRAW";
document.querySelectorAll("img")[0].setAttribute("src",imageSource1);
document.querySelectorAll("img")[1].setAttribute("src",imageSource2);
}

// Event to listen the click on the button 
document.getElementById("RollDice").addEventListener("click",Roll_Dice)