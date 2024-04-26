var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("show");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var descriptions = document.querySelectorAll(".description");
  descriptions.forEach(function (description) {
    description.style.display = "none";
  });

  var buttons = document.querySelectorAll("button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var description = this.nextElementSibling;
      if (description.style.display === "none") {
        description.style.display = "block";
      } else {
        description.style.display = "none";
      }
    });
  });
});

/////
document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll("button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var description = this.nextElementSibling;
      description.classList.toggle("active");
    });
  });
});
