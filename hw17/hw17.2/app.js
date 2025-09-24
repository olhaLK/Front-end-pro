class Coach {
    constructor(name, sport, rate) {
        this.name = name;
        this.sport = sport;
        this.rate = rate;
    }

    displayInfo() {
        console.log(`Coach: ${this.name}, Specialization: ${this.sport}, Rating: ${this.rate}`);
    }

}

const coach1 = new Coach('John Doe', 'Fitness', 4.7);

const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);

coach1.displayInfo(); 

coach2.displayInfo(); 