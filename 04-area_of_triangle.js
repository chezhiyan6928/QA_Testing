// Importing the readline module to get user input
const readline = require('readline');

// Creating an interface for reading input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for b & h
rl.question("Enter the value of breadth (b): ", (b) => {
    rl.question("Enter the value of length (l): ", (l) => {
        let area = 0.5 * Number(b) * Number(l);
        console.log("Area of triangle is: ", area);
        rl.close()
    });
});