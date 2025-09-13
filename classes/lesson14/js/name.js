userName = prompt("Enter your name: ");
const check = userName.match(/^[a-zA-Z][a-zA-Z0-9_]{2,14}$/);

if (!check || userName.length < 3 || userName.length > 15) {
    alert("Your name should start with a letter, can contain letters, digits, or _ , must be between 3 and 15 characters.");
} else {
    alert("Your name is valid!");
}


