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
    return tvSerie;
}

const randomizeCast = tvSerie => {
    const castIndeces = [];
    for (let i = 0; i < tvSerie["cast"].length; i++) {
        castIndeces.push(i);
    }
    let randomIndex;
    const newIndecesOrder = [];
    for (let i = 0; i < castIndeces.length; i++) {
        randomIndex = Math.floor(Math.random() * tvSerie["cast"].length);
        while (newIndecesOrder.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * tvSerie["cast"].length);
        }
        newIndecesOrder.push(randomIndex);
    }
    const randomizedCast = [];
    for (let index of newIndecesOrder) {
        randomizedCast.push(tvSerie["cast"][index]);
    }
    return randomizedCast;
}

const tvSerie = askTvSerie();
console.log(tvSerie["cast"]);
console.log(randomizeCast(tvSerie));
