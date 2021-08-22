
const body = document.querySelector("body");
const signInSignUpButton = document.querySelector(".link");

window.addEventListener("load", () => {
  body.classList.add("visible");

  const token = localStorage.getItem("jwt");

  if (token) {
    location.href = "/pages/dashboard/dashboard.html";
  }
});

signInSignUpButton.addEventListener("click", () => {
  location.href = "/signup/index.html";
});


particlesJS.load("particles-js", "particlesjs-config.json");