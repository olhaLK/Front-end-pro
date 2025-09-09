do {
    let userName = prompt("Enter your name: ");
    const check = userName.match(/[a-zA-Z][a-zA-Z0-9_]+/);
} while (3 < userName && userName > 15) {
    alert("Name should be from 3 to 15 symbols");
}


