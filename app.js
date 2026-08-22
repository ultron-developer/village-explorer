// Simple POI data model
const poiData = {
  Bridge: {
    name: "Bridge",
    image: "Bridge",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sem id ante tempus consequat. Nullam sit amet ipsum faucibus, feugiat libero vel, hendrerit diam. Curabitur sed libero mi. Nunc aliquam euismod vestibulum. Aenean tellus nunc, pulvinar vitae quam ut, dictum aliquam sem. Proin semper metus eget bibendum mattis.",
  },
  Fountain: {
    name: "Fountain",
    image: "Fountain",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sem id ante tempus consequat. Nullam sit amet ipsum faucibus, feugiat libero vel, hendrerit diam. Curabitur sed libero mi. Nunc aliquam euismod vestibulum. Aenean tellus nunc, pulvinar vitae quam ut, dictum aliquam sem. Proin semper metus eget bibendum mattis.",
  },
  Cemetery: {
    name: "Cemetery",
    image: "Cemetery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sem id ante tempus consequat. Nullam sit amet ipsum faucibus, feugiat libero vel, hendrerit diam. Curabitur sed libero mi. Nunc aliquam euismod vestibulum. Aenean tellus nunc, pulvinar vitae quam ut, dictum aliquam sem. Proin semper metus eget bibendum mattis.",
  },
  Hospital: {
    name: "Hospital",
    image: "Hospital",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sem id ante tempus consequat. Nullam sit amet ipsum faucibus, feugiat libero vel, hendrerit diam. Curabitur sed libero mi. Nunc aliquam euismod vestibulum. Aenean tellus nunc, pulvinar vitae quam ut, dictum aliquam sem. Proin semper metus eget bibendum mattis.",
  },
  School: {
    name: "School",
    image: "School",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sem id ante tempus consequat. Nullam sit amet ipsum faucibus, feugiat libero vel, hendrerit diam. Curabitur sed libero mi. Nunc aliquam euismod vestibulum. Aenean tellus nunc, pulvinar vitae quam ut, dictum aliquam sem. Proin semper metus eget bibendum mattis.",
  },
  Neighborhood: {
    name: "Neighborhood",
    image: "Neighborhood",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sem id ante tempus consequat. Nullam sit amet ipsum faucibus, feugiat libero vel, hendrerit diam. Curabitur sed libero mi. Nunc aliquam euismod vestibulum. Aenean tellus nunc, pulvinar vitae quam ut, dictum aliquam sem. Proin semper metus eget bibendum mattis.",
  },
  Bakery: {
    name: "Bakery",
    image: "Bakery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sem id ante tempus consequat. Nullam sit amet ipsum faucibus, feugiat libero vel, hendrerit diam. Curabitur sed libero mi. Nunc aliquam euismod vestibulum. Aenean tellus nunc, pulvinar vitae quam ut, dictum aliquam sem. Proin semper metus eget bibendum mattis.",
  },
  BookStore: {
    name: "Book Store",
    image: "BookStore",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sem id ante tempus consequat. Nullam sit amet ipsum faucibus, feugiat libero vel, hendrerit diam. Curabitur sed libero mi. Nunc aliquam euismod vestibulum. Aenean tellus nunc, pulvinar vitae quam ut, dictum aliquam sem. Proin semper metus eget bibendum mattis.",
  },
  Pond: {
    name: "Pond",
    image: "Pond",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sem id ante tempus consequat. Nullam sit amet ipsum faucibus, feugiat libero vel, hendrerit diam. Curabitur sed libero mi. Nunc aliquam euismod vestibulum. Aenean tellus nunc, pulvinar vitae quam ut, dictum aliquam sem. Proin semper metus eget bibendum mattis.",
  },
  TownCentre: {
    name: "Town Centre",
    image: "TownCentre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sem id ante tempus consequat. Nullam sit amet ipsum faucibus, feugiat libero vel, hendrerit diam. Curabitur sed libero mi. Nunc aliquam euismod vestibulum. Aenean tellus nunc, pulvinar vitae quam ut, dictum aliquam sem. Proin semper metus eget bibendum mattis.",
  },
  Forest: {
    name: "Forest",
    image: "Forest",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sem id ante tempus consequat. Nullam sit amet ipsum faucibus, feugiat libero vel, hendrerit diam. Curabitur sed libero mi. Nunc aliquam euismod vestibulum. Aenean tellus nunc, pulvinar vitae quam ut, dictum aliquam sem. Proin semper metus eget bibendum mattis.",
  },
  Playground: {
    name: "Park",
    image: "Playground",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sem id ante tempus consequat. Nullam sit amet ipsum faucibus, feugiat libero vel, hendrerit diam. Curabitur sed libero mi. Nunc aliquam euismod vestibulum. Aenean tellus nunc, pulvinar vitae quam ut, dictum aliquam sem. Proin semper metus eget bibendum mattis.",
  },
  Garden: {
    name: "Garden",
    image: "Garden",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sem id ante tempus consequat. Nullam sit amet ipsum faucibus, feugiat libero vel, hendrerit diam. Curabitur sed libero mi. Nunc aliquam euismod vestibulum. Aenean tellus nunc, pulvinar vitae quam ut, dictum aliquam sem. Proin semper metus eget bibendum mattis.",
  },
  TownSign: {
    name: "Town Sign",
    image: "Sign",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sem id ante tempus consequat. Nullam sit amet ipsum faucibus, feugiat libero vel, hendrerit diam. Curabitur sed libero mi. Nunc aliquam euismod vestibulum. Aenean tellus nunc, pulvinar vitae quam ut, dictum aliquam sem. Proin semper metus eget bibendum mattis.",
  },
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
