import ScrollReveal from "scrollreveal";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import 'boxicons'; 

const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');
const navLink = document.querySelectorAll('.nav__link');
const header = document.querySelector('#header');


document.addEventListener('DOMContentLoaded', () => {
  menu();
  homeSwiper();
  scrollHeader();
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

  const swiper = new Swiper('.home-swiper', {
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