let yourNumber = parseInt(prompt("Enter your number: "));
let divisors = 0;

for(let i = 1; i <= yourNumber; i++) {
    if(yourNumber % i === 0) {
        divisors++;
    }
}

if(divisors > 2) {
    document.write("Your number isn't prime.")
} else {
    document.write("Your number is prime!")
}