// toggle icon navbar
let menuIcon=document.querySelector('#menu-icon')
let navbar=document.querySelector('.navbar')

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

// actic links
let section=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a')
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
let height=sec.offsetHeight
let id=sec.getAttribute('id');



if(top >= offset && top < offset+ height){
    navLinks.forEach(Links => {
        Links.classList.remove('active')
        document.querySelector('header nav a[href*='+ id + ']').classList.add
    });
};

});

// Sticky navbar

let header = document.querySelector('header')

header.classList.toggle('sticky',window.scrollY > 100)


// remove toggle icon nav bar

menuIcon.classList.remove('bx-x')
navbar.classList.remove('active')

};

// scroll reveal

ScrollReveal({ 
    // reset: true,
    distantance:'80px',
    duration:2000,
    delay:200
});

// ScrollReveal
ScrollReveal().reveal('.home-content,.heading', { origin: 'top'});
ScrollReveal().reveal('.home-img,.service-container,.portfolio-box,.contact,.input-box, from bottom', { origin: 'top'});
ScrollReveal().reveal('.home-content h1,.about-img',{ origin: 'left'});
ScrollReveal().reveal('.home-content p,.about-content',{ origin: 'left'});

const typed = new Typed('.multiple-text',{
    strings:['Full Stack Developer','Frontend Developer','Java Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay: 1000,
    loop:true
});


// mail sender

const form=document.querySelector('form')
 function sendEmail(){
        Email.send({
    Host : "smtp.gmail.com",
    Username : "ramalingamramachandran05@gmail.com",
    Password : "8270(R)am#433",
    To : 'ramalingamram819@gmail.com',
    From : document.getElementById("email").value,
    Subject : "new contact from enquiry",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
 }
