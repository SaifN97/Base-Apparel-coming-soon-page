let form = document.querySelector(".form");
let emailBox = document.querySelector(".email");
let email = document.getElementById("email").value;
let input = document.getElementById("email");
let text = document.querySelector(".text");
let errorIcon = document.querySelector(".error");
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

input.oninput = validation();

function validation() {
  if (email === "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
  } else if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your're Good to go!";
    text.style.color = "#0f0";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please provide a valid email";
    emailBox.style.borderColor = "hsl(0, 93%, 68%)";
    errorIcon.style.opacity = "1";
  }
}
