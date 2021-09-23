const readlineSync = require("readline-sync");
let userInput = readlineSync.question("Can you give me your favorite number? ");
while (userInput != 42) {
    console.log("Are you sure?");
    userInput = readlineSync.question("Can you give me your favorite number? ");
}
console.log("I knew it was 42 ;)");
