/** @type {NodeListOf<HTMLElement>} */
const productCards = document.querySelectorAll(".product-card");

productCards.forEach(productCard => {
  /** @type {HTMLButtonElement} */
  const radioButton = productCard.querySelector(".product-length__button");
  /** @type {NodeListOf<HTMLDivElement>} */
  const lengthInners = document.querySelectorAll(".product-length__inner");
  /** @type {NodeListOf<HTMLInputElement>} */
  const radios = productCard.querySelectorAll(".product-radio__input");

  if (radioButton && lengthInners.length && radios.length) {
    radioButton.addEventListener("click", () => {
      const lengthInner = radioButton.closest(".product-length__inner");

      if (!lengthInner?.classList.contains("product-length__inner--show")) closeRadios();

      lengthInner?.classList.toggle("product-length__inner--show");
    });

    radios.forEach(radio => {
      radio.addEventListener("change", () => {
        const lengthInner = radio.closest(".product-length__inner");

        lengthInner?.classList.remove("product-length__inner--show");
      });
    });

    document.addEventListener("click", (event) => {
      /** @type {{target: HTMLElement}} */
      const { target } = event;

      if (!target.closest(".product-length__inner")) closeRadios();
    });

    document.addEventListener("keydown", (event) => {
      const { code } = event;

      if (code === "Escape") closeRadios();
    });

    function closeRadios() {
      lengthInners.forEach(lengthInner => {
        lengthInner.classList.remove("product-length__inner--show");
      });
    }
  }
});
