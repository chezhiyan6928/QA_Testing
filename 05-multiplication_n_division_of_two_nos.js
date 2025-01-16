// Importing the readline module to get user input
const readline = require("readline");

// Creating an interface for reading input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function for multiplication
function multiplication(a,b){
    return a * b;
}

// Function for division
function division(a,b){
    if (b == 0){
        return "Divison by zero is not allowed..."
    }
    return a / b;
}

// Prompt the user for input
rl.question("Enter the first number: ", (n1) => {
    rl.question("Enter the second number: ", (n2) => {
        const num1 = parseFloat(n1);
        const num2 = parseFloat(n2);

        //calling the functions to perform calculations
        const mul = multiplication(num1, num2);
        const div = division(num1, num2);

        console.log(`Multiplication of ${num1} and ${num2} is: ${mul}`);
        console.log(`Divison of ${num1} by ${num2} is ${div}`);

        //closing the interface
        rl.close();
    });
});