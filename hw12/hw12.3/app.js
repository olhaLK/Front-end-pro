document.querySelector('button').addEventListener('click', () => {
    const myInput = document.querySelector('input');
    const inputValue = myInput.value.trim();

    if (!inputValue) {
        return;
    }

    const list = document.querySelector('ul');

    const newItem = document.createElement('li');
    newItem.textContent = inputValue;

    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.addEventListener('click', () => {
        newItem.classList.add('done');
    })

    newItem.appendChild(doneBtn);

    list.appendChild(newItem);
    myInput.value = '';
}) 