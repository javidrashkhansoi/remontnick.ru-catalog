/** @type {HTMLButtonElement} */
const productsMoreButton = document.querySelector(".catalog-products__more");
/** @type {HTMLUListElement} */
const productsList = document.querySelector(".products-list");

if (productsMoreButton && productsList) {
  productsMoreButton.addEventListener("click", () => {
    productsList.classList.add("products-list--more");
    productsMoreButton.remove();
  });
}
