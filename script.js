const burgerMenu = document.querySelector('.burger-menu');
const bg1 = document.querySelector('.burger-1');
const bg2 = document.querySelector('.burger-2');
const bg3 = document.querySelector('.burger-3');
const navbar = document.querySelector('.navbar__nav');
const navbarContainer = document.querySelector('.navbar');
const body = document.querySelector('body');
const login = document.querySelector('.navbar__login');


// Evento para ativar o burger menu

burgerMenu.addEventListener('click', () => {
    bg1.classList.toggle('active-bg1');
    bg2.classList.toggle('active-bg2');
    bg3.classList.toggle('active-bg3');
    navbar.classList.toggle('nav-disabled');
    login.classList.toggle('nav-disabled');
    body.classList.toggle('disable-overflow');
})


