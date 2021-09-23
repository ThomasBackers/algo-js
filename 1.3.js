const readlineSync = require("readline-sync");
const firstName = readlineSync.question("Can you give me your first name, please? ");
console.log("Hello " + firstName);
