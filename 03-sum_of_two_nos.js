// Importing the readline module to get user input
const readline = require('readline');

// Creating an interface for reading input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Function to calculate the sum of the given two numbers

// function sumOfTwoNos(n1,n2){
//     return n1 + n2;
// }

// Prompt the user for n1 & n2

rl.question("Enter the first number: ", (n1) => {
    rl.question("Enter the second number", (n2) => {
        let sum = Number(n1) + Number(n2);
        console.log("Sum of the given two numbers is: ", sum);
        rl.close();
    });
});

