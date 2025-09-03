const container = document.getElementById('buttonContainer');

container.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        alert(`Pressed button: ${event.target.textContent}`);
    }
});