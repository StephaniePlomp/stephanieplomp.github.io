const skewedOne = document.querySelector(".skewedOne"); 
const skewedTwo = document.querySelector(".skewedTwo"); 
const skewedOne1 = document.querySelector(".skewedOne1"); 
const skewedTwo2 = document.querySelector(".skewedTwo2"); 

window.addEventListener('scroll', function(){
    const value1 = -15 + window.scrollY/45; 
    const value2 = 15 + window.scrollY/-45; 
    skewedOne.style.transform = "skewY(" + value1 + "deg)";
    skewedTwo.style.transform = "skewY(" + value2 + "deg)";
})

//navbar

function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const links = document.querySelectorAll(".nav-links li a");


    //Close nav when click
    links.forEach(link => {
      link.addEventListener(`click`, () => {
        if(nav.classList.contains('nav-active')) {
          nav.classList.remove(`nav-active`);
          burger.classList.remove(`toggle`);
          navLinks.forEach((link, index) => {
            if (link.style.animation) {
              link.style.animation = ``;
            } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
                0.3}s`;
            }
          });
        }
      });
    });

    //Toggle Nav
    burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");


        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle("toggle");
    });
}

navSlide();


// RESET FORM AND PREVENT REDIRECT AND MESSAGE
function process () {

  var form = document.getElementById("my-form");
  var data = new FormData(form);
  var btnSend = document.getElementById("mybutton1");
  var text = "Sent! Thank You!";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://getform.io/f/6b51ce2b-fb41-4397-a0d7-be7887448ac0");
  xhr.onload = function () {
    console.log(this.response);
    btnSend.innerText = text;
    btnSend.style.color = "black";
    
    form.reset(); 
  };
  xhr.send(data);
 
  // STOP DEFAULT FORM SUBMIT/PAGE RELOAD
  return false;
}


// button sent
/*

btnSend.addEventListener("click", (event) => {
    event.preventDefault(); 
    if(btnSend.innerText === "Send") {
      
    } else {
        btnSend.innerText="Send"; 
    }
});
*/


// Contact form

const inputs = document.querySelectorAll(".input"); 

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
    parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btn-resume");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

