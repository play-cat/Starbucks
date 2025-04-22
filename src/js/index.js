// Scroll to top
const scrollTopBtn = document.querySelector('#scroll-up');
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// swiper
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('#swiper-products', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  // Optional parameters
  direction: 'horizontal',
  centeredSlides: true,
  loop: true,
  slidesPerView: 1,
  initialSlide: 2,
  spaceBetween: 54,
  grabCursor: true,
  a11y: false,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-next',
    prevEl: '.slider-prev',
  },

  // breakpoints
  breakpoints: {
    425: {
      slidesPerView: 1,
      centeredSlides: false,
    },
    600: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 32,
    },
    992: {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 42,
    },
    1280: {
      slidesPerView: 4,
      centeredSlides: true,
      spaceBetween: 54,
    },
  },
});

// Burger menu

const menu = document.querySelector('#header-nav');
const burgerMenuBtn = document.querySelector('#nav-toggle-btn');

burgerMenuBtn.addEventListener('click', e => {
  burgerMenuBtn.classList.toggle('active');
  menu.classList.toggle('show');
  document.body.classList.toggle('no-scroll');
});

// Cup paralax effect
const heroImg = document.querySelector('.hero__img');
const cup = document.querySelector('.cup');

heroImg.addEventListener('mousemove', event => {
  const { clientX, clientY } = event;
  const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = heroImg;

  // Обчислюємо зміщення щодо центра `.hero__img`
  const moveX = (clientX - offsetLeft - offsetWidth / 2) * 0.09;
  const moveY = (clientY - offsetTop - offsetHeight / 2) * 0.09;

  // Змінюємо позицію чашки
  cup.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`;
});

heroImg.addEventListener('mouseout', () => {
  // Повертаємо чашку в центр
  cup.style.transform = `translate(-50%, -50%)`;
});

// Mobile nav
// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

// scrollUp
// import scrollUp from './modules/scroll-up.js';

// modals
// import modals from './modules/modals.js';

AOS;
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  once: true,
  offset: 0,
  duration: 1000,
  easing: 'ease',
  delay: 0, //100
});
