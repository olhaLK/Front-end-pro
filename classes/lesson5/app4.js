let sum = 0;

for(let i = 1; i <= 15; i++) {
    sum = sum + i;
    document.write(`On step ${i} sum is '${sum}'<br>`);
}

document.write(`Sum of all integers from 1 to 15 is '${sum}'`);