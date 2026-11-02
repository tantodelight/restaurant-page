export default function loadMenu() {
  // Create the main menu page section.
  const section = document.createElement("div");
  section.classList.add("page", "menu-page");

  // Create the menu page heading.
  const heading = document.createElement("div");
  heading.classList.add("page-heading");

  const eyebrow = document.createElement("p");
  eyebrow.classList.add("eyebrow", "reveal");
  eyebrow.textContent = "The Tanto Hearth menu";

  const title = document.createElement("h1");
  title.classList.add("reveal");
  title.textContent = "Stories carried by fire";

  heading.append(eyebrow, title);

  // Create the container for menu cards.
  const menuGrid = document.createElement("div");
  menuGrid.classList.add("menu-grid");

  // Store the menu categories and their dishes.
  const menuSections = [
    {
      name: "The first ember",
      items: [
        ["Ember Suya Prawns", "Charred pepper, lime, smoked peanut", "$22"],
        [
          "Golden Hearth Kenkey",
          "Fermented corn, doko spice, brown butter",
          "$18",
        ],
        ["Tanto’s Fire Bites", "Yam, crab, tamarind emulsion", "$20"],
      ],
    },
    {
      name: "From the hearth",
      items: [
        ["Smoke & Berbere Rib", "Teff, red wine jus, ginger greens", "$38"],
        ["Coconut Coast Sea Bass", "Plantain, okra, lime leaf broth", "$34"],
        ["Oxtail by the Fire", "Fonio, cassava crisps, hot pepper oil", "$36"],
      ],
    },
    {
      name: "The last glow",
      items: [
        ["Pineapple & Warm Spice Cake", "Coconut cream, salted caramel", "$16"],
        ["Rooibos Hearth Pudding", "Vanilla custard, rooibos caramel", "$15"],
        ["Dark Chocolate Fonio Tart", "Date, cardamom, sea salt", "$17"],
      ],
    },
  ];

  // Build one card for each menu category.
  menuSections.forEach((menuSection, sectionIndex) => {
    const card = document.createElement("article");
    card.classList.add("menu-card", "reveal-card");
    card.style.setProperty("--reveal-delay", `${sectionIndex * 110}ms`);

    const cardHeading = document.createElement("h2");
    cardHeading.textContent = menuSection.name;
    card.appendChild(cardHeading);

    // Build each dish row inside the category card.
    menuSection.items.forEach(([dish, description, price]) => {
      const item = document.createElement("div");
      item.classList.add("menu-item");

      const nameRow = document.createElement("div");
      nameRow.classList.add("dish-row");

      const dishName = document.createElement("h3");
      dishName.textContent = dish;

      const dishPrice = document.createElement("span");
      dishPrice.textContent = price;

      nameRow.append(dishName, dishPrice);

      const dishDescription = document.createElement("p");
      dishDescription.textContent = description;

      item.append(nameRow, dishDescription);
      card.appendChild(item);
    });

    menuGrid.appendChild(card);
  });

  // Assemble and display the menu page.
  section.append(heading, menuGrid);
  document.querySelector("#content").appendChild(section);
}
