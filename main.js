import "./style.css";

import Splide from "@splidejs/splide";
var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  focus: "center",
});

splide.mount();
