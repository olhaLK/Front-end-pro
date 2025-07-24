let num = 10369;

let digit4 = num % 10;
num = (num - digit4) / 10;

let digit3 = num % 10;
num = (num - digit3) / 10;

let digit2 = num % 10;
num = (num - digit2) / 10;

let digit1 = num % 10;
num = (num - digit1) / 10;

let digit0 = num % 10;

console.log(`${digit0} ${digit1} ${digit2} ${digit3} ${digit4}`);
