import { cart, cartList, cartTab } from "./app.js";

export function translateCartToHtml() {
  cartList.innerHTML = "";
  if (cart.length) {
    cart.forEach((item) => {
      cartList.innerHTML += `
  <div class="cart_item"  data-item-id=${item.id}>
                  <div class="image">
                      <img src=${item.image}>
                  </div>
                  <div class="name">${item.name}</div>
                  <div class="price">${item.price * item.quantitiy}</div>
                  <div class="quantity">
                      <span class="minus">-</span>
                      <span class="count">${item.quantitiy}</span>
                      <span class="plus">+</span>
                  </div>
                      <i class="fa-solid fa-trash trash"></i>
              </div>`;
    });
  } else {
    cartList.innerHTML = "Cart is empty";
  }
  function getTotalAmount() {
    let totalAmount = 0;
    cart.forEach((item) => {
      totalAmount += item.price * item.quantitiy;
    });

    const totalElement = cartTab.querySelector(".total_price");
    totalElement.innerText = totalAmount.toFixed(2);
  }
  getTotalAmount();

  function getTotalQuantity() {
    let cartIconSpan = document.querySelector(".cart_icon span");
    cartIconSpan.innerText = cart.length;
  }
  getTotalQuantity();
}
