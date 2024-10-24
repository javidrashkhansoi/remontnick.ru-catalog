/** @type {HTMLFormElement} */
const catalogForm = document.querySelector(".catalog-form");
/** @type {HTMLUListElement} */
const filterChoices = document.querySelector(".filter-choices");

if (catalogForm && filterChoices) {
  /** @type {NodeListOf<HTMLInputElement>} */
  const inputs = catalogForm.querySelectorAll(".catalog-prices__input, .catalog-checkbox__input");

  filterChoices.innerHTML = "";

  inputs.forEach(input => {
    if (input.classList.contains("catalog-prices__input")) {
      addNumberFilterChoices(input);

      input.addEventListener("blur", () => {
        addNumberFilterChoices(input);
      });
    } else {
      addCheckboxFilterChoices(input);

      input.addEventListener("change", () => {
        addCheckboxFilterChoices(input);
      });
    }
  });

  filterChoices.addEventListener("click", event => {
    /** @type {{target: HTMLElement}} */
    const { target } = event;

    if (target.closest(".filter-choices__button")) {
      /** @type {HTMLLIElement} */
      const filterChoicesItem = target.closest(".filter-choices__item");

      if (filterChoicesItem) {
        const { dataset } = filterChoicesItem;
        const { inputId } = dataset;
        const input = document.getElementById(inputId);

        if (input) {
          if (input.classList.contains("catalog-prices__input")) {
            input.value = "";

            input.dispatchEvent(new Event("blur"));
            input.dispatchEvent(new Event("change"));
          } else {
            input.checked = false;

            input.dispatchEvent(new Event("change"));
          }

          filterChoicesItem.remove();
        }
      }
    }
  });

  /** @param {HTMLInputElement} input */
  function addNumberFilterChoices(input) {
    setTimeout(() => {
      const { id, value } = input;

      value ? addFilterChoices(id, value) : removeFilterChoices(id);
    });
  }

  /** @param {HTMLInputElement} input */
  function addCheckboxFilterChoices(input) {
    const { id, checked } = input;

    if (checked) {
      /** @type {HTMLLabelElement} */
      const label = input.previousElementSibling;
      /** @type {HTMLSpanElement} */
      const span = label?.querySelector(".catalog-checkbox__text");
      const text = span?.textContent;

      if (text) addFilterChoices(id, text);
    } else {
      removeFilterChoices(id);
    }
  }

  /**
   * @param {string} id
   * @param {string} text
   */
  function addFilterChoices(id, text) {
    removeFilterChoices(id);

    const html = `<li class="filter-choices__item" data-input-id="${id}">
      <span class="filter-choices__text">${text}</span>
      <button class="filter-choices__button" aria-label="#"></button>
    </li>`;

    filterChoices.insertAdjacentHTML("beforeend", html);
  }

  /** @param {string} id */
  function removeFilterChoices(id) {
    /** @type {HTMLLIElement} */
    const choice = filterChoices.querySelector(`[data-input-id="${id}"]`);

    choice?.remove();
  }
}
