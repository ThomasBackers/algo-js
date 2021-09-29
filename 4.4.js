const average = arr => {
    /**returns the average number of a numerical array*/
    let sum = 0;
    for (let elt of arr) {
        sum += elt;
    }
    return sum / arr.length;
};
const min = arr => {
    /**return the minimum of a numerical array*/
    let min = arr[0];
    for (let elt of arr) {
        if (elt < min) {
            min = elt;
        }
    }
    return min;
};
const max = arr => {
    /**return the maximum number of a numerical array*/
    let max = arr[0];
    for (let elt of arr) {
        if (elt > max) {
            max = elt;
        }
    }
    return max;
};
const rand10 = () => {
    /**return a random integer from 1 to 10 included*/
    return Math.ceil(Math.random() * 10);
};
const multirand = n => {
    /**return a array of n random integers from 1 to 10 included*/
    const array = [];
    for (let i = 0; i < n; i++) {
        array.push(rand10());
    }
    return array;
};
const readlineSync = require("readline-sync");
const userInput = readlineSync.question("How many random numbers do you want in the array? ");
const array = multirand(userInput);
console.log(array);
console.log("average:", average(array), "\nmin:", min(array), "\nmax:", max(array));
