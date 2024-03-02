var btn = document.getElementById("btn");
btn.addEventListener('click',() => {
    console.log("실행");
    btn.classList.toggle('ative')
    moveSlides();
});

const slides = document.querySelectorAll('.slide-wrap ul li');

const slideWrap = document.querySelector('.slide-wrap');
let slidePosition = 0;
let slideSpeed = 0.4; // 초기 슬라이드 속도
const slideWidth = slides[0].offsetWidth;


const slides2 = document.querySelectorAll('.two-s ul li');

const slideWrap2 = document.querySelector('.two-s');
let slidePosition2 = 0;
let slideSpeed2 = 0.5; // 초기 슬라이드 속도
const slideWidth2 = slides2[0].offsetWidth;

function moveSlides() {
    slidePosition -= slideSpeed;
    slideWrap.style.transform = `translateX(${slidePosition}px)`;
    slidePosition2 -= slideSpeed2;
    slideWrap2.style.transform = `translateX(${slidePosition2}px)`;


    requestAnimationFrame(moveSlides);


}

// 마우스를 올렸을 때 슬라이드 속도를 느리게
slideWrap.addEventListener('mouseenter', () => {
    slideSpeed = 0.2; // 느린 속도로 설정 (숫자가 작을수록 느림)
});

// 마우스를 내렸을 때 슬라이드 속도를 다시 빠르게
slideWrap.addEventListener('mouseleave', () => {
    slideSpeed = 0.4; // 다시 빠른 속도로 설정
});


// 마우스를 올렸을 때 슬라이드 속도를 느리게
slideWrap2.addEventListener('mouseenter', () => {
    slideSpeed2 = 0.2; // 느린 속도로 설정 (숫자가 작을수록 느림)
});

// 마우스를 내렸을 때 슬라이드 속도를 다시 빠르게
slideWrap2.addEventListener('mouseleave', () => {
    slideSpeed2 = 0.5; // 다시 빠른 속도로 설정
});