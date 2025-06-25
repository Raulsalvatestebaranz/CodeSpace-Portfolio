// =========================================================================================
// ✅ FILE: recipes.js – Unified Meal & Cocktail Search Logic
// =========================================================================================


// =========================================================================================
// ✅ CONFIGURATION – API & DOM Setup per Type
// =========================================================================================
const configs = {
  meal: {
    apiBase: "https://www.themealdb.com/api/json/v1/1/",
    searchUrl: "search.php?s=",
    lookupUrl: "lookup.php?i=",
    randomUrl: "random.php",
    dom: {
      form: "meal-search-form",
      input: "meal-search-input",
      randomBtn: "meal-random-button",
      message: "meal-message-area",
      grid: "meal-results-grid",
      modal: "meal-modal",
      modalContent: "meal-modal-content",
      closeBtn: "meal-modal-close",
    },
    renderCard: ({ idMeal, strMeal, strMealThumb }) => `
      <img src="${strMealThumb}" alt="${strMeal}" />
      <h3>${strMeal}</h3>
      <button class="btn btn-link recipe-button" data-id="${idMeal}">View Details</button>
    `,
    renderModalContent: (meal) => `
      <h2>${meal.strMeal}</h2>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <p><strong>Category:</strong> ${meal.strCategory}</p>
      <p><strong>Area:</strong> ${meal.strArea}</p>
      <p><strong>Instructions:</strong> ${meal.strInstructions}</p>
      <h3>Ingredients:</h3>
      <ul>${Array.from({ length: 20 }, (_, i) =>
        meal[`strIngredient${i + 1}`]
          ? `<li>${meal[`strMeasure${i + 1}`] || ""} ${meal[`strIngredient${i + 1}`]}</li>`
          : ''
      ).join('')}</ul>
    `,
    dataKey: "meals",
  },

  cocktail: {
    apiBase: "https://www.thecocktaildb.com/api/json/v1/1/",
    searchUrl: "search.php?s=",
    lookupUrl: "lookup.php?i=",
    randomUrl: "random.php",
    dom: {
      form: "cocktail-search-form",
      input: "cocktail-search-input",
      randomBtn: "cocktail-random-button",
      message: "cocktail-message-area",
      grid: "cocktail-results-grid",
      modal: "cocktail-modal",
      modalContent: "cocktail-modal-content",
      closeBtn: "cocktail-modal-close",
    },
    renderCard: ({ idDrink, strDrink, strDrinkThumb }) => `
      <img src="${strDrinkThumb}" alt="${strDrink}" />
      <h3>${strDrink}</h3>
      <button class="btn btn-link recipe-button" data-id="${idDrink}">View Details</button>
    `,
    renderModalContent: (drink) => `
      <h2>${drink.strDrink}</h2>
      <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" />
      <p><strong>Category:</strong> ${drink.strCategory}</p>
      <p><strong>Glass:</strong> ${drink.strGlass}</p>
      <p><strong>Instructions:</strong> ${drink.strInstructions}</p>
      <h3>Ingredients:</h3>
      <ul>${Array.from({ length: 15 }, (_, i) =>
        drink[`strIngredient${i + 1}`]
          ? `<li>${drink[`strMeasure${i + 1}`] || ""} ${drink[`strIngredient${i + 1}`]}</li>`
          : ''
      ).join('')}</ul>
    `,
    dataKey: "drinks",
  }
};


// =========================================================================================
// ✅ FETCH HELPER – JSON Wrapper with Error Handling
// =========================================================================================
async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}


// =========================================================================================
// ✅ MAIN INITIALIZER – Handles All Type Logic (Meal / Cocktail)
// =========================================================================================
function initRecipeFinder(type) {
  const cfg = configs[type];
  const dom = Object.fromEntries(
    Object.entries(cfg.dom).map(([key, id]) => [key, document.getElementById(id)])
  );

  // ---------------------------------------------
  // ✅ UTIL – Show Message
  // ---------------------------------------------
  function showMessage(msg, cls = "") {
    dom.message.textContent = msg;
    dom.message.className = `message ${cls}`;
  }

  // ---------------------------------------------
  // ✅ RENDER – Result Grid
  // ---------------------------------------------
  function renderItems(items) {
    dom.grid.innerHTML = "";
    if (!items || !items.length) {
      showMessage(`No ${type}s found.`, "error");
      return;
    }

    const fragment = document.createDocumentFragment();
    items.forEach(item => {
      const card = document.createElement("div");
      card.className = "recipe-item";
      card.innerHTML = cfg.renderCard(item);
      fragment.appendChild(card);
    });
    dom.grid.appendChild(fragment);
  }

  // ---------------------------------------------
  // ✅ LOAD – Random Results (Default 4)
  // ---------------------------------------------
  async function loadRandom(count = 4) {
    showMessage(`Loading random ${type}s...`, "loading");
    try {
      const items = [];
      for (let i = 0; i < count; i++) {
        const data = await fetchJson(`${cfg.apiBase}${cfg.randomUrl}`);
        items.push(...data[cfg.dataKey]);
      }
      renderItems(items);
      showMessage(`Here are some random ${type}s:`);
    } catch {
      showMessage(`Failed to load random ${type}s.`, "error");
    }
  }

  // ---------------------------------------------
  // ✅ EVENTS – Search Form
  // ---------------------------------------------
  dom.form.addEventListener("submit", async e => {
    e.preventDefault();
    const query = dom.input.value.trim();
    if (!query) {
      showMessage(`Please enter a ${type} name.`, "error");
      return;
    }

    showMessage(`Searching ${type}s...`, "loading");
    try {
      const data = await fetchJson(`${cfg.apiBase}${cfg.searchUrl}${encodeURIComponent(query)}`);
      renderItems(data[cfg.dataKey]);
      showMessage(`Search results:`);
    } catch {
      showMessage(`Error searching ${type}s.`, "error");
    }
  });

  // ---------------------------------------------
  // ✅ EVENTS – Random Button
  // ---------------------------------------------
  dom.randomBtn.addEventListener("click", () => loadRandom());

  // ---------------------------------------------
  // ✅ EVENTS – Card Click → Load Modal
  // ---------------------------------------------
  dom.grid.addEventListener("click", async e => {
    const btn = e.target.closest(".recipe-button");
    if (!btn) return;

    try {
      const data = await fetchJson(`${cfg.apiBase}${cfg.lookupUrl}${btn.dataset.id}`);
      dom.modalContent.innerHTML = cfg.renderModalContent(data[cfg.dataKey][0]);
      dom.modal.classList.remove("modal--hidden");
    } catch {
      showMessage(`Error loading details.`, "error");
    }
  });

  // ---------------------------------------------
  // ✅ EVENTS – Modal Close
  // ---------------------------------------------
  dom.closeBtn.addEventListener("click", () => {
    dom.modal.classList.add("modal--hidden");
    dom.modalContent.innerHTML = "";
  });

  window.addEventListener("keydown", e => {
    if (e.key === "Escape" && !dom.modal.classList.contains("modal--hidden")) {
      dom.modal.classList.add("modal--hidden");
      dom.modalContent.innerHTML = "";
    }
  });

  // ---------------------------------------------
  // ✅ INITIALIZE WITH RANDOM
  // ---------------------------------------------
  loadRandom();
}


// =========================================================================================
// ✅ BOOTSTRAP – Initialize Both Apps on Load
// =========================================================================================
window.addEventListener("DOMContentLoaded", () => {
  initRecipeFinder("meal");
  initRecipeFinder("cocktail");
});
