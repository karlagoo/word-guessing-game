//Global Variables
let answerArray = []
var commonWords = ["array", "boolean", "console", "function", "hoisting", "loop", "NaN", "objects", "prompt", "string", "variables"];


//split random strings within an array to a new array
const randomWord = commonWords.split('');

// Grabbing random word 
 function randomWords() {
    randomWord = Math.floor(Math.random()*commonWords.length);
    console.log(randomWords)
}; 

const maxGuesses = 1;

var guessedLetters = [];
var guessedWords = [];




let word;
// function that submit the values 



//Button to start the game
// startButton.addEventListener("click", function(event) {
//     event.preventDefault();
// })


//Box to display the word in

// make sure that each word is hidden
// let userGuess = function showBlank() {
//     for (i = 0; i < word.length; i++) {
//         answerArray[i] = "_"
//     }
//     $("guess").innerHTML = answerArray.join(" ");
// }

// Create hidden element on screen 

// var container = document.querySelector(".container");
// container.addEventListener("click", function (event) {
//     var element = event.target;

//     var state = commonWords.getAttribute("data-state");

//     if (state === "hidden") {

//         var ______ = [__________]
//     }

//     element.setAttribute("data-state", "display");
//     element.innerHTML = ________;
// }


//display the new array on screen


//make keyup event for when the used begins to type guesses
document.onKeyup = function(event) {
    
    if(___ (event.key) && ___) {

userGuess = event.key.toLowerCase();
}

// keep score


// function keydownAction(event) {
  // We must make it our own (from activity 16)
//   document.querySelector("#status").innerHTML = "KEYDOWN Event";
//   document.querySelector("#key").innerHTML = event.key;
//   document.querySelector("#code").innerHTML = event.code; 
// }

// function keyupAction() {
//   document.querySelector("#status").innerHTML = "KEYUP Event";
// }

// document.addEventListener("keyup", keyupAction);
