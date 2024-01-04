const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

function validateTime() {
  // Get the current time
  var currentTime = new Date();
  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();

  // Get the user-entered time
  var userInput = document.getElementById("check-in").value.split(":");
  console.log(userInput);
  var userHours = parseInt(userInput[0], 10);
  var userMinutes = parseInt(userInput[1], 10);

  // Compare the user-entered time with the current time
  if (userHours < currentHours || (userHours === currentHours && userMinutes < currentMinutes)) {
    alert("Please select a time equal to or later than the current time.");
    // You can also reset the input to the current time if needed
    document.getElementById("check-in").value = (currentHours < 10 ? "0" : "") + currentHours + ":" + (currentMinutes < 10 ? "0" : "") + currentMinutes;
  }
}