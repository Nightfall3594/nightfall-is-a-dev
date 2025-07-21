
// Navbar Event Listeners
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


// Bottom Navigation Event Listeners
const bottomNavCommentButton = document.querySelector('.bottom-nav__comment');
const bottomNavCommentInput = document.querySelector('.bottom-nav__leave-message');
const bottomNavGlobalOverlay = document.querySelector('.bottom-nav__overlay');
const bottomNavCloseButton = document.querySelector('.bottom-nav-message__close');

bottomNavCommentButton.addEventListener('click', () => {
    bottomNavGlobalOverlay.classList.add('visible');
    bottomNavCommentInput.classList.add('visible');
})

bottomNavCloseButton.addEventListener('click', () => {
    bottomNavGlobalOverlay.classList.remove('visible');
    bottomNavCommentInput.classList.remove('visible');
})
    


