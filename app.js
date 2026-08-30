// Simple POI data model
const poiData = {
  Bridge: {
    name: "Bridge",
    image: "Bridge",
    description:
      "That rustic wooden dock and bridge leads right out over the water. It’s one of the prettiest spots to stand, feel the fresh air, and watch the small fishing boats drift by.",
  },
  Fountain: {
    name: "Fountain",
    image: "Fountain",
    description:
      "The fountain is our absolute favorite landmark! People love to sit on the stone bench to chat, listen to the splashing water, and toss in a shiny coin to make a wish."  },
  Cemetery: {
    name: "Cemetery",
    image: "Cemetery",
    description:
     "Close by the cliff is our old cemetery. It’s very quiet and peaceful, sitting right on the grassy fieldswith a lovely view of the waves and a gentle ocean breeze."  },
  Hospital: {
    name: "Hospital",
    image: "Hospital",
    description:
      "That’s our local hospital right along our main roads. The doctors and nurses there are so sweet and caring, so everyone in town always feels like they’re in good hands."},
  School: {
    name: "School",
    image: "School",
    description:
      "Here’s where all the neighborhood kids go to school. You can hear the bells ringing and kids playing outside every afternoon—it brings so much happy energy to the whole area." },
  Neighborhood: {
    name: "Neighborhood",
    image: "Neighborhood",
    description:
      "This is where most of us live! It’s such a charming neighborhood with bright roofs, lush little lawns, and friendly neighbors who always wave hello from their porches." },
  Bakery: {
    name: "Bakery",
    image: "Bakery",
    description:
     "That's our bakery right by the water! The smell of fresh cinnamon rolls and warm bread hits you the second you walk up the hill. Grab a coffee, sit at the outdoor tables, and enjoy the gorgeous morning view. ;D "},
  BookStore: {
    name: "Book Store",
    image: "BookStore",
    description:
    "Here’s our little bookstore. It’s super quiet and cozy inside, packed to the brim with shelves of amazing stories, local maps, and comfy chairs—I could honestly spend hours lost in the aisles."},
  Pond: {
    name: "Pond",
    image: "Pond",
    description:
      "Just below the park sits this quiet little pond. It’s super tranquil, and you’ll almost always see ducks floating around or dragonflies skimming the water on warm summer days."},
  TownCentre: {
    name: "Town Centre",
    image: "TownCentre",
    description:
     "This is the town center, basically the heart of everything! It’s where everyone ends up bumping into each other to catch up, grab a bite, or gather around for local weekend events."},
  Forest: {
    name: "Forest",
    image: "Forest",
    description:
    "Up past the shops is our forest. It’s full of tall pine trees, rustling leaves, and cool little hidden trails—it's my favorite escape whenever you just need a peaceful walk in nature. :) "},
  Playground: {
    name: "Park",
    image: "Playground",
    description:
      "Right next to the trees is the park! Kids love playing on the slide, and it’s honestly the best spot in town to lay out a picnic blanket and soak up the sunshine."},
  Garden: {
    name: "Garden",
    image: "Garden",
    description:
      "Over here is the community garden! It’s always bursting with bright, colorful flowers and fresh vegetable patches, with tiny bumblebees buzzing around all season long where the community comes to relax and enjoy the outdoors for the whole family! XD"  },
  TownSign: {
    name: "Town Sign",
    image: "Sign.v2",
    description:
     "Welcome to our Town, *Town Name village*!<br><br>We’re so glad you made it, and we hope you have an absolute blast exploring all the lovely spots around our town and meeting the friendly locals. Don’t forget to take a picture with our iconic town sign before you leave!"  },
};

const infoPanel = document.getElementById("poi-info");
const dataPanel = document.getElementById("info-section");
const markers = document.querySelectorAll(".poi-marker");
const closeBtn = document.getElementById("closeBtn");
const infoImage = document.getElementById("info-image");

closeBtn.addEventListener("click", () => {
  dataPanel.style.display = "none";
});

markers.forEach((marker) => {
  marker.addEventListener("click", () => {
    const id = marker.dataset.id;
    const poi = poiData[id];
    dataPanel.style.display = "flex";
    if (!poi) return;
    infoImage.src = "assets/" + poi.image + ".png";
    infoPanel.innerHTML = `
      <h2>${poi.name}</h2>
      <p class="poi-info-p">${poi.description}</p>
    `;
  });
});

const tooltip = document.createElement("div");
tooltip.className = "map-tooltip";
document.body.appendChild(tooltip);

let hoverTimer = null;

markers.forEach((marker) => {
  marker.addEventListener("mouseenter", () => {
    const id = marker.dataset.id;
    const data = poiData[id];

    if (!data) return;

    hoverTimer = setTimeout(() => {
      tooltip.innerHTML = `
        <strong>${data.name}</strong><br>
        ${data.description.substring(0, 20)}
      `;

      // Position tooltip
      const rect = marker.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const aboveY = rect.top + window.scrollY + 100; // tooltip above marker

      tooltip.style.left = centerX + "px";
      tooltip.style.top = aboveY + "px";

      tooltip.classList.add("show");
    }, 800);
  });

  marker.addEventListener("mouseleave", () => {
    clearTimeout(hoverTimer);
    tooltip.classList.remove("show");
  });
});
