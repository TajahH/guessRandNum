const readline = require("readline-sync");

let randNum = Math.floor(Math.random()*100+1) 
let guesses = 0;
let userNum = "";
console.log(randNum)
do {

    userNum = readline.question("Guess a number between 1 and 100, and see if it matches the computer: ");
    guesses++;
   
    
    if (userNum > randNum) {
    console.log("The numbers are not the same. Your value is too high")
    }

    if (userNum < randNum){
    console.log("The numbers are not the same. Your value is too low")
        }
    } while (randNum != userNum)

    console.log(`The computer picked also picked ${randNum}, correct answer! This took ${guesses} tries.`)
