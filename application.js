const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('content-container').style.display = 'block';
    document.querySelector('.loader').style.display = 'none';
  }, 1000); 
});

const currentUrl = window.location.href;

const navLinks = document.querySelectorAll(".nav__links a");

navLinks.forEach((link) => {
  if (link.href === currentUrl) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

function connectToFivem() {
  window.open("fivem://connect/play.evolutesrp.online:30120", "_self");
}