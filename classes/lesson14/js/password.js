let password = prompt("Enter your password");

const easyPass = /^[a-zA-Z]+$/;
const middlePass = /^[a-zA-Z0-9]+$/;
const hardPass = /^[a-zA-Z0-9!@#$%^&*()_+]+$/;

if (password.match(easyPass)) {
    alert("Your password is easy.");
} else if (password.match(middlePass))  {
    alert("Your password is middle of complexity.");
} else if (password.match(hardPass)) {
    alert("Your password is hard!");
} else {
    alert("It's don't look like a password...");
}