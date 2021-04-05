const mainCTA = document.querySelector('.no-header__container')
const heroSection = document.querySelector(".no-hero").offsetHeight
const spotlightSection = document.querySelector(".no-spotlight__container").offsetHeight
const showCTAHere = heroSection + spotlightSection

function fadeOut(elem) {
    elem.style.opacity = 1;
    (function fade() {
        if ((elem.style.opacity -= .1) < 0) {
            elem.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};


function fadeIn(elem, display) {
    elem.style.opacity = 0;
    elem.style.display = display || "flex";
    (function fade() {
        var val = parseFloat(elem.style.opacity);
        if (!((val += .1) > 1)) {
            elem.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

var throttledListener = throttle(scrollListener, 250);
window.addEventListener('scroll', throttledListener);

function throttle(func, delay) {
    var func = func.bind(func),
        last = Date.now();
    return function() {
        if (Date.now() - last > delay) {
            func();
            last = Date.now();
        }
    }
}

function scrollListener() {
    if (window.pageYOffset >= showCTAHere && mainCTA.style.display !== 'flex') {
        fadeIn(mainCTA)
        mainCTA.style.display = 'flex'
    }
    if(showCTAHere >= window.pageYOffset && mainCTA.style.display !== 'none') {
        fadeOut(mainCTA)
    }
}

