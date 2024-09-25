import { addToCart, productList } from "./app.js";
import { getElementsBySearchBox } from "./searcher.js";
import { sorting } from "./sorter.js";

export async function getProducts() {
  const data = await (await fetch("./products.json")).json();

  if (data.length) {
    productList.innerHTML = "";

    data.forEach((product) => {
      productList.innerHTML += `
      <div class="product" data-id=${product.id}>
              <img width="200" height="200" src=${product.image}
                  alt="">
              <h3>${product.name}</h3>
              <p>${product.price} ₼</p>
              <button class="add_to_cart_btn">ADD TO CART</button>
          </div> 
      `;

      productList.addEventListener("click", (e) => {
        if (e.target.classList.contains("add_to_cart_btn")) {
          const validProduct =
            product.id === Number(e.target.parentNode.dataset.id)
              ? product
              : null;

          if (validProduct) addToCart(validProduct);
        }
      });
    });
    sorting(data);
    document
      .querySelector(".search_btn")
      .addEventListener("click", () => getElementsBySearchBox(data));

    document
      .getElementById("search-box")
      .addEventListener("input", () => getElementsBySearchBox(data));
  }
}
