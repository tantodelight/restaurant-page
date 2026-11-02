export default function loadHome() {
  // Create the main home page section.
  const section = document.createElement("div");
  section.classList.add("page", "home-page");

  // Resolve the bundled video URL so Webpack includes it in the build.
  const videoUrl = new URL("./assets/r_background.mp4", import.meta.url).href;

  // Create a muted, looping background video.
  const backgroundVideo = document.createElement("video");
  backgroundVideo.classList.add("home-video");
  backgroundVideo.src = videoUrl;
  backgroundVideo.autoplay = true;
  backgroundVideo.loop = true;
  backgroundVideo.muted = true;
  backgroundVideo.playsInline = true;
  backgroundVideo.setAttribute("aria-hidden", "true");

  // Create the hero container.
  const hero = document.createElement("div");
  hero.classList.add("hero-card");

  // Add the introductory label.
  const eyebrow = document.createElement("p");
  eyebrow.classList.add("eyebrow", "reveal");
  eyebrow.textContent = "The hearth of Tanto";

  // Add the main restaurant heading.
  const heading = document.createElement("h1");
  heading.classList.add("reveal");
  heading.textContent = "Africa, gathered around the fire";

  // Add the restaurant description.
  const copy = document.createElement("p");
  copy.classList.add("hero-copy", "reveal");
  copy.textContent =
    "A refined journey through Africa’s fire, spice, harvest, and hospitality—reimagined at Tanto’s Hearth.";

  // Create the hours and location area.
  const details = document.createElement("div");
  details.classList.add("home-details", "reveal");

  const hours = document.createElement("p");
  hours.innerHTML = "<strong>Wednesday–Sunday</strong><br>5:00 PM — Late";

  const location = document.createElement("p");
  location.innerHTML =
    "<strong>Tanto’s Hearth</strong><br>18 Garden Street, Brooklyn";

  // Assemble and display the home page.
  details.append(hours, location);
  hero.append(eyebrow, heading, copy, details);
  section.append(backgroundVideo, hero);
  document.querySelector("#content").appendChild(section);
}
