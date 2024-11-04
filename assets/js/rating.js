const btns = document.querySelectorAll(".btn-num");
const submitBtn = document.querySelector(".submit-btn");
const defaultContent = document.querySelector(".container-default");
const resultContent = document.querySelector(".container-submit");

let pointHolder = "";

for (let btn of btns) {
  btn.addEventListener("click", handleClick);
}



function handleClick() {
  pointHolder = this.innerText;
  point.innerText = pointHolder;

  // resultContent.style.display = "block";
  // defaultContent.style.display = "none";
}


submitBtn.addEventListener("click", function() {
  if (pointHolder) {
    point.innerText = pointHolder;
    resultContent.style.display = "block";
    defaultContent.style.display = "none";
  }else {
    return;
  }
});