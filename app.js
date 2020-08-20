function init() {
    const slides = document.querySelectorAll(".slide");
    const pages = document.querySelectorAll(".page");
    const mobilePages = document.querySelectorAll(".navigation")

    let current = 0;

    mobilePages.forEach((page,index) => {
        page.addEventListener('click', function(){
            console.log(index)
            //changeDots(this);
            nextSlide(index);
        });
    });
    
    slides.forEach((slide, index) => {
        slide.addEventListener('click', function () {
            changeDots(this);
            nextSlide(index);
        });
    });
    
    // Get the modal
    var modal = document.getElementById("myModal");
    var modal1 = document.getElementById("myModal1");
    var modal2 = document.getElementById("myModal2");
    var modal3 = document.getElementById("myModal3");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    var btn1 = document.getElementById("myBtn1");
    var btn2 = document.getElementById("myBtn2");
    var btn3 = document.getElementById("myBtn3");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }
    btn1.onclick = function () {
        modal1.style.display = "block";
    }
    btn2.onclick = function () {
        modal2.style.display = "block";
    }
    btn3.onclick = function () {
        modal3.style.display = "block";
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
        else if (event.target == modal1){
            modal1.style.display = "none";
        }
        else if (event.target == modal2) {
            modal2.style.display = "none";
        }
        else if (event.target == modal3) {
            modal3.style.display = "none";
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
        else if (current == pageNumber) {
            return;
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
    window.onclick = function(event){
        if (event.target == navOpen){
            tl.reverse();
        }
    }
}


init();