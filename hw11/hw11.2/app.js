const myButton = document.getElementsByTagName('button')[0];

const myText = document.getElementsByTagName('p')[0];

let count = 0;

myButton.addEventListener('click', function(event) {
    count++;

    if (count % 2 === 0) {
        myText.style.color = '';
    } else {
        myText.style.color = 'blue';
    }
});