// Importing the readline module to get user input
const readline = require("readline");

// Creating an interface for reading input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// function to check the given two numbers
function checkNumbers(n1, n2){
    if ((n1 > 0 && n2 < 0) || (n1 < 0 && n2 > 0)){
        console.log("One number is positive and the other one is negative!");
    }
    else if (n1 < 0 && n2 < 0){
        console.log("Both the numbers are negative!");
    }
    else{
        console.log("Both the numbers are positive!");
    }
}

// prompt the user for input
rl.question("Enter the first number: ", (n1) => {
    rl.question("Enter the second number: ", (n2) => {
        const num1 = parseInt(n1);
        const num2 = parseInt(n2);

        checkNumbers(num1, num2);

        rl.close();
    });
});