// Import the crypto module
const crypto = require("crypto");

// Get command line arguments
const args = process.argv.slice(2); // Slice off the first two arguments (node and script path)

// Check if enough arguments are provided
if (args.length < 2) {
  console.log("Please provide an operation and at least one number.");
  process.exit(1); // Exit the process with an error code
}

const operation = args[0].toLowerCase(); // The first argument is the operation
const numbers = args.slice(1).map(Number); // Convert remaining arguments to numbers

// Function to handle random number generation with a specified length
function generateRandomNumber(length) {
  return crypto.randomBytes(length).toString("hex"); // Hexadecimal string representation
}

// Perform the appropriate calculation based on the operation
switch (operation) {
  case "add":
    if (numbers.length < 2) {
      console.log("Addition requires at least two numbers.");
    } else {
      const sum = numbers.reduce((acc, curr) => acc + curr, 0);
      console.log(`Result of addition: ${sum}`);
    }
    break;

  case "sub":
    if (numbers.length < 2) {
      console.log("Subtraction requires at least two numbers.");
    } else {
      const difference = numbers.reduce((acc, curr) => acc - curr);
      console.log(`Result of subtraction: ${difference}`);
    }
    break;

  case "mult":
    if (numbers.length < 2) {
      console.log("Multiplication requires at least two numbers.");
    } else {
      const product = numbers.reduce((acc, curr) => acc * curr, 1);
      console.log(`Result of multiplication: ${product}`);
    }
    break;

  case "divide":
    if (numbers.length < 2) {
      console.log("Division requires at least two numbers.");
    } else {
      const quotient = numbers.reduce((acc, curr) => acc / curr);
      console.log(`Result of division: ${quotient}`);
    }
    break;

  case "sin":
    if (numbers.length !== 1) {
      console.log(
        "Sine operation requires exactly one number (angle in radians)."
      );
    } else {
      const result = Math.sin(numbers[0]);
      console.log(`Result of sine: ${result}`);
    }
    break;

  case "cos":
    if (numbers.length !== 1) {
      console.log(
        "Cosine operation requires exactly one number (angle in radians)."
      );
    } else {
      const result = Math.cos(numbers[0]);
      console.log(`Result of cosine: ${result}`);
    }
    break;

  case "tan":
    if (numbers.length !== 1) {
      console.log(
        "Tangent operation requires exactly one number (angle in radians)."
      );
    } else {
      const result = Math.tan(numbers[0]);
      console.log(`Result of tangent: ${result}`);
    }
    break;

  case "random":
    if (numbers.length !== 1) {
      console.log("Provide length for random number generation.");
    } else {
      const randomNumber = generateRandomNumber(numbers[0]);
      console.log(`Generated random number: ${randomNumber}`);
    }
    break;

  default:
    console.log(
      "Invalid operation. Supported operations: add, sub, mult, divide, sin, cos, tan, random"
    );
}
