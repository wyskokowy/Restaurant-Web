import './sass/main.scss'

const burger = document.querySelector('.burger');
const navList = document.querySelector('.navigation__list');
const navItem = document.querySelector('.hidden-nav__item');


const burgerNav = () => {
    if (window.innerWidth <= 600) {
        burger.style.display = 'block';
        navList.style.display = 'none';
    } else {
        burger.style.display = 'none';
        navList.style.display = 'flex';

    }
}

burger.addEventListener('click', () => {
   document.querySelector('.hidden-nav').classList.toggle('hide');
   document.querySelector('.burger__dash').classList.toggle('open');
});

navItem.addEventListener('click', () => {
    document.querySelector('.hidden-nav').classList.toggle('hide');
    console.log(document.querySelector('.hidden-nav'))
});

window.addEventListener('load', burgerNav);
window.addEventListener('resize', burgerNav);