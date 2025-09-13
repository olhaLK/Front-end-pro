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

    // if (i === 0) {
    //     prev.style.display = 'none';
    // } else {
    //     prev.style.display = 'flex';
    // }

    prev.style.display = i === 0 ? 'none' : 'flex';

    // if (i === images.length - 1) {
    //     next.style.display = 'none';
    // } else {
    //     next.style.display = 'flex';
    // }

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