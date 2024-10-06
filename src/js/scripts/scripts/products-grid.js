if (!localStorage.getItem("products-grid")) {
  localStorage.setItem("products-grid", "list");
}

/** @type {HTMLUListElement} */
const productsList = document.querySelector(".products-list");

if (productsList) {
  /** @type {NodeListOf<HTMLButtonElement>} */
  const gridButtons = document.querySelectorAll(".grid-buttons__button");

  gridButtons.forEach(button => {
    const { dataset } = button;
    const { grid } = dataset;

    button.addEventListener("click", () => {
      productsList.classList[grid === "grid" ? "add" : "remove"]("products-list--grid");

      gridButtons.forEach(button => {
        button.classList.toggle("grid-buttons__button--active", button.dataset.grid === grid);
      });

      localStorage.setItem("products-grid", grid);
    });
  });
}
