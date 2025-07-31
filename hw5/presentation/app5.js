let yourNumber = parseInt(prompt("Enter any integer: "));
let isPowerOfThree = false;

for(let i = 0; 3 ** i <= yourNumber; i++) {
    if(3 ** i === yourNumber) {
        isPowerOfThree = true;
        break;
    } else {
        continue;
    }
}

if(isPowerOfThree) {
    document.write("Your number is a power of 3!");
} else {
    document.write("Your number isn't a power of 3.");
}