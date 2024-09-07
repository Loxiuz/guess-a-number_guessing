"use strict";

window.addEventListener("load", start);

let min = 1;
let max = 100;
let guessCounter = 0;

function start(){
    console.log("Script running...");
    updateBtns();
}

function showGuess(guess){
    console.log("Guesses: " + guessCounter);

    document.getElementById("guess").textContent = guess;   
}

function isLastGuess(){
    return max === mid() && mid() === min
}

function newGuess(){
    if(isLastGuess()){ 
        //If it's the last possible guess
        noGuessesLeft();
    }
    guessCounter++;
    showGuess(mid());
    updateBtns();
}

function mid(){
    return Math.floor((min + max) / 2)
}

function guessTooHigh(){
    console.log("Too High")
    max = mid() - 1
    newGuess()
}

function guessTooLow(){
    console.log("Too low")
    min = mid() + 1
    newGuess()
}

function compare(search, value){
    return search - value;
}

function noGuessesLeft(){
    document.getElementById("last-guess-msg").textContent = "Last Possible Guess!";
    updateBtns();
}

function guessCorrect(){
    console.log("Guessed Correct!")
    document.getElementById("btns-container").innerHTML = 
    `
    <p>${endCounterMessage()}</p>
    <button id="restartBtn">Reload</button>
    `;
    document.getElementById("restartBtn").addEventListener("click", ()=>{location.reload()});
}

function endCounterMessage(){
    let msg = "";
    if(guessCounter > 5){
        msg = "Not very impressive..."
    } else if(guessCounter < 3) {
        msg = "Extraordinary!"
    } else {
        msg = "Not too bad!"
    }

    return `It took ${guessCounter} guesses. <br> ${msg}`
}

function updateBtns(){
    console.log("Min: " + min)
    console.log("Mid: " + mid())
    console.log("Max: " + max)
    if(guessCounter) {
        document.getElementById("startBtn").classList.add("hidden");
        document.getElementById("correctBtn").addEventListener("click", guessCorrect);
        document.getElementById("tooHighBtn").addEventListener("click", guessTooHigh);
        document.getElementById("tooLowBtn").addEventListener("click", guessTooLow);
    } else {
        document.getElementById("startBtn").addEventListener("click", newGuess);
    }
    if(isLastGuess()){
        document.getElementById("tooHighBtn").classList.add("hidden")
        document.getElementById("tooLowBtn").classList.add("hidden");
    }
}