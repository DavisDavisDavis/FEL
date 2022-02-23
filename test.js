import Splide from "@splidejs/splide";
console.log("hello");
new Splide(".splide").mount();

var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  perMove: 1,
});

splide.mount();

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide");
  splide.mount();
});
