src="https://kit.fontawesome.com/yourkitid.js"
crossorigin="anonymous"
>

var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("show");
  });
}