function calculateSum() {
    let total = 0;
    return function(num) {
        total += num;
        return total;
    }
}

let sum = calculateSum();

while(true) {
    let input = prompt("Enter any number to summary with previous one. Type 'stop' to finish.");
   
    if (input === 'stop') {
        break;
    } else {
        let yourNum = parseInt(input);
        console.log("Current total:", sum(yourNum));
    }
}