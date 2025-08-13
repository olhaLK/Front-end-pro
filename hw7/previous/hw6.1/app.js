let yourString = prompt("Enter your sentense");

let yourLetters = prompt("Enter letters to remove (without spaces)");

let lettersArray = yourLetters.split("");


function deleteLetters(str, letters) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (!letters.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}


document.write(deleteLetters(yourString, lettersArray));
