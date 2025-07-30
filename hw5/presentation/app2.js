const rateDollar = 42;
let hrywna = 0;

for(let i = 10; i <= 100; i += 10) {
    hrywna = i * rateDollar;
    document.write(`${i}$ = ${hrywna}₴<br>`);
}