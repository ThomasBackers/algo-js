const readlineSync = require("readline-sync");
const calcSurface = (length, width) => {
    //calculates the surface of a rectangle by giving its length & its width
    return length * width;
};
console.log("/!\\ WARNING: Separate all the inputs by a white space");
const userInput = readlineSync.question(
    "Can you give me the length and the width of your rectangle? "
);
const userInputs = userInput.split(" ");
console.log(
    calcSurface(
        new Number(userInputs[0]),
        new Number(userInputs[1])
    )
);
