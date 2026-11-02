export default function loadContact() {
  // Create the main contact page section.
  const section = document.createElement("div");
  section.classList.add("page", "contact-page");

  // Create the contact page heading.
  const intro = document.createElement("div");
  intro.classList.add("page-heading");

  const eyebrow = document.createElement("p");
  eyebrow.classList.add("eyebrow", "reveal");
  eyebrow.textContent = "Gather around our hearth";

  const title = document.createElement("h1");
  title.classList.add("reveal");
  title.textContent = "An evening by the fire";

  intro.append(eyebrow, title);

  // Create the container for contact information cards.
  const contactGrid = document.createElement("div");
  contactGrid.classList.add("contact-grid");

  // Add address and opening hours.
  const visitCard = document.createElement("article");
  visitCard.classList.add("contact-card", "reveal-card");
  visitCard.innerHTML = `
        <h2>Find Tanto’s Hearth</h2>
        <p>18 Garden Street<br>Brooklyn, NY 11201</p>
        <p><strong>Wednesday–Sunday</strong><br>5:00 PM — Late</p>
    `;

  // Add reservation phone and email links.
  const reserveCard = document.createElement("article");
  reserveCard.classList.add("contact-card", "reveal-card");
  reserveCard.innerHTML = `
        <h2>Reserve a seat by the fire</h2>
        <p>Private dining and celebration enquiries are warmly welcomed.</p>
        <a href="tel:+12125550188">Concierge: (212) 555-0188</a>
        <a href="mailto:table@tantoshearth.com">table@tantoshearth.com</a>
    `;

  // Assemble and display the contact page.
  contactGrid.append(visitCard, reserveCard);
  section.append(intro, contactGrid);
  document.querySelector("#content").appendChild(section);
}
