const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const recipeCards = document.querySelectorAll(".recipe-card");
const emptyMessage = document.getElementById("empty-message");

function filterRecipes() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCategory = categorySelect.value;
    let visibleCount = 0;

    recipeCards.forEach((card) => {
        const name = card.dataset.name;
        const category = card.dataset.category;
        const matchesName = name.includes(searchText);
        const matchesCategory =
            selectedCategory === "all" || category === selectedCategory;

        const isVisible = matchesName && matchesCategory;
        card.hidden = !isVisible;

        if (isVisible) {
            visibleCount++;
        }
    });

    emptyMessage.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", filterRecipes);
categorySelect.addEventListener("change", filterRecipes);

document.querySelectorAll(".details-button").forEach((button) => {
    button.addEventListener("click", () => {
        const details = button.nextElementSibling;
        const isOpening = details.hidden;

        details.hidden = !isOpening;
        button.textContent = isOpening ? "Сховати рецепт" : "Показати рецепт";
        button.setAttribute("aria-expanded", String(isOpening));
    });
});
