const myArray = [1, 2, 7, 8, 10, 8, 19, 22];

const newArray = [...myArray].filter(num => num % 2 === 0);

document.write(`
    <p>My array: ${myArray}</p>
    <p>Even numbers array: ${newArray}</p>
    `);