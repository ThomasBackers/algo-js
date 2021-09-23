const readlineSync = require("readline-sync");
const rand10 = () => {
    /**return a random integer from 0 to 10 included*/
    return Math.ceil(Math.random() * 10);
}
const multirand = (n) => {
    /**return a array of n random integers from 0 to 10 included*/
    const array = [];
    for (let i = 0; i < n; i++) {
        array.push(rand10());
    }
    return array;
}
const userInput = readlineSync.question("How many random numbers do you want? ");
console.log(multirand(userInput));
