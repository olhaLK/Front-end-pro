let firstDist = parseInt(prompt("Enter a first distance in km:")) * 1000;
let secondDist = parseInt(prompt("Enter a second distance in f:")) * 0.305;

console.log(`First distance: ${firstDist} m`);
console.log(`Second distance: ${secondDist} m`);

if (firstDist > secondDist) {
    console.log('The second distance is smaller');
} else if (firstDist < secondDist) {
    console.log('The first distance is smaller');
} else {
    console.log('Distances are equal');
}
