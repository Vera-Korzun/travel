let openBtn = document.querySelector(".open-btn");
let closeBtn = document.querySelector(".close-btn");
let menu = document.querySelector(".menu-mobile");
let overlay = document.querySelector(".overlay");
let menuLink = document.querySelectorAll(".menu-mobile-list-item");
let loginBtn = document.querySelector(".login-btn");
let loginBtnMob = document.querySelector(".account");
let loginOverlay = document.querySelector(".overlay-login");
let loginMenu = document.querySelector(".login");
let signUpBtn = document.querySelector(".to-signup-btn");
let signUpMenu = document.querySelector(".signup");
let toLoginMenu = document.querySelector(".to-login-btn");
let signInBtn = document.querySelector(".login-form-btn");

let formElement = document.querySelector(".login-form");

const openMenu = () => {
  overlay.classList.add("is-open");
  overlay.classList.remove("is-hidden");
  loginBtnMob.addEventListener("click", openLogIn);
};

const openLogIn = () => {
  loginMenu.classList.remove("hidden");
  signUpMenu.classList.remove("is-open");
  loginOverlay.classList.add("is-open");
  loginMenu.classList.add("is-open");
  signUpBtn.addEventListener("click", openSignUp);
  signInBtn.addEventListener("submit", getFormElement);
};

const openSignUp = () => {
  loginMenu.classList.remove("is-open");
  loginMenu.classList.add("hidden");
  signUpMenu.classList.add("is-open");
  toLoginMenu.addEventListener("click", openLogIn);
};

const closeMenu = () => {
  overlay.classList.remove("is-open");
  overlay.classList.add("is-hidden");
};

const closeLogIn = () => {
  loginOverlay.classList.remove("is-open");
  loginMenu.classList.remove("is-open");
  signUpMenu.classList.remove("is-open");
};

const getFormElement = (e) => {
  e.preventDefault();
  const formData = new FormData(loginform);

  const email = formData.get("e-mail");
  const password = formData.get("password");

  loginOverlay.classList.remove("is-open");
  loginMenu.classList.remove("is-open");
  signUpMenu.classList.remove("is-open");

  e.target.reset();

  alert(`Your email: ${email} and password: ${password}`);
};

openBtn.addEventListener("click", openMenu);
overlay.addEventListener("click", closeMenu);
closeBtn.addEventListener("click", closeMenu);

loginBtn.addEventListener("click", openLogIn);
loginOverlay.addEventListener("click", closeLogIn);

formElement.addEventListener("submit", getFormElement);

const prev = document.querySelector(".slider-btn-prev");
const next = document.querySelector(".slider-btn-next");
// const slides = document.querySelectorAll(".slider-list-item");
const sliderList = document.querySelector(".slider-list");
const sliderMobList = document.querySelector(".slider-mob-list");
// const slidesMob = document.querySelectorAll(".slider-mob-list-item");
const dots = document.querySelectorAll(".circle-list-item");

let index = 1;

const removeActiveSlide = (n) => {
  const slides = document.querySelectorAll(".slider-list-item");
  const slidesMob = document.querySelectorAll(".slider-mob-list-item");

  for (i of slidesMob) {
    i.classList.remove("active");
  }
  for (i of slides) {
    i.classList.remove("active");
  }
  for (i of dots) {
    i.classList.remove("active");
  }
};

const addActiveSlide = () => {
  const slides = document.querySelectorAll(".slider-list-item");
  const slidesMob = document.querySelectorAll(".slider-mob-list-item");
  slidesMob[slidesMob.length - 2].classList.add("active");
  slides[slides.length - 2].classList.add("active");
  dots[index % 3].classList.add("active");
};

const nextSlide = () => {
  removeActiveSlide();

  const slides = document.querySelectorAll(".slider-list-item");
  const slidesMob = document.querySelectorAll(".slider-mob-list-item");

  let slideMob = slidesMob[0];
  let slide = slides[0];

  let wrapperMob = slideMob.parentElement;
  let wrapper = slide.parentElement;

  wrapperMob.removeChild(slidesMob[0]);
  wrapperMob.appendChild(slideMob);

  wrapper.removeChild(slides[0]);
  wrapper.appendChild(slide);
  index++;
  addActiveSlide();
};

const prevSlide = () => {
  removeActiveSlide();

  const slides = document.querySelectorAll(".slider-list-item");
  const slidesMob = document.querySelectorAll(".slider-mob-list-item");

  let slideMob = slidesMob[slidesMob.length - 1];

  let slide = slides[slides.length - 1];

  let wrapperMob = slideMob.parentElement;
  let wrapper = slide.parentElement;

  wrapperMob.removeChild(slidesMob[slidesMob.length - 1]);
  wrapperMob.insertBefore(slideMob, slidesMob[0]);

  wrapper.removeChild(slides[slides.length - 1]);
  wrapper.insertBefore(slide, slides[0]);

  if (index == 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  addActiveSlide();
};

dots.forEach((i, idx) => {
  i.addEventListener("click", () => {
    index = idx;
    prepareCurrentSlide(index);
  });
});

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
