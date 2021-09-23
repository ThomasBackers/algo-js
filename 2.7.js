const readlineSync = require("readline-sync");
const userInput = readlineSync.question("Can you give a number? ");
const numbers = [];
let sum = 0;
for (let i = 1; i <= userInput; i++) {
    sum += i;
}
console.log(sum);
