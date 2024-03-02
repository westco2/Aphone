var sec = document.getElementById("sec1");
window.addEventListener('scroll', function() {
    // 변경하고자 하는 클래스의 요소를 가져옵니다.
    var element = document.querySelector('.restick');
    var box1 = this.document.querySelector(".prod-main");
    // 특정 위치에서 클래스의 높이를 변경하고 싶은 지점을 설정합니다.
    var scrollPosition = this.window.scrollY;
    console.log(this.window.scrollY);
    console.log(box1.offsetTop);

    // 원하는 위치에 따라 높이를 변경합니다.
    if (scrollPosition > box1.offsetTop && scrollPosition < 900) {
        element.style.transform = 'translateY(0%)'; // 새로운 높이를 지정합니다.
        this.document
    } else {
        element.style.transform = 'translateY(-100%)'; // 기본 높이로 되돌립니다.
    }
});
var ckck = false;
var wwo = document.querySelector('.gre-img-wrap');
var nowcolor= document.querySelector('.color-name span').innerHTML;
var radi = document.querySelector(".col-kind");
radi.addEventListener('change',(e)=>{
    e.preventDefault();
    if(e.target.tagName != 'INPUT') return;
    ckck = true;
    wwo.firstElementChild.remove();
    var imged = document.createElement("img");
    imged.classList.add('bgimgs');
    imged.src = "../css/product/"+ e.target.value + ".jpeg";
    wwo.appendChild(imged);
    document.querySelector(".iill").innerHTML = e.target.value;
    document.querySelector('.color-name span').innerHTML ="- " + e.target.value;
    document.querySelector(".img-ccc img").src = "../css/product/" + e.target.value + "3.jpeg";
    document.querySelector(".const img").src="../css/product/" + e.target.value + "2.jpeg";
    var prii = e.target.dataset.info;
    document.querySelector('.pri3').innerHTML = prii + "원";
    document.querySelector('.pir14').innerHTML = prii + "원";
    document.querySelector('.pri-bpri').innerHTML = prii + "원";
    document.querySelector('.pri-spri').innerHTML =  "1,640,000원";
    console.dir(e.target.value);
    console.log(e.target.tagName);
})


var tog = document.querySelector('.toggle');
var prei = '#toggle1';
tog.addEventListener('click', (e)=>{
    
    if(e.target.tagName != 'LI') return;
    var preto = document.querySelector('.acts');
    var menu = e.target.dataset.id;
    var ddd = document.querySelector(menu); 
    var pp = document.querySelector(prei);
    preto.classList.toggle('acts');
    e.target.classList.toggle('acts');
    
    pp.classList.toggle('active');
    ddd.classList.toggle('active');
    prei = menu;
    
})

var obtn = document.getElementById("ordbtn");
obtn.addEventListener('click',(e)=>{
    console.log("실행");
    if(!ckck){
        alert("색상을 선택해 주세요");
        return;
    }
    document.querySelector(".orddd").style.height = "560.95px";
})

var atBar = document.querySelector('.att-stic');
document.querySelector('.att-clo').addEventListener('click',(e)=>{
    atBar.style.display = 'none';
})
document.getElementById("attention").addEventListener('click',()=>{
    atBar.style.display = 'block';
    console.log('sksk')
})