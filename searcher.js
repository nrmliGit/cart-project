import { productList } from "./app.js";

export function getElementsBySearchBox(data) {
  productList.innerHTML = "";
  const searchTerm = document.getElementById("search-box").value.toLowerCase();

  const filteredSmartphones = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm)
  );

  filteredSmartphones.forEach((item) => {
    productList.innerHTML += `
      <div class="product" data-id=${item.id}>
              <img width="200" height="200" src=${item.image}
                  alt="">
              <h3>${item.name}</h3>
              <p>${item.price} ₼</p>
              <button class="add_to_cart_btn">ADD TO CART</button>
          </div>      
      `;
  });
}
