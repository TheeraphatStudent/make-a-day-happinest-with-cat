import { CreateFrame } from "./init.js"; 

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector(".frame-container").classList.add("loaded");
  }, 2000);
  
  const init = new CreateFrame();
});