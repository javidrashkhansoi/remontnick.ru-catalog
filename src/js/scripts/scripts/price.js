/** @type {NodeListOf<HTMLInputElement>} */
const prices = document.querySelectorAll("[data-price]");

prices.forEach(price => {
  const { dataset } = price;
  const { prefix, suffix } = dataset;

  price.addEventListener("focus", () => {
    const { value } = price;

    price.value = +value.replaceAll(/\s/g, "").replaceAll(prefix, "").replaceAll(suffix, "") || 0;
    price.type = "number";
  });

  price.addEventListener("blur", () => {
    const { value } = price;

    price.type = "text";
    price.value = `${prefix} ${+value || 0} ${suffix}`;
  });
});
