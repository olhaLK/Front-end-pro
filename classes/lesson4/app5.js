let doubleDigit = parseInt(prompt("Enter double digit:"));

if (doubleDigit > 9 && doubleDigit <= 99) {
    let digit1 = doubleDigit % 10;
    doubleDigit = (doubleDigit - digit1) / 10;

    let digit0 = doubleDigit % 10;
    doubleDigit = (doubleDigit - digit0) / 10;
    if(digit0 > digit1) {
        alert("First digit is bigger");
    } else if(digit0 < digit1) {
        alert("Second digit is bigger");
    } else {
        alert("Digits are equal");
    }
} else {
    alert("Incorrect number!")
}