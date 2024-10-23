/** @type {NodeListOf<HTMLElement>} */
const productCards = document.querySelectorAll(".product-card");

productCards.forEach(productCard => {
  /** @type {HTMLButtonElement} */
  const lengthButton = productCard.querySelector(".product-length__button");
  /** @type {NodeListOf<HTMLDivElement>} */
  const lengthInners = document.querySelectorAll(".product-length__inner");
  /** @type {HTMLButtonElement} */
  const lengthInnerButton = productCard.querySelector(".length-header");
  /** @type {HTMLSpanElement} */
  const lengthInnerButtonValue = lengthInnerButton?.querySelector(".length-header__value");
  /** @type {NodeListOf<HTMLInputElement>} */
  const radios = productCard.querySelectorAll(".product-radio__input");

  if (lengthButton && lengthInners.length && radios.length) {
    /** @type {HTMLSpanElement} */
    const lengthButtonValue = lengthButton.querySelector(".length-button__value");

    lengthButton.addEventListener("click", () => {
      /** @type {HTMLDivElement} */
      const lengthInner = lengthButton.nextElementSibling;

      if (!lengthInner?.classList.contains("product-length__inner--show")) closeRadios();

      lengthInner?.classList.toggle("product-length__inner--show");
    });

    lengthInnerButton?.addEventListener("click", () => {
      /** @type {HTMLDivElement} */
      const lengthInner = lengthInnerButton.closest(".product-length__inner");

      lengthInner?.classList.remove("product-length__inner--show");
    });

    radios.forEach(radio => {
      changeButtonTextContent(radio);

      radio.addEventListener("change", () => {
        /** @type {HTMLDivElement} */
        const lengthInner = radio.closest(".product-length__inner");

        lengthInner?.classList.remove("product-length__inner--show");
        radios.forEach(radio => { changeButtonTextContent(radio) });
      });
    });

    document.addEventListener("click", (event) => {
      /** @type {{target: HTMLElement}} */
      const { target } = event;

      if (!target.closest(".product-length")) closeRadios();
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

    /** @param {HTMLInputElement} radio */
    function changeButtonTextContent(radio) {
      const { checked } = radio;
      /** @type {HTMLLabelElement} */
      const radioLabel = radio.previousElementSibling;
      const { textContent } = radioLabel;

      if (checked && textContent) {
        lengthButtonValue.textContent = textContent;
        lengthInnerButtonValue.textContent = textContent;
      }
    }
  }
});
