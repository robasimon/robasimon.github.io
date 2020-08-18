function init() {
    const slides = document.querySelectorAll(".slide");
    const pages = document.querySelectorAll(".page");
    const mobilePages = document.querySelectorAll(".navigation")
    mobile1 = document.querySelector(".navigation-1");
    mobile2 = document.querySelector(".navigation-2");
    let current = 0;
    // mobile1.addEventListener("click", function(){
    //     homePage();
    // });
    // mobile2.addEventListener("click", function(){
    //     homePage2();
    // });
    // mobilePages.forEach((page,index) => {
    //     page.addEventListener('click', function(){
    //         console.log(mobilePages)
    //         changeDots(this);
    //         nextSlide(index);
    //     });
    // });
    slides.forEach((slide, index) => {
        slide.addEventListener('click', function () {
            changeDots(this);
            nextSlide(index);
        });
    });
    // function homePage(){
    //     const nextPage = pages[0];
    //     const currentPage = pages[1];
    //     const nextText = nextPage.querySelector(".details");
    //     const currentText = currentPage.querySelector(".details");
    //     const tl = new TimelineMax();
    //     tl.fromTo(currentPage, 0.1, {opacity: 1}, {opacity: 0})
    //     .fromTo(nextPage, 0.1, {opacity: 0}, {opacity: 1},"-=0.1s")
    //     .fromTo(currentText, 0.1, {opacity: 1}, {opacity: 0})
    //     .fromTo(nextText, 0.1, {opacity: 0}, {opacity: 1},"-=0.3s");
    // }
    // function homePage2(){
    //     const nextPage = pages[1];
    //     const currentPage = pages[0];
    //     const nextText = nextPage.querySelector(".details");
    //     const currentText = currentPage.querySelector(".details");
    //     const tl = new TimelineMax();
    //     tl.fromTo(currentPage, 0.1, {opacity: 1}, {opacity: 0})
    //     .fromTo(nextPage, 0.1, {opacity: 0}, {opacity: 1},"-=0.1s")
    //     .fromTo(currentText, 0.1, {opacity: 1}, {opacity: 0})
    //     .fromTo(nextText, 0.1, {opacity: 0}, {opacity: 1},"-=0.3s");
    // }
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    function changeDots(dot) {
        slides.forEach(slide => {
            slide.classList.remove("active");
        });
        dot.classList.add("active");
    }
    function nextSlide(pageNumber) {
        if (pageNumber == 3) {
            pageNumber = 2;
        }
        if (current == pageNumber) {
            return
        }

        const nextPage = pages[pageNumber];
        const currentPage = pages[current];
        const nextText = nextPage.querySelector(".details");
        nextText.style.pointerEvents = "all";
        const currentText = currentPage.querySelector(".details");
        currentText.style.pointerEvents = "none";
        const tl = new TimelineMax();

        tl.fromTo(currentPage, 0.1, { opacity: 1 }, { opacity: 0 })
            .fromTo(nextPage, 0.1, { opacity: 0 }, { opacity: 1 }, "-=0.1s")
            .fromTo(currentText, 0.1, { opacity: 1 }, { opacity: 0 })
            .fromTo(nextText, 0.1, { opacity: 0 }, { opacity: 1 }, "-=0.3s");
        current = pageNumber;

    }


    const menu = document.querySelector('.menu');
    const menuLines = document.querySelectorAll('.menu line');
    const navOpen = document.querySelector('.nav-open');
    const contact = document.querySelector('.contact');
    const logo = document.querySelector('.logo');

    const tl = new TimelineMax({ paused: true, reversed: true });

    tl.to(navOpen, 0.2, { y: 0 })
        .fromTo(contact, 0.2, { opacity: 0, y: 10 }, { opacity: 1, y: 0 })
        .fromTo(logo, 0.2, { color: 'white' }, { color: 'black' }, "-=.1")
        .fromTo(menuLines, 0.2, { stroke: 'white' }, { stroke: 'black' }, "-=1");

    menu.addEventListener('click', () => {
        tl.reversed() ? tl.play() : tl.reverse();
    });

}


init();