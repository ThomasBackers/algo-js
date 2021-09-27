const readlineSync = require("readline-sync");
const MENU = `Hello! Welcome to the Pizza Flavors Manager.

Please choose your actions:

1 - List all pizza flavors
2 - Add a new pizza flavor
3 - Remove a pizza flavor
4 - Exit this program

Enter your action's number: 
`;
const flavors = [];
let userInput;
do {
    userInput = readlineSync.question(MENU);
    switch (userInput) {
        case "1":
            for (let flavor of flavors) {
                console.log(flavor);
            }
            console.log("\n");
            break;
        case "2":
            flavors.push(readlineSync.question("Which flavor would you like to add? "));
            console.log("flavor added\n");
            break;
        case "3":
            const flavor = readlineSync.question("Which flavor would you like to remove? ");
            if (flavors.includes(flavor)) {
                const index = flavors.indexOf(flavor);
                flavors.splice(index, 1);
                console.log("flavor removed\n");
            } else {
                console.log(`can't find ${flavor} in the list`);
            }
            break;
        default:
            console.log("not a valid command\n");
    }
} while (userInput !== "4");
