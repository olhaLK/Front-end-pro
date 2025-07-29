let yourNumber = parseInt(prompt("Enter three digit number: "));


if(yourNumber > 99 && yourNumber <= 999) {
    let digit2 = yourNumber % 10;
    yourNumber = (yourNumber - digit2) / 10;

    let digit1 = yourNumber % 10;
    yourNumber = (yourNumber - digit1) / 10;

    let digit0 = yourNumber % 10;
    yourNumber = (yourNumber - digit2) / 10;

    let sum = digit0 + digit1 + digit2;
    let product = digit0 * digit1 * digit2;
    

    if(sum % 2 === 0) {
        alert("Sum of the digits is even");
    } else {
        alert("Sum of the digits is odd");
    }


    if(sum % 5 === 0) {
        alert("Sum of the digits is a multiple of 5");
    } else {
        alert("Sum of the digits isn't multiple of 5");
    }


    if(product > 100) {
        alert("Product of the digits is bigger than 100");
    } else {
        alert("Product of the digits isn't bigger than 100");
    }


    if(digit0 === digit1 && digit1 === digit2) {
        alert("All digits are equal");
    } else if(digit0 === digit1) {
        alert("First and second digits are equal");
    } else if(digit1 === digit2) {
        alert("Second and third digits are equal");
    } else if(digit0 === digit2) {
        alert("First and third digits are equal");
    } else {
        alert("Digits aren't equal");
    }
} else {
    alert("Incorrect number!")
}