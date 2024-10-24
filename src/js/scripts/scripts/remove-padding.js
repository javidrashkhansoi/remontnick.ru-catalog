/** @type {HTMLElement} */
const catalogMain = document.querySelector(".main-catalog");
/** @type {HTMLElement} */
const main = catalogMain?.closest("main");

main?.style.setProperty("padding-inline", "0", "important");
