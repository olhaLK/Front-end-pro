const books = [
  { title: "JS для начинающих", price: 500, genre: "programming" },
  { title: "CSS в деталях", price: 300, genre: "design" },
  { title: "React быстро", price: 800, genre: "programming" },
];


function filterProgramming(obj) {
    const result = obj.filter(item => item.genre === "programming");
    console.log(result);
}


function mapNames(obj) {
    const result = obj.map(item => item.title);
    console.log(result);
}


function reducePrices(obj) {
    const result = obj.reduce((prevValue, value) => {
        return prevValue + value.price;
    }, 0);

    console.log(result);
}




filterProgramming(books);
mapNames(books);
reducePrices(books);