function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function toggleFullscreen() {
  let frame = document.getElementById("fullscreen");
  if (!document.fullscreenElement) {
    frame.requestFullscreen().catch((err) => {
      console.log(err);
    });
  } else {
    document.exitFullscreen();
  }
}

let toggle = document.getElementById("toggleFullscreen");
toggle.addEventListener("click", toggleFullscreen, true);

/*

HTML : 

<input type="button" onclick="addMailIframe();" value="Contact us" />
<div id="myIframe"></div>

function addMailIframe() {
  $('<iframe src="mailto:mariannefbr@gmail.com">')
    .appendTo("#myIframe")
    .css("display", "none");
}

*/
