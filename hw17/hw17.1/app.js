class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }
}

const calc = new Calculator();

console.log(`Add: 5 + 3 = ${calc.add(5, 3)}`); 

console.log(`Subtract: 10 - 4 = ${calc.subtract(10, 4)}`); 

console.log(`Multiply: 3 * 6 = ${calc.multiply(3, 6)}`); 

console.log(`Divide: 8 / 2 = ${calc.divide(8, 2)}`); 