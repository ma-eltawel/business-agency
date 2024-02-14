// start events
const addEvent = function (ele, type, call) {
    for (let i = 0; i < ele.length; i++) {
        ele[i].addEventListener(type, call);
    }
}
// end events
// start header
let header = document.querySelector('[data-header]'), nav = document.querySelector("[data-navbar]"), navToggle = 
    document.querySelectorAll("[data-nav-toggler]"), overlay = document.querySelector("[data-overlay]");

window.onscroll = () => {
    header.classList.toggle('active', window.scrollY > 100);
}
const toggleNav = function () {
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}
addEvent(navToggle, 'click', toggleNav);
// end header
// start home
let slider = document.querySelectorAll("[data-slider]");

const initSlider = function(currentSlider) {
    let slideContainer = currentSlider.querySelector("[data-slider-container]"), slidePos = 0, slidePrev = 
        currentSlider.querySelector("[data-slider-prev]"), slideNext = currentSlider.querySelector("[data-slider-next]");

    const moveSlide = () => {
        slideContainer.style.transform = `translateX(-${slideContainer.children[slidePos].offsetLeft}px)`;
    }
    const moveNext = () => {
        let slideEnd = slidePos >= slideContainer.childElementCount - 1;

        if (slideEnd) {
            slidePos = 0;
        } else {
            slidePos++;
        }
        moveSlide();
    }
    const movePrev = () => {
        if (slidePos <= 0) {
            slidePos = slideContainer.childElementCount - 1;
        } else {
            slidePos--;
        }
        moveSlide();
    }
    slideNext.onclick = moveNext;
    slidePrev.onclick = movePrev;

    let EndItem = slideContainer.childElementCount <= 1;
    
    if (EndItem) {
        slideNext.style.display = "none";
        slidePrev.style.display = "none";
    }
}
for (let i = 0; i < slider.length; i++) { 
    initSlider(slider[i]); 
}
// end home
// start about
let accordion = document.querySelectorAll('[data-accordion]'), lastActive = accordion[0];

const initAccordion = function (currentAccordion) {
    let accordionBut = currentAccordion.querySelector("[data-accordion-but]");

    const expandAccordion = () => {
        if (lastActive && lastActive != currentAccordion) {
            lastActive.classList.remove("expanded");
        }
        currentAccordion.classList.toggle("expanded");
        lastActive = currentAccordion;
    }
    accordionBut.onclick = expandAccordion;
}
for (let i = 0; i < accordion.length; i++) { 
    initAccordion(accordion[i]); 
}
// end about