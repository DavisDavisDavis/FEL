import Splide from "/node_modules/@splidejs/splide/src/js/core/Splide/Splide.ts";
console.log("hello");
new Splide(".splide").mount();

var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  perMove: 1,
});

splide.mount();
