const readlineSync = require("readline-sync");
let userAge = new Number(readlineSync.question("Can you give me your age? "));
if (userAge > 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not yet an adult.");
}
