const SliderContent = document.querySelector ('.slider-content');
const SliderImages = document.querySelectorAll ('.slider-content img');

//Buttons
const prevBtn = document.querySelector ('#prevBtn');
const nextBtn = document.querySelector ('#nextBtn');

//Counter
let counter = 1;
const size = SliderImages[0].clientWidth;

SliderContent.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners
nextBtn.addEventListener('click',()=>{
    if(counter >= SliderImages.length -1) return;
    SliderContent.style.transition = "transform 0.4s ease-in-out";
    counter++;
    SliderContent.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if(counter <= 0) return;
    SliderContent.style.transition = "transform 0.4s ease-in-out";
    counter--;
    SliderContent.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

SliderContent.addEventListener('transitionend', () =>{
    if(SliderImages[counter].id === 'lastClone'){
        SliderContent.style.transition = "none";
        counter = SliderImages.length - 2;
        SliderContent.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(SliderImages[counter].id === 'firstClone'){
        SliderContent.style.transition = "none";
        counter = SliderImages.length - counter;
        SliderContent.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

function myFunction(){
    alert("Jk lol");
}

function MySearch(){
    x = document.querySelector("searchy");
    x.style.width = "200" + "px";
}