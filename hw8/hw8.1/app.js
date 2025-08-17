let ladder = {
    step: 0,
    up() { 
        this.step++;
        return this;
    },
    down() { 
        this.step--;
        return this;
    },
    showStep() { return console.log(`Step now: ${this.step}`) }
}


ladder.up().down().up().up();


if (ladder.step > 0) {
    ladder.showStep();
} else if (ladder.step === 0) {
    console.log(`You still on your start position: ${ladder.step}`);
} else {
    console.log(`You can't go on ${ladder.step} step`);
}