const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const toggleRegister = document.querySelector(".toggle-register");
const toggleLogin = document.querySelector(".toggle-login");

// Registration
function validateRegisterForm() {
  const username = document.getElementById("reg-username").value.trim();
  const password = document.getElementById("reg-password").value.trim();

  let input_box = document.querySelector(".username_box");
  let password_box = document.querySelector(".password_box");

  input_box.querySelectorAll("span").forEach((span) => span.remove());
  password_box.querySelectorAll("span").forEach((span) => span.remove());

  if (username === "" || password === "") {
    const name_error = document.createElement("span");
    name_error.textContent = "Please enter your details";
    name_error.style.color = "black";
    input_box.appendChild(name_error);
    password_box.appendChild(name_error);
    return false;
  }

  const users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[username]) {
    alert("Username already exists!");
    return false;
  }

  users[username] = password;
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful!");
  return true;
}

// Login
function validateLoginForm() {
  const username = document.getElementById("login_e-mail").value.trim();
  const password = document.getElementById("login_password").value.trim();

  let input_box = document.querySelector(".username_box");
  let password_box = document.querySelector(".password_box");

  input_box.querySelectorAll("span").forEach((span) => span.remove());
  password_box.querySelectorAll("span").forEach((span) => span.remove());

  if (username === "" || password === "") {
    const name_error = document.createElement("span");
    name_error.textContent = "Please enter your details";
    name_error.style.color = "black";
    input_box.appendChild(name_error);
    password_box.appendChild(name_error);
    return false;
  }

  const users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[username] && users[username] === password) {
    localStorage.setItem("loggedInUser", username);
    alert("Login successful!");
    return true;
  } else {
    alert("Invalid username or password.");
    return false;
  }
}

// Toggle buttons
toggleRegister.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

toggleLogin.addEventListener("click", (e) => {
  e.preventDefault();
  registerForm.style.display = "none";
  loginForm.style.display = "block";
});

// Submit login
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateLoginForm()) {
    window.location.href = "index.html"; // Redirect on success
  }
});

// Submit register
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateRegisterForm()) {
    registerForm.reset();
    registerForm.style.display = "none";
    loginForm.style.display = "block";
  }
});

// gsap