"use strict";

window.addEventListener("load", start);

let guessCounter = 0;

function start(){
    console.log("Script running...");
    updateBtns();
}

function guess(){
    document.getElementById("guess").textContent = `${Math.floor(Math.random() * 100) + 1}`;
    guessCounter++; 
    updateBtns();
}

function guessTooHigh(){
    guess();
}

function guessTooLow(){
    guess();
}

function guessCorrect(){
    document.getElementById("btns").innerHTML = 
    `
    <h2>Yay!</h2>
    <p>It took ${guessCounter} guesses</p>
    <button id="restartBtn">Reload</button>
    `;
    document.getElementById("restartBtn").addEventListener("click", ()=>{location.reload()});
}

function updateBtns(){
    if(guessCounter) {
        document.getElementById("startBtn").classList.add("hidden");
        document.getElementById("correctBtn").addEventListener("click", guessCorrect);
        document.getElementById("tooHighBtn").addEventListener("click", guessTooHigh);
        document.getElementById("tooLowBtn").addEventListener("click", guessTooLow);
    } else {
        document.getElementById("startBtn").addEventListener("click", guess);
    }
}