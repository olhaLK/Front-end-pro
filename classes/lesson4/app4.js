let num = parseInt(prompt("Enter your number: "));
console.log(`Your number: ${num} `);

let lastDigit = num % 10;
console.log(`The last digit: ${lastDigit}`);

if (lastDigit % 2 == 0) {
    console.log("This is even number");
} else {
    console.log("This is odd number");
}