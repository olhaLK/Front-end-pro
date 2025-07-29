let yourNumber = parseInt(prompt("Enter three digit number: "));

if( yourNumber > 99 && yourNumber <= 999) {
    let digit2 = yourNumber % 10;
    yourNumber = (yourNumber - digit2) / 10;

    let digit1 = yourNumber % 10;
    yourNumber = (yourNumber - digit1) / 10;

    let digit0 = yourNumber % 10;
    yourNumber = (yourNumber - digit0) / 10;

    if(digit0 === digit1 && digit1 === digit2) {
        alert("All numbers are equal");
    } else if(digit0 === digit1) {
        alert("First and second digits are equal")
    } else if(digit1 === digit2) {
        alert("Second and third digits are equal")
    } else if(digit0 === digit2) {
        alert("First and third digits are equal")
    } else {
        alert("Numbers are not equal");
    }
} else {
    alert("Incorrect number!");
}