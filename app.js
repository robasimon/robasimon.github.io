function init(){
    const slides = document.querySelectorAll(".slide");
    const pages = document.querySelectorAll(".page");
    let current = 0;
    slides.forEach((slide,index) => {
        slide.addEventListener('click', function(){
            changeDots(this);
            nextSlide(index);
        });
    });
    function changeDots(dot){
        slides.forEach(slide=>{
            slide.classList.remove("active");
        });
        dot.classList.add("active");
    }
    function nextSlide(pageNumber){
        const nextPage = pages[pageNumber];
        const currentPage = pages[current];
        const nextText = nextPage.querySelector(".details");
        const currentText = currentPage.querySelector(".details");
        
        const tl = new TimelineMax();

        tl.fromTo(currentPage, 0.1, {opacity: 1}, {opacity: 0})
        .fromTo(nextPage, 0.1, {opacity: 0}, {opacity: 1},"-=0.1s")
        .fromTo(currentText, 0.1, {opacity: 1}, {opacity: 0})
        .fromTo(nextText, 0.1, {opacity: 0}, {opacity: 1},"-=0.3s");
        current = pageNumber;
    }
    
    const menu = document.querySelector('.menu');
    const menuLines = document.querySelectorAll('.menu line');
    const navOpen = document.querySelector('.nav-open');
    const contact = document.querySelector('.contact');
    const logo = document.querySelector('.logo');

    const tl = new TimelineMax({paused: true, reversed: true});

    tl.to(navOpen, 0.2, {y:0})
    .fromTo(contact, 0.2, {opacity:0, y:10}, {opacity:1, y:0})
    .fromTo(logo, 0.2, {color: 'white'}, {color: 'black'}, "-=.1")
    .fromTo(menuLines, 0.2, {stroke: 'white'}, {stroke: 'black'}, "-=1");

    menu.addEventListener('click', ()=>{
        tl.reversed() ? tl.play() : tl.reverse();
    })

}


init();