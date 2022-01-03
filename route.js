function toggleMobileMenu(menu) {
  // menu.classList.toggle("open");
  console.log("in fn");
  var x = document.getElementById("mobile-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
