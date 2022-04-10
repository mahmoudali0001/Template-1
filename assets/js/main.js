let headerIcon = document.querySelector(".header .links");
let icon = document.querySelector(".header .links ul");

headerIcon.onclick = function () {
  if (icon.style.display != "block") {
    icon.style.display = "block";
  } else {
    icon.style.display = "none";
  }
};
