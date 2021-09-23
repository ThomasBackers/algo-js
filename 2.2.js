const readlineSync = require("readline-sync");
console.log("/!\\ WARNING: Separate all the inputs by a white space");
const userInput = readlineSync.question(
    "Can you give me a minimum value, a maximum value and a current value? "
);
const userInputs = userInput.split(" ");
const minimum = new Number(userInputs[0]),
    maximum = new Number(userInputs[1]),
    current = new Number(userInputs[2]);
if (minimum > maximum) {
    console.log("ERROR: sorry but your minimum is bigger than your maximum");
} else {
    if (minimum < current && current < maximum) {
        console.log("current value is between minimum and maximum");
    } else {
        console.log("current value is not between minimum and maximum");
    }
}
