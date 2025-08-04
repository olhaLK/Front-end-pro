let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
document.write(`<p>Array: [${arr}]</p>`)



let sumPositiveNum = 0;
let amountPositiveNum = 0;
let amountNegativeNum = 0;
let minNum = 0;
let maxNum = 0;
let minIndex;
let maxIndex;
let amountEvenPositiveNum = 0;
let amountOddPositiveNum = 0;
let sumEvenPositiveNum = 0;
let sumOddPositiveNum = 0;
let productPositiveNum = 1;



for (let i = 0; i < arr.length; i++) {
    if (0 < arr[i]) {
        productPositiveNum *= arr[i];
        sumPositiveNum += arr[i];
        amountPositiveNum++;
        if (arr[i] % 2 === 0) {
            sumEvenPositiveNum += arr[i];
            amountEvenPositiveNum++;
        } else {
            sumOddPositiveNum += arr[i];
            amountOddPositiveNum++;
        }
    } else if (0 > arr[i]) {
        amountNegativeNum++;
    }

    if (minNum >= arr[i]) {
        minNum = arr[i]; 
        minIndex = i;
    } else if (maxNum <= arr[i]) {
        maxNum = arr[i];
        maxIndex = i;
    }
}



document.write(`
    <p>Sum of positive numbers in array: ${sumPositiveNum}</p>
    <p>Amount of positive numbers in array: ${amountPositiveNum}</p>
    <p>Amount of negative numbers in array: ${amountNegativeNum}</p>
    <p>Min number: ${minIndex}: [${minNum}]</p>
    <p>Max number: ${maxIndex}: [${maxNum}]</p>
    <p>Amount of even positive numbers in array: ${amountEvenPositiveNum}</p>
    <p>Amount of odd positive numbers in array: ${amountOddPositiveNum}</p>
    <p>Sum of even positive numbers in array: ${sumEvenPositiveNum}</p>
    <p>Sum of odd positive numbers in array: ${sumOddPositiveNum}</p>
    <p>Product of all even numbers: ${productPositiveNum}</p>
    `);



for (let i = 0; i < arr.length; i++) {
    if (arr[i] === maxNum) {
        continue;
    } else {
        arr[i] = 0;
    }
}

document.write(`New array with 0s: [${arr}]`);