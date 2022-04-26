const accordion = document.querySelectorAll('.accordion');
const hamburgerBtn = document.querySelector('.hamburger-btn');
const navbarBackdrop = document.querySelector('.navbar-backdrop');
const closeBtn = document.querySelector('.close-btn');

accordion.forEach(button => {
    button.addEventListener('click', () => {
        let panel = button.nextElementSibling;

        let arrowIcon = button.firstElementChild;
        
        arrowIcon.classList.toggle('arrow-icon-active');

        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
});

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.style.setProperty('--display-hamburger', 'none');
    navbarBackdrop.style.setProperty('--display-navbar-backdrop', 'block');
});

closeBtn.addEventListener('click', () => {
    hamburgerBtn.style.setProperty('--display-hamburger', 'block');
    navbarBackdrop.style.setProperty('--display-navbar-backdrop', 'none');
});