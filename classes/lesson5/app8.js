document.write("All numbers from 100 to 200 multiples of 3: <br>");

for(let i = 100; i <= 200; i++) {
    if(i % 3 === 0) {
        document.write(`${i}<br>`);
    } else {
        continue;
    }
}