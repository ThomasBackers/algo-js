const readlineSync = require("readline-sync");
const userInput = readlineSync.question("the factorial of which number do you want? ");
//non-recursive
const factorial = a => {
    let product = 1;
    if (a < 0) {
        return "Sorry, but it's a factorial algorithm =/";
    }
    if (a == 0) {
        return product;
    }
    for (let i = 1; i <= a; i++) {
        product *= i;
    }
    return product;
};
console.log(factorial(userInput));
//recursive
const recursiveFactorial = a => {
    if (a < 0) {
        return "Sorry, but it's a factorial algorithm =/";
    }
    if (a == 0 || a == 1) {
        return 1;
    } else {
        return a * recursiveFactorial(a - 1);
    }
};
console.log(recursiveFactorial(userInput));
