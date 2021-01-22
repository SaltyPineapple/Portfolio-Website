// Spartan Modal
var ssemodal = document.getElementById("sseModal");
var sseview = document.getElementById("sseview");

sseview.onclick = function(){
  ssemodal.style.display = "block";
  
}

var span = document.getElementsByClassName("sseclose")[0];

span.onclick = function() {
  ssemodal.style.display = "none";
}

// =========== //

// Rice Modal
var rsfmodal = document.getElementById("rsfModal");
var rsfview = document.getElementById("rsfview");

rsfview.onclick = function(){
  rsfmodal.style.display = "block";
  
}

var span = document.getElementsByClassName("rsfclose")[0];

span.onclick = function() {
  rsfmodal.style.display = "none";
}

// =========== //

// Project Modal
var pr3modal = document.getElementById("pr3Modal");
var pr3view = document.getElementById("pr3view");

pr3view.onclick = function(){
  pr3modal.style.display = "block";
  
}

var span = document.getElementsByClassName("pr3close")[0];

span.onclick = function() {
  pr3modal.style.display = "none";
}


// =================================== //


// Nav stuff
var nav = document.getElementById("topNav");

window.addEventListener('scroll', () =>{
    if(window.pageYOffset > 100){
        nav.style.background = "#3b58a1";
        document.getElementById("headerName").style.color = 'white';
       
    }
    else {
        nav.style.background = "transparent";
        document.getElementById("headerName").style.color = 'black';
        
    }
});


// =================================== //


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


// =================================== //


// Hero Text

var text = ["Web Designer", "Programmer", "Student", "Mark Pratt"];
var elm = document.getElementById("webd");
var speed = 50;

var x = 0;
function typeWrite(word){
    if(x < word.length){
        elm.innerHTML += word.charAt(x);
        x++;
        setTimeout(typeWrite(word), speed)
    }
    
}

var i = 0;
function changeWord(){
    if(i < text.length){
        elm.innerHTML = "";
        x = 0;
        typeWrite(text[i]);
        i++;
    }
    else {
        i = 0;
    }
    
}



onload = function() {
    setTimeout(function(){
        setInterval(function() {changeWord()}, 1500); 
    }, 4000);
}




