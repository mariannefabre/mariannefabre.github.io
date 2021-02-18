// side menu

let sideNav = document.getElementById("nav");

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


// menu bar

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $(".top-nav").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();
  if (Math.abs(lastScrollTop - st) <= delta) return;

  if (st > lastScrollTop && st > navbarHeight) {
    $(".top-nav").removeClass("nav-down").addClass("nav-up");
  } else {
    if (st + $(window).height() < $(document).height()) {
      $(".top-nav").removeClass("nav-up").addClass("nav-down");
    }
  }
  lastScrollTop = st;
}
