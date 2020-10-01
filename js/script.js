const overlay = document.getElementById("overlay-container");
const topOverlay = document.getElementById("overlay-top");
const overlayBot = document.getElementById("overlay-bottom");
const topText = document.getElementById("top-text");
const botText = document.getElementById("bottom-text");
const enter = document.getElementById("go");
// overlay ^



// makes the overlay disappear while allowing interaction with the rest of the site
function exit() {
    overlay.style.display ='none';
}


// slides the top and bottom bars away, triggers the exit() function
function slide() {
    topOverlay.style.transform = 'translateY(-100%)';
    overlayBot.style.transform = 'translateY(100%)';
    window.setTimeout(exit, 1000);
}


// slides the top and bottom bars away, triggers the slide() function
function shift() {
    topText.style.transform = 'translateX(-50%)';
    topText.style.opacity = '0';
    botText.style.transform = 'translateX(50%)';
    botText.style.opacity = '0';
    window.setTimeout(slide, 1300);
}


// starts the shift() function
enter.addEventListener('click', function() {
    window.setTimeout(shift, 1000);
})
