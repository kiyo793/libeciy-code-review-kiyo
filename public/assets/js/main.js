const drawerButton = document.querySelector("#js-drawer-icon");
const drawerContent = document.querySelector("#js-drawer-content");
const drawerLinks = document.querySelectorAll(".p-drawer__link");
const body = document.body;
const html= document.documentElement;

drawerButton.addEventListener("click", function () {
  drawerButton.classList.toggle("is-open");
  drawerContent.classList.toggle("is-open");
  body.classList.toggle("is-fixed");
  html.classList.toggle("is-fixed");
});
drawerLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    drawerButton.classList.remove("is-open");
    drawerContent.classList.remove("is-open");
    body.classList.remove("is-fixed");
    html.classList.remove("is-fixed");
  });
});

function viewportSet() {
    const wsw = window.screen.width;
    if (wsw <= 450) {
      // デバイス横幅460以下
      document.querySelector("meta[name='viewport']").setAttribute("content", "width=450px,initial-scale=1.0");
    } else {
      // それ以外
      document.querySelector("meta[name='viewport']").setAttribute("content" , "width=device-width, initial-scale=1");
    }
  }
  window.addEventListener("DOMContentLoaded", viewportSet, false);
  window.addEventListener("resize", viewportSet, false);
  window.addEventListener("orientationchange", viewportSet, false);


  jQuery("#pageTop").on("click", function (e) {
    e.preventDefault();
    const speed = 700;
    const target = jQuery("html");
    const position = target.offset().top;
    jQuery("html, body").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
});