let userYear = parseInt(prompt("Enter your birth year: "));
let age = '';

if(userYear === null) {
    alert("It's a shame you didn't want to enter your year of birth")
} else {
    age = 2025 - userYear;
}


let userCity = prompt("Enter city where you live: ");
let city = '';

if(userCity === null) {
    alert("It's a shame you didn't want to enter your city");
} else {
    if(userCity === "Kyiv" || userCity === "kyiv") {
    city = "You are living in the capital of Ukraine";
    } else if(userCity === "London" || userCity === "london") {
        city = "You are living in the capital of UK";
    } else if(userCity === "Washington" || userCity === "washington") {
        city = "You are living in the capital of USA";
    } else {
        city = `You are living in the ${userCity} city`;
    }
}


let userSport = prompt("Enter your favorite type of sport: ");
let sport = '';

if(userSport === null) {
    alert("It's a shame you didn't want to enter your favorite type of sport");
} else {
    if(userSport === "Boxing" || userSport === "boxing") {
    sport = "Cool! Would you like to be as Alexander Usyk?";
    } else if(userSport === "Swimming" || userSport === "swimming") {
        sport = "Cool! Would you like to be as Michael Phels?";
    } else if(userSport === "Biathlon" || userSport === "biathlon") {
        sport = "Cool! Would you like to be as Ole Einar Bjorndalen?";
    } else {
        sport = `Cool! You like ${userSport}`;
    }
}


alert(`Age: ${age}
${city}
${sport}`);
