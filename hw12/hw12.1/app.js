const inputPath = document.getElementById('btn1');

const outputPath = document.getElementById('btn2');

let myPath = '';


inputPath.addEventListener('click', function() {
    myPath = prompt('Enter the input path:');
});


outputPath.addEventListener('click', function() {
    if (!myPath) {
        alert('Empty path. Try again.');
        return;
    }

    try {
        new URL(myPath);
        window.open(myPath);
    } catch {
        alert('Invalid URL.')
    }
});