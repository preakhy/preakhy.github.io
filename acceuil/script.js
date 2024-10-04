// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Tool launch functions (to be implemented)
function openAITools() {
  console.log("Ouverture des Outils IA...");
}

function openMathTools() {
  console.log("Ouverture des Outils Mathématiques...");
}

function openScienceTools() {
  console.log("Ouverture des Outils Scientifiques...");
}

function openVRTools() {
  console.log("Ouverture des Outils VR...");
}

function openHackingTools() {
  console.log("Ouverture des Outils Hacking...");
}

function openLinuxTools() {
  console.log("Ouverture des Outils Linux...");
}

function openArchiveTools() {
  console.log("Ouverture des Archives...");
}

function openFMHYTools() {
  console.log("Ouverture des Outils FMHY...");
}

function openOtherTools() {
  console.log("Ouverture des Autres Outils...");
}

// Add a subtle glow effect to tool cards on hover
const toolCards = document.querySelectorAll(".tool-card");
toolCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = `0 0 20px ${getComputedStyle(
      document.documentElement
    ).getPropertyValue("--highlight-color")}`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  });
});

// Theme toggle function
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme");
  let newTheme;

  if (currentTheme === "light") {
    newTheme = "futuristic";
  } else if (currentTheme === "futuristic") {
    newTheme = "dark";
  } else {
    newTheme = "light";
  }

  body.setAttribute("data-theme", newTheme);
  updateThemeToggleButton(newTheme);
}

