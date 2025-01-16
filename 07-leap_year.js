// Importing the readline module to get user input
const readline = require("readline");

// Creating an interface for reading input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function for leap year
function leapYear(year){
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
        return true;
    }
    return false;
}

// Prompt the user for input
rl.question("Enter any year: ", (y) => {
    const year = parseInt(y);

    if (isNaN(year)){
        console.log("Please enter a valid number...");
    }
    else{
        if (leapYear(year)){
            console.log(`${year} is a leap year`);
        }
        else{
            console.log(`${year} is not a leap year`);
        }
    }

    rl.close();
});