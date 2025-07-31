let product = 0;

for(let i = 1; i <= 10; i++) {
    for(let j = 1; j <= 10; j++) {
        product = i * j;
        document.write(`${i} * ${j} = ${product}<br>`);
    }
    document.write(`<br><br>`);
}