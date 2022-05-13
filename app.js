const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
  btn.addEventListener("click", function(){
    const emailValue = document.getElementById("email").value;
    if (! emailValue.match(regex)) {
      email.classList.add("errorBox");
      emailError.classList.remove("hidden");
      emailError.classList.add("errorMsg");
    } else {
      email.classList.remove("errorBox");
      emailError.classList.add("hidden");
      emailError.classList.remove("errorMsg");
    }
  });
});


btns.forEach(function(btn){
  btn.addEventListener("click", function() {
    const stuff = document.querySelectorAll(".stuff");
    stuff.forEach(function(thing){
      if (thing.value == "") {
        thing.classList.add("errorBox");
        thing.nextElementSibling.classList.remove("hidden");
        thing.nextElementSibling.classList.add("errorMsg");
      } else {
        thing.classList.remove("errorBox");
        thing.nextElementSibling.classList.add("hidden");
        thing.nextElementSibling.classList.remove("errorMsg");
      }
      });
  });
});
