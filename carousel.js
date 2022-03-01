import Splide from "@splidejs/splide";

new Splide(".splide").mount();

var splide = new Splide(".splide", {
  type: "loop",
  perPage: 5,
  focus: "center",
});

splide.mount();
