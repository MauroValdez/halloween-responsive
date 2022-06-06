import ScrollReveal from "scrollreveal";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import 'boxicons'; 

const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');
const navLink = document.querySelectorAll('.nav__link');
const header = document.querySelector('#header');
const secciones = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActivo);
document.addEventListener('DOMContentLoaded', () => {
  menu();
  homeSwiper();
  scrollHeader();
  newSwiper();
  scrollUp();
  revelarScroll();
})

function menu() {
  if(navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    })
  }
  if(navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    })
  }
  if(navLink) {
    navLink.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      })
    })
  }
}

function homeSwiper() {

  const swiperHome = new Swiper('.home-swiper', {
    spaceBetween:30,
    loop: 'true',
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

function scrollHeader() {
  window.addEventListener('scroll', () => {
    if(window.scrollY >= 50) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }
  })
}

function newSwiper() {
  const swiperNew = new Swiper('.new-swiper', {
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,
    loop: 'true',
    speed: 2000,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      768: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      996: {
        spaceBetween: 40,
        slidesPerView: 3,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 4,
      }
    },
  });
}

function scrollActivo() {
  const scrollY = window.pageYOffset;

  secciones.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    const sectionId = section.getAttribute("id");
    

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href="#${sectionId}"]`)
        .classList
        .add('active-link');
    } else {
      document
        .querySelector(`.nav__menu a[href="#${sectionId}"]`)
        .classList
        .remove('active-link');
    }
  });
}

function scrollUp() {
  window.addEventListener('scroll', () => {
    const scrollUp = document.querySelector('#scroll-up');
    if(window.scrollY >= 400){
      scrollUp.classList.add('show-scroll');
    } else {
      scrollUp.classList.remove('show-scroll');
    }
  })
  
}

function revelarScroll() {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
  })

  sr.reveal('.home-swiper, .new-swiper, .newsletter__container')
  sr.reveal('.category__data, .trick__content, .footer__content', {interval: 100})
  sr.reveal('.about__data, .discount__img, .footer__img-two', {origin: 'left'})
  sr.reveal('.about__img, .discount__data, .footer__img-one', {origin: 'right'})



}
