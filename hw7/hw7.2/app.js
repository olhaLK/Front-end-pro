function multiplyCurry (a) {
    return (b) => {
        return a * b;
    }
}

let value1 = prompt("Enter your first value");

let value2 = prompt("Enter your second value");

console.log(`Product: ${multiplyCurry(value1)(value2)}`);