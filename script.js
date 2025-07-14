
const overlay = document.querySelector('.overlay');
const hamburgerIcon = document.querySelector('.hamburger-menu');
const mobileNavLinks = document.querySelector('.navbar__links');

hamburgerIcon.addEventListener('click', () => {
    overlay.classList.add('visible');
    mobileNavLinks.classList.add('visible');
})

overlay.addEventListener('click', () => {
    overlay.classList.remove('visible');
    mobileNavLinks.classList.remove('visible');
})

mobileNavLinks.addEventListener('click', () => {
    overlay.classList.remove('visible');
    mobileNavLinks.classList.remove('visible');
})
