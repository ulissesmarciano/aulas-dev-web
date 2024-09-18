const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let index = 0;

function updateSliderPosition() {
    slider.style.transform = `translateX(${-index * 100}%)`;
}

function updateButtons() {
    let prev = document.querySelector('.prev')
    let next = document.querySelector('.next')
    let prevDisabled = prev.disabled = (index === 0);
    let nextDisabled = next.disabled = (index === slides.length - 1);
    
    // if (prevDisabled === true) {
    //    prev.classList.add('disabled')
        
    // } else if (prevDisabled === false){
    //     prev.classList.remove('disabled')
    // }
    
    // if (nextDisabled === true){
    //     next.classList.add('disabled')
    // } else if (nextDisabled === false){
    //     next.classList.remove('disabled')
    // }    
    
    prevDisabled ? prev.classList.add('disabled') : prev.classList.remove('disabled')
    nextDisabled ? next.classList.add('disabled') : next.classList.remove('disabled')
}

document.querySelector('.next').addEventListener('click', () => {
    if (index < slides.length - 1) {
        index++;
        updateSliderPosition();
        updateButtons();
       
    }

    
});

document.querySelector('.prev').addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateSliderPosition();
        updateButtons();
    }
});

// Inicializa o estado dos botões
updateButtons();




