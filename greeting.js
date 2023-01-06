const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const link = document.querySelector("a");
const userRemove = document.querySelector("#remove");

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  printGreeting(username);
}

function userRemoveClick() {
  const savedUsername1 = localStorage.getItem(USERNAME_KEY);
  if (!savedUsername1) {
  } else {
    localStorage.removeItem("username");
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = ``;
  }
}

function handleLinkClick() {
  alert("join!");
}

function printGreeting(username) {
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
loginForm.addEventListener("submit", onLoginSubmit);
userRemove.addEventListener("click", userRemoveClick);
link.addEventListener("click", handleLinkClick);

if (savedUsername === null || savedUsername === "") {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  printGreeting(savedUsername);
}
