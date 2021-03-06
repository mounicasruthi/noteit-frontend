const body = document.querySelector("body");

const apiUrl = "https://noteitappbackend.herokuapp.com";
// const apiUrl = "http://localhost:8000";

window.addEventListener("load", () => {
  body.classList.add("visible");
});


const signInForm = document.querySelector(".partA");

signInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const signInEmail = document.querySelector(".signin-email");
  const signInPassword = document.querySelector(".signin-password");

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

  const email = document.querySelector(".signup-email").value;
  const name = document.querySelector(".signup-name").value;
  const password = document.querySelector(".signup-password").value;
  const retypedPassword = document.querySelector(".signup-repassword").value;

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