

//Shared
// modal 
let sideBar = document.querySelector("#sideBar");
let modalOverlay = document.querySelector(".modal-screen");
let appear = () => {
  modalOverlay.style.transform = "scale(1)";
  modalOverlay.style.opacity = "1";
  sideBar.style.left = 0;
  modalOverlay.style.pointerEvents = "all";
  document.body.style.overflow = "hidden";
};
let disappear = () => {
  sideBar.style.left = "-250px";
  modalOverlay.style.opacity = "0";
  modalOverlay.style.pointerEvents = "none";
  document.body.style.overflow = "auto";
  setTimeout(() => {
    modalOverlay.style.transform = "scale(0)";
  }, 500);
};
modalOverlay.addEventListener("click", (e) => {
  if (e.target == modalOverlay) {
    disappear();
  }
});
// Home
// slider-hero section
let index = 0;
let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');

let slide = (direction) => {
    index += direction;
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    slider.style.transform = `translateX(-${index * 100}%)`;
}
//