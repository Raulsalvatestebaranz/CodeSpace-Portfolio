// =========================================================================================
// ✅ DOM ELEMENTS
// =========================================================================================
const dom = {
  searchForm:   document.getElementById("search-form"),
  searchInput:  document.getElementById("search-input"),
  searchButton: document.getElementById("search-button"),
  randomButton: document.getElementById("random-button"),
  message:      document.getElementById("message-area"),
  results:      document.getElementById("results-grid"),
  modal:        document.getElementById("recipe-modal"),           // <-- fixed ID
  modalContent: document.getElementById("recipe-details-content"),
  modalClose:   document.getElementById("modal-close-btn"),       // <-- fixed ID
};

// =========================================================================================
// ✅ API BASE
// =========================================================================================
const API_BASE = "https://www.thecocktaildb.com/api/json/v1/1/";

// =========================================================================================
// ✅ API FETCH HELPERS
// =========================================================================================
async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function fetchCocktailsByName(name) {
  const data = await fetchJson(`${API_BASE}search.php?s=${encodeURIComponent(name)}`);
  return data.drinks;
}

async function fetchCocktailById(id) {
  const data = await fetchJson(`${API_BASE}lookup.php?i=${id}`);
  return data.drinks?.[0];
}

async function fetchRandomCocktail() {
  const data = await fetchJson(`${API_BASE}random.php`);
  return data.drinks;  // an array of one
}

// =========================================================================================
// ✅ RENDER FUNCTIONS
// =========================================================================================
function showMessage(msg, type = "") {
  dom.message.textContent = msg;
  dom.message.className = `message ${type}`;
}

function renderRecipes(drinks) {
  dom.results.innerHTML = "";
  if (!drinks?.length) {
    showMessage("No results found.", "error");
    return;
  }

  const fragment = document.createDocumentFragment();
  drinks.forEach(({ idDrink, strDrink, strDrinkThumb }) => {
    const card = document.createElement("div");
    card.className = "recipe-item";
    card.innerHTML = `
      <img src="${strDrinkThumb}" alt="${strDrink}" loading="lazy" />
      <h3>${strDrink}</h3>
      <button class="btn btn-link recipe-button" data-id="${idDrink}">
        View Details
      </button>
    `;
    fragment.appendChild(card);
  });
  dom.results.appendChild(fragment);
}

function renderModal(cocktail) {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const parts = [
      cocktail[`strMeasure${i}`]?.trim(),
      cocktail[`strIngredient${i}`]?.trim()
    ].filter(Boolean);
    if (parts.length) ingredients.push(parts.join(" "));
  }

  dom.modalContent.innerHTML = `
    <h2>${cocktail.strDrink}</h2>
    <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" />
    <p><strong>Category:</strong> ${cocktail.strCategory}</p>
    <p><strong>Alcoholic:</strong> ${cocktail.strAlcoholic}</p>
    <p><strong>Glass:</strong> ${cocktail.strGlass}</p>
    <p><strong>Instructions:</strong> ${cocktail.strInstructions}</p>
    <h3>Ingredients:</h3>
    <ul>${ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
  `;
  dom.modal.classList.remove("modal--hidden");
  dom.modalContent.focus();
}

// =========================================================================================
// ✅ LOAD RANDOM HELPERS
// =========================================================================================
async function loadRandom(count, loadingMsg, doneMsg) {
  showMessage(loadingMsg, "loading");
  try {
    const promises = Array.from({ length: count }, () => fetchRandomCocktail());
    const arrays  = await Promise.all(promises);
    renderRecipes(arrays.flat());
    showMessage(doneMsg);
  } catch {
    showMessage("Failed to load random cocktails. Try again.", "error");
  }
}

// =========================================================================================
// ✅ EVENT BINDINGS
// =========================================================================================
dom.searchForm.addEventListener("submit", async e => {
  e.preventDefault();
  const query = dom.searchInput.value.trim();
  if (!query) {
    showMessage("Please enter a cocktail name.", "error");
    return;
  }
  showMessage("Searching...", "loading");
  try {
    const drinks = await fetchCocktailsByName(query);
    renderRecipes(drinks);
    showMessage("Search results:");
  } catch {
    showMessage("Error searching cocktails. Try again.", "error");
  }
});

dom.randomButton.addEventListener("click", () =>
  loadRandom(4, "Fetching random cocktails...", "Here are 4 random cocktails:")
);

dom.results.addEventListener("click", async e => {
  const btn = e.target.closest(".recipe-button");
  if (!btn) return;
  try {
    const drink = await fetchCocktailById(btn.dataset.id);
    renderModal(drink);
  } catch {
    showMessage("Error loading details. Try again.", "error");
  }
});

dom.modalClose.addEventListener("click", () => {
  dom.modal.classList.add("modal--hidden");
  dom.modalContent.innerHTML = "";
});

window.addEventListener("keydown", e => {
  if (e.key === "Escape" && !dom.modal.classList.contains("modal--hidden")) {
    dom.modal.classList.add("modal--hidden");
    dom.modalContent.innerHTML = "";
  }
});

// =========================================================================================
// ✅ INITIAL LOAD (4 COCKTAILS)
// =========================================================================================
window.addEventListener("DOMContentLoaded", () =>
  loadRandom(4, "Loading random cocktails...", "Here are some to get you started:")
);
