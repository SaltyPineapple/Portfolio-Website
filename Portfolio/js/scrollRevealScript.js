// Scroll Reveal
var slideUp = {
    origin: 'bottom',
    duration: 1000,
    distance: '50px',
    interval: 100,
    delay: 250
};


var slideDown = {
    origin: 'top',
    duration: 1000,
    distance: '50px',
    interval: 100,
    delay: 350
    
};

var slideRight = {
    origin: 'left',
    duration: 1000,
    distance: '50px',
    interval: 100,
    delay: 350
};
    
ScrollReveal().reveal('.image', slideRight);    
ScrollReveal().reveal('.smallContactBox', slideUp);
ScrollReveal().reveal('.navitem', slideDown);
ScrollReveal().reveal('.wlpr', slideUp);
ScrollReveal().reveal('#profile', slideUp);
ScrollReveal().reveal('.seperator h2', slideUp);
ScrollReveal().reveal('#topText p', slideUp);
ScrollReveal().reveal('#resume', slideUp);
ScrollReveal().reveal(".otherButtons", slideUp);