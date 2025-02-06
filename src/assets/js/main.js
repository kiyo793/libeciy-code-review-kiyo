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