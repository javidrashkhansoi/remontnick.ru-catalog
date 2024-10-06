/** @type {NodeListOf<HTMLButtonElement>} */
const moreButton = document.querySelectorAll(".more-button");
const checkboxesToggleClass = "catalog-checkboxes--show";

moreButton.forEach(button => {
  /** @type {HTMLSpanElement} */
  const buttonText = button.querySelector(".more-button__text");
  /** @type {HTMLUListElement} */
  const checkboxes = button.previousElementSibling;

  if (buttonText && checkboxes && checkboxes instanceof HTMLUListElement) {
    const { dataset } = buttonText;
    const { showText, hideText } = dataset;

    button.addEventListener("click", () => {
      checkboxes.classList.toggle(checkboxesToggleClass);
      buttonText.textContent = checkboxes.classList.contains(checkboxesToggleClass) ? hideText : showText;
    });
  }
});
