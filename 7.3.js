const readlineSync = require("readline-sync");
userInput = parseInt(readlineSync.question("Give me a positive integer: "));
if (userInput < 0) {
    console.log("a +POSITIVE+ integer");
} else {
    for (let i = 2; i < userInput - 2; i++) {
        if (userInput % i === 0) {
            console.log(i);
        }
    }
}
