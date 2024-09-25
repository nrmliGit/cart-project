import { productList } from "./app.js";

export function sorting(data) {
  function sortByPrice(array, ascending = true) {
    return [
      ...(ascending
        ? array.sort((a, b) => a.price - b.price)
        : array.sort((a, b) => b.price - a.price)),
    ];
  }

  const selectElement = document.querySelector(".sorting");
  selectElement.addEventListener("change", (e) => {
    if (e.target.value === "cheap") {
      const sortedAscending = sortByPrice(data);
      sortedToHtml(sortedAscending);
    } else if (e.target.value === "expensive") {
      const sortedDescending = sortByPrice(data, false);
      sortedToHtml(sortedDescending);
    }
  });

  function sortedToHtml(sortedArray) {
    productList.innerHTML = "";
    sortedArray.forEach((item) => {
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
}
