let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
})

window.addEventListener('scroll', () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
})
const header = document.querySelector('header');
window.onscroll = function (){
    if(document.documentElement.scrollTop > 5){
        header.style.height = '70px';
        header.style.backgroundColor = '#fff';
    }else{
        header.style.height = '100px';
        header.style.backgroundColor = 'transparent';
    }
}
//light box
const lightBox = document.querySelector('.lightbox'),
itemBox = document.querySelectorAll('.thumbnail'),
totalItemBox = itemBox.length;
let lightBoxImage = lightBox.querySelector('.lightbox-img');
let itemIndex = 0;

for(let i = 0; i < totalItemBox; i++){
    itemBox[i].addEventListener('click', () => {
        itemIndex = i;
        changeImage();
        toggleLightBox();
    })
}
const nextSlide = () =>{
    if(itemIndex === totalItemBox - 1){
        itemIndex = 0;
    }else{
        itemIndex++;
    }
    changeImage();
}
const prevSlide = () =>{
    if(itemIndex === 0){
        totalItemBox - 1;
    }else{
        itemIndex--;
    }
    changeImage();
}
const toggleLightBox = () =>{
    lightBox.classList.toggle('open')
}
const changeImage = () =>{
    imgSrc = itemBox[itemIndex].querySelector('img').getAttribute('src');
    lightBoxImage.src = imgSrc;
}
//closing lightbox
const closelightBox = document.querySelector('.lightbox-close');
lightBox.addEventListener('click', (e) => {
    if(e.target === closelightBox){
        toggleLightBox();
    }
})