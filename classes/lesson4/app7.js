let yourNumber = parseInt(prompt("Enter six digit number"));

let digit5 = yourNumber % 10;
yourNumber = (yourNumber - digit5) / 10;

let digit4 = yourNumber % 10;
yourNumber = (yourNumber - digit4) / 10;

let digit3 = yourNumber % 10;
yourNumber = (yourNumber - digit3) / 10;

let digit2 = yourNumber % 10;
yourNumber = (yourNumber - digit2) / 10;

let digit1 = yourNumber % 10;
yourNumber = (yourNumber - digit1) / 10;

let digit0 = yourNumber % 10;
yourNumber = (yourNumber - digit0) / 10;


if(digit0 === digit5 && digit1 === digit4 && digit2 === digit3) {
    alert("The number is mirror");
} else {
    alert("The number isn't mirror");
}