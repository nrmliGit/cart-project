import { openCloseHandler } from "./eventlistener.js";
import { getProducts } from "./fetchproducts.js";
import { translateCartToHtml } from "./translate.js";

export const cartTab = document.querySelector(".cart_tab");

export const cartList = cartTab.querySelector(".cart_list");
export const productList = document.querySelector(".product_list");
export let cart = [];

openCloseHandler();

getProducts();

export function addToCart(data) {
  const existItemIndex = cart.findIndex((item) => item.id === data.id);
  if (existItemIndex < 0) {
    cart.push(Object.assign(data, { quantitiy: 1 }));
  } else {
    cart[existItemIndex].quantitiy += 1;
  }
  translateCartToHtml();
}

function cartListElementsChange() {
  cartList.addEventListener("click", (e) => {
    if (e.target.classList.contains("trash")) {
      const cartItemId = Number(e.target.parentNode.dataset.itemId);
      removeCartItem(cartItemId);
      translateCartToHtml();
    }
    if (
      e.target.classList.contains("plus") ||
      e.target.classList.contains("minus")
    ) {
      const cartItemId = Number(e.target.parentNode.parentNode.dataset.itemId);
      const type = e.target.classList.contains("plus") ? "plus" : "minus";
      updateCartItem(cartItemId, type);
      translateCartToHtml();
    }
  });
}
cartListElementsChange();

function updateCartItem(id, type) {
  const findItemIndex = cart.findIndex((item) => item.id === id);
  if (findItemIndex > -1) {
    if (type === "plus") {
      cart[findItemIndex].quantitiy += 1;
    } else if (type === "minus") {
      cart[findItemIndex].quantitiy =
        cart[findItemIndex].quantitiy > 1
          ? cart[findItemIndex].quantitiy - 1
          : cart[findItemIndex].quantitiy;
    }
  }
}

cartTab.querySelector(".reset_cart_btn").addEventListener("click", () => {
  cart = [];
  translateCartToHtml();
});

function removeCartItem(id) {
  cart = cart.filter((item) => item.id !== id);
  translateCartToHtml();
}
