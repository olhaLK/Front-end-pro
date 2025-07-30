let sum = 0;
let n = 0;

for(let i = 1; i <= 500; i++) {
    sum = sum + i;
    n++;
}

let arithmeticMean = sum / n;

document.write(`Arithmetic mean of all integers from 1 to 500: ${arithmeticMean}`);