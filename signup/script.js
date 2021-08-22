const body = document.querySelector("body");

const apiUrl = "https://noteitappbackend.herokuapp.com/";

window.addEventListener("load", () => {
  body.classList.add("visible");
});


const signInForm = document.querySelector(".signin-form");

signInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const signInEmail = document.querySelector(".email");
  const signInPassword = document.querySelector(".password");

  const email = signInEmail.value;
  const password = signInPassword.value;

  fetch(`${apiUrl}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      const { token } = data;

      if (token) {
        localStorage.setItem("jwt", token);
        location.href = "/notes/index.html";
      } else {
        alert("SignIn Again");
      }
    })
    .catch((err) => {
      alert("Error signing in, please try again.");
      console.log(err);
    });
});


const signUpForm = document.querySelector(".signup-form");

signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.querySelector(".email").value;
  const name = document.querySelector(".name").value;
  const password = document.querySelector(".password").value;
  const retypedPassword = document.querySelector(
    ".repassword"
  ).value;

  if (password !== retypedPassword) {
    alert("Passwords don't match");
    return;
  }

  fetch(`${apiUrl}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      const { token } = data;

      if (token) {
        localStorage.setItem("jwt", token);
        location.href = "/notes/index.html";
      } else {
        alert("SignUp Again");
      }
    })
    .catch((err) => {
      alert("Error Signing Up, please try again.");
      console.log(err);
    });
});