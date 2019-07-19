const navSlide = () => {
    const dropMenu = document.querySelector('.dropMenu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    dropMenu.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
    });
    //animate links
    navLinks.forEach((link, index) => {
        link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7}s';

    });
}

navSlide();