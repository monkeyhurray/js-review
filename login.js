const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("greeting");

const HIDDEN_NAME = "hidden";
const USERNAME = "username";

function login(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_NAME);

  const realvalue = localStorage.setItem("username", USERNAME);
}
function second(username) {
  greeting.classList.remove(HIDDEN_NAME);
  greeting.innerText = `Hello ${localValue}`;
}

const localValue = localStorage.getItem();

if (localStorage === null) {
  loginForm.classList.remove(HIDDEN_NAME);
  loginInput.addEventListener("submit", login);
} else {
  second(USERNAME);
}
