
var innps = document.querySelector('.inpps');
var subm = document.getElementById('bbt');

document.querySelector(".bid-type-one").addEventListener('click',(e)=>{
    document.querySelector(".inbuy-wrap").style.height="100px";
    //document.querySelector(".tybo").classList.toggle('tybo');
    subm.setAttribute("disabled", true);
    innps.setAttribute("required", true);
    subm.style.opacity='0.5';
    if(innps.value !== "") {
        subm.removeAttribute('disabled');
        subm.style.opacity='1';
    }
    console.log(e.target.classList);
})

innps.addEventListener('blur', ()=>{
    if(innps.value !== "") {
        subm.removeAttribute('disabled');
        subm.style.opacity='1';
    }else{
         subm.setAttribute("disabled", true);
         subm.style.opacity='0.5';
    }
})

document.querySelector(".bid-type-now").addEventListener('click',(e)=>{
    document.querySelector(".inbuy-wrap").style.height="0";
    //document.querySelector(".tybo").classList.toggle('tybo');
    subm.removeAttribute('disabled');
    innps.removeAttribute('required');
    subm.style.opacity='1';
    console.log(e.target.classList);
})
//즉시구매 페이지로 이동
// document.getElementById("bbt1").addEventListener('click',()=>{
    
// })