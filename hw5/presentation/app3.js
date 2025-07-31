let integerNum = parseInt(prompt("Enter anu interger number:"));
let square = 0;

document.write("All squares of numbers from 1 to 100 that are smaller than your input: ");

for(let i = 1; i <= 100; i++) {
    square = i ** 2;
    if(square < integerNum) {
        document.write(`<br>${i} = ${square}`);
    }
}