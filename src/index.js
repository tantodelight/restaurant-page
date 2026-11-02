import "./styles.css"; // don't touch this line
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

// Find the page container and navigation buttons.
const content = document.querySelector("#content");
const tabs = document.querySelectorAll("nav button");

// Match each tab name to its page module.
const pages = {
  home: loadHome,
  menu: loadMenu,
  contact: loadContact,
};

// Update the visual and accessibility state of the active tab.
function setActiveTab(selectedTab) {
  tabs.forEach((tab) => {
    const isSelected = tab === selectedTab;
    tab.classList.toggle("active", isSelected);
    tab.setAttribute("aria-current", isSelected ? "page" : "false");
  });
}

// Clear the current page, highlight the selected tab, and load the new page.
function switchTab(pageName, selectedTab) {
  content.replaceChildren();
  setActiveTab(selectedTab);
  pages[pageName]();
}

// Connect each navigation button to its page.
tabs.forEach((tab) => {
  tab.addEventListener("click", () => switchTab(tab.dataset.page, tab));
});

// Load the home page when the site first opens.
switchTab("home", document.querySelector("nav button[data-page='home']"));

// Add the restaurant name to the navigation bar.
const brand = document.createElement("span");
brand.classList.add("brand-mark");
brand.textContent = "TANTO’S HEARTH";
document.querySelector("nav").prepend(brand);
