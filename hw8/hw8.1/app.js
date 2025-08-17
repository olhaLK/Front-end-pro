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


function checkSteps(obj) {
    if (obj.step > 0) {
        obj.showStep();
    } else if (obj.step === 0) {
        console.log(`You still on your start position: ${obj.step}`);
    } else {
        console.log(`You can't go on ${obj.step} step`);
    }
}



ladder.up().down().up().up();
checkSteps(ladder);