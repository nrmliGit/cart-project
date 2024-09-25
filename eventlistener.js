import { cartTab } from "./app.js";

export function openCloseHandler() {
  const closeBtn = document.querySelector(".close_btn");
  const cartIcon = document.querySelector(".cart_icon");
  cartIcon.addEventListener("click", () => {
    cartTab.classList.add("open");
  });
  closeBtn.addEventListener("click", () => {
    cartTab.classList.remove("open");
  });
}
