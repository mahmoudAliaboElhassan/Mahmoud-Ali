import { render } from "preact"
import "./index.css"
import App from "./app"
import { initSmoothScroll } from "./utils/smoothScroll"

window.addEventListener("DOMContentLoaded", () => {
  const lenis = initSmoothScroll()
  window.lenis = lenis
  console.log("initSmoothScroll", initSmoothScroll)
})
render(<App />, document.getElementById("app"))
