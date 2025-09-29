class House {
    appartments = new Map();

    addAppartment(...objs) {
        objs.forEach(obj => this.appartments.set(obj.number, obj));
    }
}



class Appartment {
    constructor(number, roomsAmount, inhAmount) {
        this.number = number;
        this.roomsAmount = roomsAmount;
        this.inhAmount = inhAmount;
        this.inhabitants = new Set();
    }

    addInhabitant(name) {
        this.inhabitants.add(name);
    }
}



const bigHouse = new House();



let appartmentsAmount = parseInt(prompt('Enter appartments amount in your house'));
while (!appartmentsAmount) {
    appartmentsAmount = parseInt(prompt('Please enter a valid number for apartments amount'));
}



for (let i = 1; i <= appartmentsAmount; i++) {
    let roomsAmount = parseInt(prompt('Enter rooms amount im this appartment'));
    while (!roomsAmount) {
        roomsAmount = parseInt(prompt('Please enter a valid number for rooms amount'));
    }


    let maxInhAmount = parseInt(prompt('Enter max of inhabitants amount in this appartment'));
    while (!maxInhAmount) {
        maxInhAmount = parseInt(prompt('Please enter a valid number for max inhabitants amount'));
    }


    const appartment = new Appartment(i, roomsAmount, maxInhAmount);


    let inhAmount = parseInt(prompt('Enter inhabitants amount in this appartment'));
    while (!inhAmount) {
        inhAmount = parseInt(prompt('Please enter a valid number for inhabitants amount'));
    }


    while (maxInhAmount < inhAmount) {
        console.log(`You can't go out of limit. Your max amount of inhabatants is ${this.inhAmount}.`);
        inhAmount = parseInt(prompt('Enter inhabitants amount in this appartment'));
    }


    for (let j = 0; j < inhAmount; j++) {
        const name = prompt(`Enter name of ${j + 1} inhabitant`);
        appartment.addInhabitant(name);
    }


    bigHouse.addAppartment(appartment);
}



console.log(bigHouse);