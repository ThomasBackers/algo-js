const readlineSync = require("readline-sync");
const askTvSerie = () => {
    console.log("/!\\ WARNING: Separate all the inputs by a comma + a white space");
    const userInput = readlineSync.question("What's the name,\nthe year of production\nand the cast members of your serie?\n");
    const userInputs = userInput.split(", ");
    const name = userInputs.shift(), yearOfProduction = userInputs.shift();
    const tvSerie = {
        name: name,
        yearOfProduction: yearOfProduction,
        cast: userInputs
    };
    console.log(tvSerie);
}
askTvSerie();
