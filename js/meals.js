// =========================================================================================
// ✅ FILE: main.js – Meal Finder Application Logic
// =========================================================================================

// =========================================================================================
// ✅ DOM ELEMENTS – Cached References
// =========================================================================================
const dom = {
  form: document.getElementById("search-form"),
  input: document.getElementById("search-input"),
  randomBtn: document.getElementById("random-button"),
  message: document.getElementById("message-area"),
  grid: document.getElementById("results-grid"),
  modal: document.getElementById("recipe-model"),
  modalContent: document.getElementById("recipe-details-content"),
  closeBtn: document.getElementById("model-close-btn"),
};

// =========================================================================================
// ✅ API ENDPOINT BASE
// =========================================================================================
const API_BASE = "https://www.themealdb.com/api/json/v1/1/";

// =========================================================================================
// ✅ API CALLS – Fetch Functions
// =========================================================================================
async function fetchMealsByName(name) {
  const res = await fetch(`${API_BASE}search.php?s=${encodeURIComponent(name)}`);
  const data = await res.json();
  return data.meals;
}

async function fetchRandomMeal() {
  const res = await fetch(`${API_BASE}random.php`);
  const data = await res.json();
  return data.meals;
}

async function fetchMealById(id) {
  const res = await fetch(`${API_BASE}lookup.php?i=${id}`);
  const data = await res.json();
  return data.meals[0];
}

// =========================================================================================
// ✅ UI HELPERS – Render and Feedback Functions
// =========================================================================================
function showMessage(msg, type = "") {
  dom.message.textContent = msg;
  dom.message.className = `message ${type}`;
}

function renderMeals(meals) {
  dom.grid.innerHTML = "";

  if (!meals || meals.length === 0) {
    showMessage("No meals found.", "error");
    return;
  }

  meals.forEach(meal => {
    const card = document.createElement("div");
    card.className = "recipe-item";
    card.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <h3>${meal.strMeal}</h3>
      <a href="#" class="button recipe-button" data-id="${meal.idMeal}">View Details</a>
    `;
    dom.grid.appendChild(card);
  });
}

function renderMealModal(meal) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const meas = meal[`strMeasure${i}`] || "";
    if (ing) ingredients.push(`${meas.trim()} ${ing}`.trim());
  }

  dom.modalContent.innerHTML = `
    <h2>${meal.strMeal}</h2>
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
    <p><strong>Category:</strong> ${meal.strCategory}</p>
    <p><strong>Area:</strong> ${meal.strArea}</p>
    <p><strong>Instructions:</strong> ${meal.strInstructions}</p>
    <h3>Ingredients:</h3>
    <ul>${ingredients.map(item => `<li>${item}</li>`).join("")}</ul>
  `;

  dom.modal.classList.remove("modal--hidden");
  dom.modalContent.focus();
}

// =========================================================================================
// ✅ EVENT BINDINGS – User Interactions
// =========================================================================================

// 🔎 Handle Form Submission (Search Meals)
dom.form.addEventListener("submit", async e => {
  e.preventDefault();
  const query = dom.input.value.trim();
  if (!query) {
    showMessage("Please enter a meal name.", "error");
    return;
  }

  showMessage("Searching meals...", "loading");
  const meals = await fetchMealsByName(query);
  renderMeals(meals);
  showMessage("Results:");
});

// 🎲 Random Meals Button Click
dom.randomBtn.addEventListener("click", async () => {
  showMessage("Getting random meals...", "loading");

  try {
    const results = [];
    for (let i = 0; i < 4; i++) {
      const meals = await fetchRandomMeal();
      if (meals) results.push(...meals);
    }
    renderMeals(results);
    showMessage("Here are 4 random meals:");
  } catch {
    showMessage("Failed to load random meals. Try again.", "error");
  }
});

// 📋 View Meal Details (Modal Trigger)
dom.grid.addEventListener("click", async e => {
  const btn = e.target.closest(".recipe-button");
  if (!btn) return;
  const meal = await fetchMealById(btn.dataset.id);
  renderMealModal(meal);
});

// ❌ Close Modal
dom.closeBtn.addEventListener("click", () => {
  dom.modal.classList.add("modal--hidden");
  dom.modalContent.innerHTML = "";
});

// ⎋ Escape Key to Close Modal
window.addEventListener("keydown", e => {
  if (e.key === "Escape" && !dom.modal.classList.contains("modal--hidden")) {
    dom.modal.classList.add("modal--hidden");
    dom.modalContent.innerHTML = "";
  }
});

// =========================================================================================
// ✅ INITIAL RANDOM LOAD – Show Starter Meals
// =========================================================================================
window.addEventListener("DOMContentLoaded", async () => {
  showMessage("Loading random meals...", "loading");

  try {
    const results = [];
    for (let i = 0; i < 4; i++) {
      const meals = await fetchRandomMeal();
      if (meals) results.push(...meals);
    }
    renderMeals(results);
    showMessage("Here are some random meals to get you started:");
  } catch {
    showMessage("Failed to load initial meals. Try again.", "error");
  }
});
