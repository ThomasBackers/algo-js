const readlineSync = require("readline-sync");
console.log("/!\\ WARNING: Separate all the infos by a white space");
let userInput = readlineSync.question(
    "Can you give me your first name, your name & your city please? "
);
userInputs = userInput.split(" ");
let firstName = userInputs[0],
    name = userInputs[1],
    city = userInputs[2];
console.log("Hello " + firstName, name + " you live in " + city + ".");
