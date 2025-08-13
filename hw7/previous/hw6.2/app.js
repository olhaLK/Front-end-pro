let input = prompt("Enter character sequence of any type");

let yourArray = input.split("");



function findArithmeticMean(arr) {
    let sum = 0;
    let n = 0;

    for(let i = 0; i < arr.length; i++) {
        if(!isNaN(arr[i])) {
            sum += Number(arr[i]);
            n++;
        }
    }

    return n > 0 ? sum / n : 0;
}



document.write(`From "${input}" arithmetic mean is '${findArithmeticMean(yourArray)}'`);