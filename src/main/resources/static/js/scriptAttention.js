const modalDialog = document.querySelector(".copy-link-dialog");
const shareBtn = document.querySelector(".share-btn");
const closeBtn = document.querySelector(".close-btn");
const copyBtn = document.querySelector(".copy-btn");

shareBtn.addEventListener("click", () => {
  modalDialog.classList.remove("copy-link-dialog--fadeout");
  modalDialog.showModal();
});

closeBtn.addEventListener("click", () => {
  modalDialog.classList.add("copy-link-dialog--fadeout");

  modalDialog.close();
});

copyBtn.addEventListener("click", () => {
  const copyInput = document.getElementById("copy-link-input");

  copyInput.select();
  copyInput.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyInput.value);

  const copyText = document.getElementById("copy-text");
  copyText.innerHTML = "Copied!";
});


function toggleEdit() {
  toggleButton(); // 편집 버튼 텍스트 토글
}

function toggleButton() {
  var toggleButton = document.getElementById('editButton');
  if (toggleButton.textContent === '편집') {
      toggleButton.textContent = '완료';  
  } else {
      toggleButton.textContent = '편집';
  }
  toggleText(); // 텍스트 내용 변경 함수를 호출합니다.
}

function toggleText() {
  var textElement = document.getElementById("text");
  if (textElement.textContent === "즉시구매가1,650,000원") {
      textElement.innerHTML = "<a style='font-size: 15px; cursor: pointer; padding-bottom: 10px;' onclick='del(this)'; >제거</a>";
  } else {
      textElement.innerHTML = '<p id="text" style="font-size: 18px;">즉시구매가<span class="bi-pr">1,650,000원</span></p>';
  }
}
var info = document.querySelector(".bid-info");
function del(t){
  t.parentElement.parentElement.parentElement.remove();
  document.querySelector('.empty').style.display= 'flex';
}


