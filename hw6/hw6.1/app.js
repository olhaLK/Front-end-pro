
const arrayLength = parseInt(prompt("Enter length of an array"));
alert(`Lenght of the array: ${arrayLength}`);

let arr = [];

for( let i = 0; i < arrayLength; i++) {
    let digit = parseInt(prompt(`Enter your '${i + 1}' digit`));
    arr.push(digit);
    alert(`Your array now: ${arr}. Left ${arrayLength - (i + 1)} keys to write.`);
}

document.write(`<p>Your array : ${arr}</p>`);




function compare(a, b) {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
}

document.write(`<p>Your upsorted array: ${arr.sort(compare)}</p>`);




document.write(`<p>Part of array that will be splicing: ${arr.slice(2, 4)}</p>`);

arr.splice(2, 2);

document.write(`<p>Array after splicing: ${arr}</p>`);