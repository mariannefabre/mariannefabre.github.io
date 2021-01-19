let sideNav = document.getElementById("mySidenav");

function isNavOpen() {
  return sideNav.style.width === "100%" ? true : false;
}
function openNav() {
  sideNav.style.width = "100%";
}
function closeNav() {
  sideNav.style.width = "0";
}

/*  const openNavigationBar = function () {
  document.getElementById("nav-icon").classList.toggle("open");
  isNavOpen() ? closeNav() : openNav();
};

document
  .getElementById("nav-icon")
  .addEventListener("click", openNavigationBar, true); */

document.getElementById("nav-icon").addEventListener(
  "click",
  () => {
    document.getElementById("nav-icon").classList.toggle("open");
    isNavOpen() ? closeNav() : openNav();
  },
  true
);

sideNav.addEventListener(
  "click",
  () => {
    document.getElementById("nav-icon").classList.toggle("open");
    isNavOpen() ? closeNav() : openNav();
  },
  true
);

function toggleFullscreen() {
  let frame = document.getElementById("memory-game");
  if (!document.fullscreenElement) {
    frame.requestFullscreen().catch((err) => {
      console.log(err);
    });
  } else {
    document.exitFullscreen();
  }
}

let toggleButton = document.getElementById("toggleFullscreen");
toggleButton.addEventListener("click", toggleFullscreen, true);
