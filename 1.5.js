const readlineSync = require("readline-sync");
console.log("/!\\ WARNING: Separate all the inputs by a white space");
const userInput = readlineSync.question("Can you give me two decimal numbers? ");
const userInputs = userInput.split(" ");
let firstNumber = userInputs[0][0], secondNumber = userInputs[1];
console.log(firstNumber * secondNumber);
