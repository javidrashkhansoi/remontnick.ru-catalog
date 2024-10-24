/** @type {NodeListOf<HTMLInputElement>} */
const prices = document.querySelectorAll("[data-price]");

prices.forEach(price => {
  const { dataset } = price;
  const { prefix, suffix } = dataset;

  price.addEventListener("focus", () => {
    const { value } = price;
    const formattedValue = +value.replaceAll(/\s/g, "").replaceAll(prefix, "").replaceAll(suffix, "");

    price.value = formattedValue ? formattedValue : "";
    price.type = "number";
  });

  price.addEventListener("blur", () => {
    const { value } = price;

    price.type = "text";
    price.value = +value ? `${prefix} ${+value} ${suffix}` : "";
  });
});
