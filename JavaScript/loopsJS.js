// let a = prompt("Enter your number : ");
// let b = 25;

// while (parseInt(a) !== b) {
//     a = prompt("You've entered the wrong number! Please try again: ");
// }

// console.log("Congratulations! You entered the correct number.");

// Prompt the user to enter a number
let num = parseInt(prompt("Enter a number:"));

// Check if the input is a valid number
if (!isNaN(num)) {
    // Loop through numbers from 1 to num and print each one
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
} else {
    console.log("Invalid input. Please enter a valid number.");
}
