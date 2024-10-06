import { Scrolling } from "../../modules/scrolling.js";

const minWidth992 = matchMedia("(min-width: 992.1px)");
/** @type {HTMLElement} */
const filter = document.querySelector(".catalog-filter");
/** @type {HTMLButtonElement} */
const filterOpenButton = document.querySelector(".filter-button");
/** @type {HTMLButtonElement} */
const filterCloseButton = document.querySelector(".catalog-filter__close");

filterOpenButton?.addEventListener("click", () => {
  filter?.classList.add("catalog-filter--show");
  Scrolling.lock();
});

filterCloseButton?.addEventListener("click", () => {
  closeFilter();
});

document.addEventListener("keydown", (event) => {
  const { code } = event;

  if (code === "Escape") closeFilter();
});

document.addEventListener("click", (event) => {
  /** @type {{target: HTMLElement}} */
  const { target } = event;

  if (!target.closest(".catalog-filter") && !target.closest(".filter-button")) closeFilter();
});

minWidth992.addEventListener("change", (event) => {
  const { matches } = event;

  if (matches) closeFilter();
});

function closeFilter() {
  filter?.classList.remove("catalog-filter--show");
  Scrolling.unlock();
}
