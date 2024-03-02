var mid= document.querySelector('.mouw');
var boi = document.querySelector(".reple-wrap");
var phnav = document.querySelector('.iphone-nav');

document.querySelector('.beg').addEventListener('click',()=>{
    boi.style.height='320px';
    mid.style.filter = 'blur(10px)';
    phnav.style.backgroundColor='#fff';

})

boi.addEventListener('mouseleave', (e)=>{
    
    boi.style.height='0';
    phnav.style.backgroundColor='#f2f2f2';
    mid.style.filter = 'none';

})