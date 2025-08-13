function removeElement(arr, item) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === item) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

const array = [1, 3, 4, 6, 2, 5, 7];
console.log(removeElement(array, 4));