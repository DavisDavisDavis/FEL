import Splide from "@splidejs/splide";

function resizeListener() {
  return window.innerWidth;
}

window.addEventListener("resize", resizeListener);

let pages = 5;
if (resizeListener() < 1250) {
  pages = 3;
} else {
  pages = 5;
}

new Splide(".splide").mount();

var splide = new Splide(".splide", {
  type: "loop",
  perPage: pages,
  focus: "center",
});

splide.mount();
