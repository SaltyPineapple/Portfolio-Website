var slideUp = {
    origin: 'bottom',
    duration: 1000,
    distance: '50px',
    interval: 100,
    delay: 150
};


var slideDown = {
    origin: 'top',
    duration: 1000,
    distance: '50px',
    interval: 100,
    delay: 350
    
};
    
    
ScrollReveal().reveal('.smallContactBox', slideUp);
ScrollReveal().reveal('.navitem', slideDown);