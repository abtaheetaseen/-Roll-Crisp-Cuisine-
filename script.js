const navIconEl = document.querySelector(".nav-icon");
const navCloseEl = document.querySelector(".nav-close");
const navList = document.querySelector(".nav-list");
const navBgOverLayEl = document.querySelector(".nav-bgOverLay");

const navOpen = () => {
    navList.classList.add("show");
    navBgOverLayEl.classList.add("active");
    document.body.style.visibility = "visible";
    document.body.style.height = "100vh";
    document.body.style.width = "100vw";
    document.body.style.overflow = "hidden";
}

const navClose = () => {
    navList.classList.remove("show");
    navBgOverLayEl.classList.remove("active");
    document.body.style = "visibility: visible; height: initial; width: 100%; overflow-x: hidden;";
}

navIconEl.addEventListener("click", navOpen);
navCloseEl.addEventListener("click", navClose);


// AOS animation
AOS.init({
    offset: 200,
    delay: 100,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
})


