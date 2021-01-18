function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

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

let nav = document.getElementById("mySidenav");
nav.addEventListener("click", closeNav, true);
