let sideNav = document.getElementById("mySidenav");

const openSideNav = function () {
  function isNavOpen() {
    return sideNav.style.width === "100%" ? true : false;
  }
  function openNav() {
    sideNav.style.width = "100%";
  }
  function closeNav() {
    sideNav.style.width = "0";
  }

  document.getElementById("nav-icon").classList.toggle("open");
  isNavOpen() ? closeNav() : openNav();
};

sideNav.addEventListener("click", openSideNav, true);

document
  .getElementById("nav-icon")
  .addEventListener("click", openSideNav, true);

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
