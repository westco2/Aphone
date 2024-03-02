var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 15,
    autoplay:{
        delay:4000,
        disableOnlnteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop:true,
    speed: 800,
  });

  var mid= document.querySelector('.mid');
  var boi = document.querySelector(".reple-wrap");
  var phnav = document.querySelector('.nav');
  
  document.querySelector('.beg').addEventListener('click',()=>{
      boi.style.height='320px';
      mid.style.filter = 'blur(10px)';
      phnav.style.backgroundColor='#000';
  
  })
  
  boi.addEventListener('mouseleave', (e)=>{
      
      boi.style.height='0';
      phnav.style.backgroundColor='';
      mid.style.filter = 'none';
  
  })