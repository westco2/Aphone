const likeButtons = document.querySelectorAll(".card__btn");

likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__btn--like");
  });
});


var atBar = document.querySelector('.att-stic');
var atBar2 = document.querySelector('.att-stic2');
document.querySelector('.att-clo').addEventListener('click',(e)=>{
    atBar.style.display = 'none';
})
document.querySelector('.mouw').addEventListener('click',(e)=>{
  console.log(e.target.classList);
  if(e.target.tagName == 'path') {
    e.target.classList.toggle('act');
    atBar2.style.display = 'block';
    setTimeout(() => {
      atBar2.style.display='none';
    }, 1500);
  }else if(e.target.tagName == 'svg'){
    atBar.style.display = 'block';
    e.target.classList.toggle('act');
  }else return;
})

