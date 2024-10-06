/** @type {NodeListOf<HTMLElement>} */
const productCards = document.querySelectorAll(".product-card");

productCards.forEach(productCard => {
  /** @type {NodeListOf<HTMLButtonElement>} */
  const tabButtons = productCard.querySelectorAll(".product-card__tab");
  /** @type {NodeListOf<HTMLDivElement>} */
  const prices = productCard.querySelectorAll(".product-card__prices");

  if (tabButtons.length && prices.length) {
    tabButtons.forEach(tabButton => {
      const { dataset } = tabButton;
      const { price } = dataset;

      tabButton.addEventListener("click", () => {
        prices.forEach(priceElement => {
          priceElement.classList.toggle("product-card__prices--active", priceElement.dataset.price === price);
        });

        tabButtons.forEach(tabButton => {
          tabButton.classList.toggle("product-card__tab--active", tabButton.dataset.price === price);
        });
      });
    });
  }
});
