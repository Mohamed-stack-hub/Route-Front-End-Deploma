// New Try
// Login Page
let signinEmail = document.getElementById("signinEmail");
let signinPassword = document.getElementById("signinPassword");
let login = document.getElementById("login");
// Regestration
let registerUsername = document.getElementById("registerUsername");
let registerEmail = document.getElementById("registerEmail");
let registerPassword = document.getElementById("registerPassword");
let signUp = document.getElementById("signUp");
var storedUser = JSON.parse(localStorage.getItem("userData"));
// Home
login.addEventListener("click", function () {
  var storedUser = JSON.parse(localStorage.getItem("userData"));
  let email = signinEmail.value;
  let password = signinPassword.value;
  if (email === "" && password === "") {
    warning.innerHTML = "This inputs are requird ";
  }
  if (email === storedUser.email && password === storedUser.password) {
    window.location.href = "home.html";
  } else {
    warning.innerHTML = "incorrect email or password";
  }
});
// Sign Up page
signUp.addEventListener("click", function () {
  userName = registerUsername.value;
  email = registerEmail.value;
  password = registerPassword.value;

  userData = {
    userName: userName,
    email: email,
    password: password,
  };
  if (userName === "" && email === "" && password === "") {
    registerMessage.innerHTML = "This inputs are requird ";
  }
  if (password.length < 6) {
    registerMessage.innerHTML = "The password must to be atleast 6 letters ";
  }
  localStorage.setItem("userData", JSON.stringify(userData));
});
// Welcome message
if (storedUser) {
  var welcomeMessage = document.getElementById("welcomeMessage");
  welcomeMessage.innerHTML = "Welcome, " + storedUser.userName;
}
