const readlineSync = require("readline-sync");
console.log("/!\\ WARNING: Separate all the inputs by a white space");
let userInput = readlineSync.question("Can you give me two integer numbers? ");
userInputs = userInput.split(" ");
let firstInt = new Number(userInputs[0]), secondInt = new Number(userInputs[1]);
console.log(firstInt % secondInt);
