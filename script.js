
const overlay = document.querySelector('.overlay');
const hamburgerIcon = document.querySelector('.hamburger-menu');
const mobileNavLinks = document.querySelector('.navbar__links');

hamburgerIcon.addEventListener('click', () => {
    overlay.style.display = 'block';
    mobileNavLinks.style.display = 'block';
})

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    mobileNavLinks.style.display = 'none';
})

mobileNavLinks.addEventListener('click', () => {
    overlay.style.display = 'none';
    mobileNavLinks.style.display = 'none';
})
