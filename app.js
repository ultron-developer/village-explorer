// Simple POI data model
const poiData = {
  library: {
    name: "Central Library",
    description:
      "Main study hub with quiet zones, group rooms, and a digital media lab.",
    features: [
      "24/7 access",
      "AR navigation planned",
      "3D scanned interior (future)",
    ],
  },
  oasis: {
    name: "Oasis",
    description: "Description",
    features: [
      "24/7 access",
      "AR navigation planned",
      "3D scanned interior (future)",
    ],
  },
  cafeteria: {
    name: "Campus Cafeteria",
    description:
      "Food court with multiple vendors, outdoor seating, and live events on weekends.",
    features: [
      "Live menu in app",
      "Queue tracking",
      "360° kitchen tour (future)",
    ],
  },
  lab: {
    name: "Innovation Lab",
    description:
      "Makerspace with 3D printers, VR rigs, and scanning tools for student projects.",
    features: ["3D asset upload", "Scan-to-map integration", "IoT sensors"],
  },
};

const infoPanel = document.getElementById("poi-info");
const dataPanel = document.getElementById("info-section");
const markers = document.querySelectorAll(".poi-marker");
const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", () => {
  dataPanel.style.display = "none";
});

markers.forEach((marker) => {
  marker.addEventListener("click", () => {
    const id = marker.dataset.id;
    const poi = poiData[id];
    dataPanel.style.display = "flex";
    if (!poi) return;

    infoPanel.innerHTML = `
      <h2>${poi.name}</h2>
      <p>${poi.description}</p>
      <h4 style="margin-top:0.75rem;">Prototype Features</h4>
      <ul style="margin-top:0.25rem; padding-left:1.2rem;">
        ${poi.features.map((f) => `<li>${f}</li>`).join("")}
      </ul>
    `;
  });
});

// Optional: basic keyboard navigation between POIs
document.addEventListener("keydown", (e) => {
  const ids = Object.keys(poiData);
  const current = document.activeElement.dataset?.id;
  const currentIndex = ids.indexOf(current);
  if (e.key === "ArrowRight") {
    const nextIndex = (currentIndex + 1) % ids.length;
    document.querySelector(`.poi-marker[data-id="${ids[nextIndex]}"]`)?.focus();
  }
  if (e.key === "ArrowLeft") {
    const prevIndex = (currentIndex - 1 + ids.length) % ids.length;
    document.querySelector(`.poi-marker[data-id="${ids[prevIndex]}"]`)?.focus();
  }
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
        ${data.description}
      `;

      // Position tooltip
      const rect = marker.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const aboveY = rect.top + window.scrollY + 55; // tooltip above marker

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
