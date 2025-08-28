const user = {
    name: '',
    age: '',
    city: '',

    userEnter() {
        this.name = prompt("Enter your name");
        this.age = prompt("Enter your age");
        this.city = prompt("Enter your city");
        return this;
    }
};



let newUser = user.userEnter();


document.write(`
    <h2>User</h2>
    <p>Name: ${newUser.name}</p>
    <p>Age: ${newUser.age}</p>
    <p>City: ${newUser.city}</p>`);