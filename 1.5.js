const readlineSync = require("readline-sync");
console.log("/!\\ WARNING: Separate all the infos by a white space");
let userInput = readlineSync.question("Can you give me two decimal numbers? ");
userInputs = userInput.split(" ");
