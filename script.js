const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const toggleRegister = document.querySelector(".toggle-register");
const toggleLogin = document.querySelector(".toggle-login");
const wrapper = document.querySelector(".wrapper");
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
  gsap.from(".wrapper", {
    x: 100,
    y: -200,
    duration: 1,
    stagger: 0.5,
    ease: "back.out(1.7)",
  });

  gsap.from("svg path", {
    attr: {
      d: `M 10 100 Q 500 700 990 10`,
    },
    duration: 3,
    ease: "elastic.out(1, 0.3)",
  });
});

toggleLogin.addEventListener("click", (e) => {
  e.preventDefault();
  registerForm.style.display = "none";
  loginForm.style.display = "block";
  gsap.from(".wrapper", {
    x: 100,
    y: -200,
    duration: 1,
    stagger: 0.5,
    ease: "back.out(1.7)",
  });

  gsap.from("svg path", {
    attr: {
      d: `M 10 100 Q 500 700 990 10`,
    },
    duration: 3,
    ease: "elastic.out(1, 0.3)",
  });
});

// Submit login
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateLoginForm()) {
    window.location.href = "home.html"; // Redirect on success
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
gsap.from(".wrapper", {
  x: 100,
  y: -200,
  duration: 1,
  stagger: 0.5,
  ease: "back.out(1.7)",
});

let string = document.querySelector("#string");
let initialpath = `M 10 100 Q 500 100 990 100`;
let finalpathpath = `M 10 100 Q 500 100 990 100`;
let path = document.querySelector("path");

string.addEventListener("mousemove", (dets) => {
  finalpath = `M 10 100 Q ${dets.offsetX} ${dets.offsetY} 990 100`;
  gsap.to("svg path", {
    attr: {
      d: finalpath,
    },
    duration: 0.3,
    ease: "elastic.out(1, 0.3)",
  });
});

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: {
      d: initialpath,
    },
    duration: 0.5,
    ease: "elastic.out(1, 0.3)",
  });
});

gsap.from("svg path", {
  attr: {
    d: `M 10 100 Q 500 700 990 10`,
  },
  duration: 3,
  ease: "elastic.out(1, 0.3)",
});
