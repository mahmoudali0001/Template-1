let headerIcon = document.querySelector(".header .links");
let icon = document.querySelector(".header .links ul");
let up = document.querySelector(".up");

headerIcon.onclick = function () {
  if (icon.style.display != "block") {
    icon.style.display = "block";
  } else {
    icon.style.display = "none";
  }
};

window.onscroll = function () {
  this.scrollY >= 1000 ? up.classList.add("show") : up.classList.remove("show");
};

up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
