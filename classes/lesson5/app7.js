let sum = 0;

for(let i = 30; i <= 80; i++) {
    if(i % 2 === 0) {
        sum = sum + i;
    } else {
        continue;
    }
}

document.write(`Sum of all even numbers from 30 to 80: ${sum}`);