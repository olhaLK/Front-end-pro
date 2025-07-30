let naturalNumber = parseInt(prompt("Enter natural number: "));
let evenDivisors = 0;
let sumEvenDivisors = 0;

document.write(`All divisors of a number ${naturalNumber}: `);

for(let i = 0; i <= naturalNumber; i++) {
    if(naturalNumber % i === 0) {
        document.write(`${i}; `);
        if(i % 2 === 0) {
            evenDivisors++;
            sumEvenDivisors = sumEvenDivisors + i;
        }
    }
}

document.write(`<br>Count of even divisors: ${evenDivisors}
    <br>Sum of even divisors: ${sumEvenDivisors}`);