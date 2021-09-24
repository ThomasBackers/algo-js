const readlineSync = require("readline-sync");
const numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}
let numberToGuess = numbers[Math.floor(Math.random() * numbers.length + 1)];
let userInput;
do {
    userInput = parseInt(readlineSync.question("Guess the number: "));
    if (userInput < numberToGuess) {
        console.log("Too low");
    } else if (userInput > numberToGuess) {
        console.log("Too high");
    }
} while (userInput !== numberToGuess);
console.log("Well guessed!");
