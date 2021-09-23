const readlineSync = require("readline-sync");
console.log("/!\\ WARNING: Separate all the inputs by a white space");
const userInput = readlineSync.question("Can you give me two integer numbers? ");
const userInputs = userInput.split(" ");
const firstInt = userInputs[0], secondInt = userInputs[1];
console.log(firstInt % secondInt);
