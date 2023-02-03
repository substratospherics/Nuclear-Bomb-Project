const toRead = document.getElementById("toRead");
const clickMe = document.getElementById("clickMe");
const main = document.getElementById("hideThis");
const popUp = document.getElementById("useHide");
const footerEl = document.getElementById("footer");
const myVid = document.getElementById("myVideo");
const myBody = document.body;
let seconds = 0;
let time;

toRead.addEventListener("click", hideMain);
clickMe.addEventListener("click", showMain);

function hideMain() {
  main.style.display = "none";
  footerEl.style.display = "none";
  popUp.style.display = "block";
}

function showMain() {
  popUp.style.display = "none";
  footerEl.style.display = "block";
  main.style.display = "block";
}

function playVideo() {
  main.style.display = "none";
  footerEl.style.display = "none";
  time = setInterval(wait3Sec, 1000);
}

function wait3Sec() {
  console.log(seconds);
  seconds++;
  if (seconds === 6) {
    main.style.display = "block";
    footerEl.style.display = "block";
    myVid.style.display = "none";
    clearInterval(time);
  }
}
