const readlineSync = require("readline-sync");
console.log("/!\\ WARNING: Separate all the inputs by a white space");
let userInput = readlineSync.question("Can you give me two decimal numbers? ");
userInputs = userInput.split(" ");
let firstNumber = new Number(userInputs[0][0]), secondNumber = new Number(userInputs[1]);
console.log(firstNumber * secondNumber);
