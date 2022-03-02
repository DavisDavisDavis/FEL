import Splide from "@splidejs/splide";

new Splide(".splide").mount();

var splide = new Splide(".splide", {
  type: "loop",
  perPage: 5,
  breakpoints: {
    1250: {
      perPage: 3,
    },
    750: {
      perPage: 2,
    },
    focus: "center",
  },
});

splide.mount();
