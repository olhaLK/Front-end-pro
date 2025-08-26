const user = {
    name: '',
    age: '',
    city: '',
};


function userEnter() {
    // user.name = prompt("Enter your name");
    // user.age = prompt("Enter your age");
    // user.city = prompt("Enter your city");
    Object.keys(user).forEach(key => {
        user[key] = prompt(`Enter your ${key}`);
    })
    return user;
}


let newUser = userEnter();


document.write(`
    <h2>User</h2>
    <p>Name: ${newUser.name}</p>
    <p>Age: ${newUser.age}</p>
    <p>City: ${newUser.city}</p>`);