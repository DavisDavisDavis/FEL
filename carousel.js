import Splide from "@splidejs/splide";

new Splide(".splide").mount();

var splide = new Splide(".splide", {
  type: "loop",
  focus: "center",
  perPage: 5,
  breakpoints: {
    1250: {
      perPage: 3,
    },
    750: {
      arrows: false,
      perPage: 2,
      focus: 0,
      gap: "5rem",
    },
  },
});

splide.mount();