function updateThemeToggleButton(theme) {
  const button = document.getElementById("theme-toggle");
  if (theme === "light") {
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
  } else if (theme === "futuristic") {
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    `;
  } else {
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
  }
}

// Add keyboard navigation for accessibility
document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    const focusableElements = document.querySelectorAll(
      'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }
});

// Digital clock function
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById(
    "digital-clock"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to display time immediately

// Footer visibility
function checkFooterVisibility() {
  const footer = document.querySelector("footer");
  const scrollPosition = window.innerHeight + window.scrollY;
  const bodyHeight = document.body.offsetHeight;

  if (scrollPosition >= bodyHeight - 10) {
    footer.style.opacity = "1";
    footer.style.visibility = "visible";
  } else {
    footer.style.opacity = "0";
    footer.style.visibility = "hidden";
  }
}

window.addEventListener("scroll", checkFooterVisibility);
window.addEventListener("resize", checkFooterVisibility);

// Initial check
checkFooterVisibility();

// Fonction pour afficher les informations système
function showSystemInfo() {
  // Créer le conteneur du popup avec fond cliquable pour fermer
  const popupBackground = document.createElement("div");
  popupBackground.style.position = "fixed";
  popupBackground.style.top = "0";
  popupBackground.style.left = "0";
  popupBackground.style.width = "100%";
  popupBackground.style.height = "100%";
  popupBackground.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  popupBackground.style.zIndex = "999";

  // Créer le conteneur du popup
  const popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.backgroundColor = "var(--secondary-color)";
  popup.style.padding = "20px";
  popup.style.borderRadius = "10px";
  popup.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
  popup.style.zIndex = "1000";
  popup.style.maxWidth = "80%";
  popup.style.maxHeight = "80%";
  popup.style.overflow = "auto";

  // Éviter que le clic sur le popup ferme le fond
  popup.onclick = function (event) {
    event.stopPropagation();
  };

  // Fermer le popup quand on clique à côté
  popupBackground.onclick = function () {
    document.body.removeChild(popupBackground);
  };

  // Récupérer les informations système
  const info = {
    "Langue Préférée": navigator.languages.join(", "),
    Langue: navigator.language,
    "Cookies Activés": navigator.cookieEnabled,
    "Do Not Track": navigator.doNotTrack,
    "Zone Horaire": Intl.DateTimeFormat().resolvedOptions().timeZone,
    "Résolution de la Page": `${window.innerWidth}x${window.innerHeight}`,
    "Résolution de l’Écran": `${screen.width}x${screen.height}`,
    "Profondeur de Couleur": screen.colorDepth,
    Plateforme: navigator.platform,
    "Agent Utilisateur": navigator.userAgent,
    "Support WebGL": !!document.createElement("canvas").getContext("webgl"),
  };

  // Récupérer l'adresse IP depuis ipify
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      info["Adresse IP"] = data.ip; // Ajouter l'adresse IP à l'objet info

      // Fonction pour mettre à jour les informations de la batterie
      function updateBatteryInfo(battery) {
        info["Niveau de Batterie"] = `${(battery.level * 100).toFixed(0)}%`;
        info["Chargement"] = battery.charging ? "Oui" : "Non";

        // Créer le contenu
        let content = "<h2>Informations Système</h2>";
        content += `<p><strong>Adresse IP:</strong> ${info["Adresse IP"]}</p>`;
        content += `<p><strong>Niveau de Batterie:</strong> ${info["Niveau de Batterie"]}</p>`;
        content += `<p><strong>Chargement:</strong> ${info["Chargement"]}</p>`;
        content += `<p><strong>Langue Préférée:</strong> ${info["Langue Préférée"]}</p>`;
        content += `<p><strong>Langue:</strong> ${info["Langue"]}</p>`;
        content += `<p><strong>Résolution de la Page:</strong> ${info["Résolution de la Page"]}</p>`;
        content += `<p><strong>Résolution de l’Écran:</strong> ${info["Résolution de l’Écran"]}</p>`;
        content += `<p><strong>Cookies Activés:</strong> ${info["Cookies Activés"]}</p>`;
        content += `<p><strong>Do Not Track:</strong> ${info["Do Not Track"]}</p>`;
        content += `<p><strong>Zone Horaire:</strong> ${info["Zone Horaire"]}</p>`;
        for (let [key, value] of Object.entries(info)) {
          if (
            ![
              "Adresse IP",
              "Niveau de Batterie",
              "Chargement",
              "Langue Préférée",
              "Langue",
              "Résolution de la Page",
              "Résolution de l’Écran",
              "Cookies Activés",
              "Do Not Track",
              "Zone Horaire",
            ].includes(key)
          ) {
            content += `<p><strong>${key}:</strong> ${value}</p>`;
          }
        }

        // Ajouter le bouton de fermeture centré
        content +=
          '<div style="text-align: center;"><button onclick="this.parentElement.parentElement.parentElement.remove()" style="background-color: var(--accent-color); color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer;">Fermer</button></div>';

        popup.innerHTML = content;
      }

      // Vérifier l'état de la batterie si disponible
      if (navigator.getBattery) {
        navigator.getBattery().then((battery) => {
          updateBatteryInfo(battery); // Mise à jour initiale

          // Mettre à jour les informations de batterie toutes les secondes
          setInterval(() => {
            updateBatteryInfo(battery);
          }, 1000);
        });
      } else {
        // Créer le contenu sans informations de batterie
        let content = "<h2>Informations Système</h2>";
        content += `<p><strong>Adresse IP:</strong> ${info["Adresse IP"]}</p>`;
        content += `<p><strong>Niveau de Batterie:</strong> Non disponible</p>`;
        content += `<p><strong>Chargement:</strong> Non disponible</p>`;
        for (let [key, value] of Object.entries(info)) {
          content += `<p><strong>${key}:</strong> ${value}</p>`;
        }

        // Ajouter le bouton de fermeture centré
        content +=
          '<div style="text-align: center;"><button onclick="this.parentElement.parentElement.parentElement.remove()" style="background-color: var(--accent-color); color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer;">Fermer</button></div>';

        popup.innerHTML = content;
      }

      // Ajouter le popup au fond cliquable
      popupBackground.appendChild(popup);
      document.body.appendChild(popupBackground);
    })
    .catch((err) => {
      console.error("Échec de la récupération de l'adresse IP:", err);

      // Créer le contenu même si la récupération de l'IP échoue
      let content = "<h2>Informations Système</h2>";
      content += `<p><strong>Adresse IP:</strong> Non disponible</p>`;
      for (let [key, value] of Object.entries(info)) {
        content += `<p><strong>${key}:</strong> ${value}</p>`;
      }

      // Ajouter le bouton de fermeture centré
      content +=
        '<div style="text-align: center;"><button onclick="this.parentElement.parentElement.parentElement.remove()" style="background-color: var(--accent-color); color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer;">Fermer</button></div>';

      popup.innerHTML = content;
      popupBackground.appendChild(popup);
      document.body.appendChild(popupBackground);
    });
}
