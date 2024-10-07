/** @type {NodeListOf<HTMLElement>} */
const productCards = document.querySelectorAll(".product-card");

productCards.forEach(productCard => {
  /** @type {HTMLButtonElement} */
  const actionsMoreButton = productCard.querySelector(".product-actions__more");
  /** @type {NodeListOf<HTMLDivElement>} */
  const allProductActions = document.querySelectorAll(".product-actions");
  /** @type {HTMLDivElement} */
  const productActions = productCard.querySelector(".product-actions");
  /** @type {NodeListOf<HTMLButtonElement>} */
  const actionButtons = productCard.querySelectorAll(".product-actions__button");

  if (actionsMoreButton && productActions) {
    actionsMoreButton.addEventListener("click", () => {
      if (!productActions.classList.contains("product-actions--show")) closeActions();

      productActions.classList.toggle("product-actions--show");
    });

    document.addEventListener("click", (event) => {
      /** @type {{target: HTMLElement}} */
      const { target } = event;

      if (!target.closest(".product-actions")) closeActions();
    });

    document.addEventListener("keydown", (event) => {
      const { code } = event;

      if (code === "Escape") closeActions();
    });

    function closeActions() {
      allProductActions.forEach(productAction => {
        productAction.classList.remove("product-actions--show");
      });
    }
  }

  actionButtons.forEach(button => {
    button.addEventListener("click", () => {
      button.classList.toggle("product-actions__button--active");
    });
  });
});
