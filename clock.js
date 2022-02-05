const h2Clock = document.querySelector("h2#clock");

function realClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  h2Clock.innerText = `${hours}:${minutes}:${seconds}`;
}

realClock();
setInterval(realClock, 1000);
