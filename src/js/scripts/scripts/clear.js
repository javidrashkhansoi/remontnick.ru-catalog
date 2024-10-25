/** @type {HTMLElement} */
const main = document.querySelector("main");
/** @type {HTMLElement} */
const firstChild = main?.firstElementChild;

if (firstChild) {
  const clearElement = document.createElement("div");
  /** @type {HTMLElement} */
  const firstChildInner = firstChild.lastElementChild;

  clearElement.style.clear = "both";
  firstChild.insertAdjacentElement("afterend", clearElement);
  firstChild.classList.add("wrapper");

  if (firstChildInner) firstChildInner.style.padding = "0";
}
