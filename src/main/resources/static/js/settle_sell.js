
const formInputs = document.querySelectorAll('#myForm input[type="text"]');
var vovo = document.querySelector('.new-address');
var clac = document.querySelector(".clac");
document.querySelector('.nonc').addEventListener('click',()=>{
     
     vovo.style.height = '400px';
     formInputs.forEach(input => {
          
          
          input.setAttribute('required', 'true');
      })
      document.querySelector('#myForm select[name="reselt"]').setAttribute('required', 'true');
})

document.querySelector('.npnc').addEventListener('click',()=>{
     vovo.style.height = '0px';
     formInputs.forEach(input => {
          
          if(input.name !== 'phNum' && input.name !== 'eMail')
          input.removeAttribute('required');
      })
      document.querySelector('#myForm select[name="reselt"]').removeAttribute('required');
})

formInputs.forEach(input => {

    input.addEventListener('blur', (e) => {
          console.dir(e.target.tagName);
         if(e.target.value === ""){
          console.log(e.target);
          e.target.nextElementSibling.style.fontSize='';
          e.target.nextElementSibling.bottom='';
          e.target.nextElementSibling.left='';
          e.target.nextElementSibling.style.color='#e30000';
           e.target.style.borderColor= '#e30000';
           e.target.style.backgroundColor= '#fff2f4';
           e.target.parentElement.nextElementSibling.innerHTML="<i class='ri-error-warning-line' style='margin-right:3px;'></i>"+e.target.name+"를 입력해주세요";
         }else{
          e.target.nextElementSibling.style.fontSize='11px';
          e.target.nextElementSibling.bottom='26px';
          e.target.nextElementSibling.left='15px';
          e.target.nextElementSibling.style.color='';
          e.target.style.borderColor= '';
          e.target.style.backgroundColor= '';
          e.target.parentElement.nextElementSibling.innerHTML="";
         }
         
     
    })
})

formInputs.forEach(input => {
     input.addEventListener('click', (e) => {
          if(e.target.value === ""){
            e.target.style.borderColor= '#0071e3';
            e.target.style.borderWidth='2px';
            e.target.style.backgroundColor='#ffffff'
          }else{
               e.target.nextElementSibling.style.fontSize='11px';
               e.target.nextElementSibling.bottom='26px';
               e.target.nextElementSibling.left='15px';   
          }
          console.log(e.target);
      
     })
 })