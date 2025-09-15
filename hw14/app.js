//------ELEMENTS GENERATION--------

const imagesArr = [
  { src: 'images/1.jpg' },
  { src: 'images/2.jpg' },
  { src: 'images/3.jpg' },
  { src: 'images/4.jpg' },
];


const slider = document.querySelector('.slider');

const dotsContainer = document.createElement('div');
dotsContainer.classList.add('dots');
slider.appendChild(dotsContainer);


for (let i = 0; i < imagesArr.length; i++) {
    const slide = document.createElement('div');
    const img = document.createElement('img'); 
    img.classList.add('slide-img');
    img.src = imagesArr[i].src; 

    slide.appendChild(img);
    slider.appendChild(slide);


    const dot = document.createElement('button'); 
    dot.type = 'button';
    dot.classList.add('dot');

    dotsContainer.appendChild(dot);
    slider.appendChild(dotsContainer);
}


const controls = document.createElement('div');
controls.classList.add('controls');

const prevBtn = document.createElement('button');
prevBtn.type = 'button';
prevBtn.classList.add('prev');
prevBtn.textContent = '❮';

const nextBtn = document.createElement('button');
nextBtn.type = 'button';
nextBtn.classList.add('next');
nextBtn.textContent = '❯';

controls.appendChild(prevBtn);
controls.appendChild(nextBtn);
slider.appendChild(controls);

//------LOGIC---------

const images = document.querySelectorAll('.slide-img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');


let imgIndex = 0;
let dotIndex = 0;


function show(i) {
    images[imgIndex].classList.remove('active');
    images[i].classList.add('active');
    imgIndex = i;

    prev.style.display = i === 0 ? 'none' : 'flex';

    next.style.display = i === images.length - 1 ? 'none' : 'flex';

    dots[dotIndex].classList.remove('active');
    dots[i].classList.add('active');
    dotIndex = i;
}


prev.addEventListener('click', () => {
    let i = imgIndex -1;
    if (i >= 0) {
        show(i);
    }
})


next.addEventListener('click', () => {
    let i = imgIndex + 1;
    if (i < images.length) {
        show(i);
    }

})


dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        show(i);
    })
})


show(imgIndex);