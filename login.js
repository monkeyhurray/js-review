const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_NAME = "hidden";
const USERNAME = "username";

function login(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_NAME);
  const username = localStorage.value;
  localStorage.setItem(USERNAME, username);
  paintGreetings(username);
}
function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_NAME);
  greeting.innerText = `Hello ${localValue}`;
}

const localValue = localStorage.getItem(USERNAME);

if (localStorage === null) {
  loginForm.classList.remove(HIDDEN_NAME);
  loginInput.addEventListener("submit", login);
} else {
  paintGreetings(localValue);
}
