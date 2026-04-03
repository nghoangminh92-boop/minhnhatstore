const adress = document.querySelector("#address-form");
const addressClose = document.querySelector("#address-close");

let index = 0;
adress.addEventListener("click", function () {
  document.querySelector(".address-form").style.display = "flex";
});

addressClose.addEventListener("click", function () {
  document.querySelector(".address-form").style.display = "none";
});
// slider--------------------
const rightBtn = document.querySelector(".fa-solid.fa-chevron-right");
const leftBtn = document.querySelector(".fa-solid.fa-chevron-left");
const imgNumber = document.querySelectorAll(".slider-container-left-top img");

rightBtn.addEventListener("click", function () {
  index = index + 1;
  if (index > imgNumber.length - 1) {
    index = 0;
  }
  document.querySelector(".slider-container-left-top").style.right =
    index * 100 + "%";
  removeActive();
  titleImgLi[index].classList.add("active");
});
leftBtn.addEventListener("click", function () {
  index = index - 1;
  if (index <= 0) {
    index = imgNumber.length - 1;
  }
  document.querySelector(".slider-container-left-top").style.right =
    index * 100 + "%";
  removeActive();
  titleImgLi[index].classList.add("active");
});
// slider 1--------------------------------
const titleImgLi = document.querySelectorAll(
  `.slider-container-left-bottom li`,
);
let imgActive = document.querySelector(`.active`);
titleImgLi.forEach(function (image, index) {
  image.addEventListener("click", function () {
    document.querySelector(".slider-container-left-top").style.right =
      index * 100 + "%";
    removeActive();
    image.classList.add("active");
  });
});

function removeActive() {
  let imgActive = document.querySelector(`.active`);
  imgActive.classList.remove("active");
}

// slider 2----------------------------------------------
function imgAuto() {
  index = index + 1;
  if (index > imgNumber.length - 1) {
    index = 0;
  }
  removeActive();
  document.querySelector(".slider-container-left-top").style.right =
    index * 100 + "%";
  titleImgLi[index].classList.add("active");
  // console.log(index);
}
setInterval(imgAuto, 5000);

// slider product
const rightBtnTwo = document.querySelector(
  ".fa-solid.fa-chevron-right.fa-chevron-right-two",
);
const leftBtnTwo = document.querySelector(
  ".fa-solid.fa-chevron-left.fa-chevron-left-two",
);
const imgNumberTwo = document.querySelectorAll(
  ".slider-product-one-content-items",
);

// console.log(rightBtnTwo);
// console.log(leftBtnTwo);

rightBtnTwo.addEventListener("click", function () {
  index = index + 1;
  if (index > imgNumberTwo.length - 1) {
    index = 0;
  }
  document.querySelector(
    ".slider-product-one-content-items-content",
  ).style.right = index * 100 + "%";
  removeActive();
  titleImgLi[index].classList.add("active");
});
leftBtnTwo.addEventListener("click", function () {
  index = index - 1;
  if (index <= 0) {
    index = imgNumberTwo.length - 1;
  }
  document.querySelector(
    ".slider-product-one-content-items-content",
  ).style.right = index * 100 + "%";
  removeActive();
  titleImgLi[index].classList.add("active");
});
