const readlineSync = require("readline-sync");
userInput = parseInt(readlineSync.question("How many Fibonacci numbers do you want ? "));
let a = 0,
    b = 1,
    c;
if (userInput < 1) {
} else if (userInput === 1) {
    console.log(a);
} else {
    console.log(`${a}\n${b}`);
    for (let i = 0; i < userInput - 2; i++) {
        c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}
