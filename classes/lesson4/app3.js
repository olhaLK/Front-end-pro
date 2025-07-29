let a = parseInt(prompt("Enter a: "));
let b = parseInt(prompt("Enter b: "));

console.log(`a : ${a}`);
console.log(`b : ${b}`);

if (a > b) {
    console.log(a % b == 0 ? "'b' is divisor of a number 'a'" : "'b' is not divisor of a number 'a'");
} else if (a < b) {
    console.log(b % a == 0 ? "'a' is divisor of a number 'b'" : "'a' is not divisor of a number 'b'");
} else {
    console.log("Unexpected situation");
}