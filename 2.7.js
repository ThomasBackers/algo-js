const readlineSync = require("readline-sync");
const userInput = readlineSync.question("Can you give a number? ");
const numbers = [];
for (let i = 1; i <= userInput; i++) {
    numbers.push(i);
}
let sum = 0;
for (let number of numbers) {
    sum += number;
}
console.log(sum);
