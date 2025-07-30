let numbersDegree = '';


for (let i = 10; i <= 20; i++) {
    numbersDegree = i ** 2;
    
    if(i === 20) {
        document.write(numbersDegree);
    } else {
        document.write(numbersDegree + ", ");
    }
}