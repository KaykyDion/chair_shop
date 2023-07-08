function showTabs() {
  const tabButtons = document.querySelectorAll(".products__tabs__button");
  const productTabs = document.querySelectorAll(".products__list__items");

  tabButtons.forEach((tabButton, index) => {
    tabButton.addEventListener("click", () => {
      activeTab(index);
    });
  });

  function activeTab(i) {
    productTabs.forEach((list) => {
      list.classList.remove("active");
    });
    tabButtons.forEach((tabButton) => {
      tabButton.classList.remove("is-active");
    });
    tabButtons[i].classList.add("is-active");
    productTabs[i].classList.add("active");
  }
}
showTabs();

const accordionList = document.querySelectorAll(".accordion__header");
const accordionContent = document.querySelectorAll(".accordion__content");

accordionList.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("is-open");
    accordion.nextElementSibling.classList.toggle("is-open");
  });
});
