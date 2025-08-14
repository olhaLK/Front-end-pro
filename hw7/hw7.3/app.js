function checkInput(num, i) {
    if (isNaN(num) || num >= 100 || i === 9) {
        console.log(`Last input: ${num}`);
        return true;
    } else if (num < 100) {
        alert("Try again.");
        return false;
    } 
}


function askInput() {
    for (let i = 0; i < 10; i++) {
        let input = parseInt(prompt("Enter number that is bigger than 100."));

        if (checkInput(input, i)) {
            return input; 
        }
    }
}


askInput();

