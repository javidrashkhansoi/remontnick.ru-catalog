/** @type {NodeListOf<HTMLElement>} */
const tabs = document.querySelectorAll("[data-tabs]");

tabs.forEach(tab => {
  /** @type {NodeListOf<HTMLButtonElement>} */
  const tabButtons = tab.querySelectorAll("[data-tab]");
  /** @type {NodeListOf<HTMLElement>} */
  const tabPanels = tab.querySelectorAll("[data-panel]");

  if (tabButtons.length === tabPanels.length) {
    tabButtons.forEach(button => {
      button.addEventListener("click", () => {
        const { dataset } = button;
        const { tab } = dataset;

        tabButtons.forEach(button => {
          button.classList.toggle("active", button.dataset.tab === tab);
        });

        tabPanels.forEach(panel => {
          panel.toggleAttribute("hidden", panel.dataset.panel !== tab);
        });
      });
    });
  }
});
