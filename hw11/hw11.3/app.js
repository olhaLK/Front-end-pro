const randomBtn = document.getElementsByTagName('button')[0];

const container = document.getElementsByTagName('div')[0];

randomBtn.addEventListener('click', function() {
    const randomNum = Math.floor(Math.random() * 9) + 1;

    container.innerHTML = "";
    
    let randomImg = document.createElement('img');
    randomImg.src = 'images/' + randomNum + '.JPG';
    randomImg.width = 200;   
    randomImg.height = 200;
    
    container.appendChild(randomImg);
});