// Sample recipe data (replace with your actual recipes)
const recipes = [
    { name: "Grilled Chicken", ingredients: ["chicken", "herbs", "lemon"], instructions: "Grill chicken with herbs and lemon until fully cooked." },
    { name: "Vegetable Stir Fry", ingredients: ["mixed vegetables", "soy sauce", "ginger"], instructions: "Stir-fry vegetables with soy sauce and ginger for 5-7 minutes." },
    { name: "Pasta Carbonara", ingredients: ["pasta", "eggs", "bacon", "cheese"], instructions: "Cook pasta, mix with eggs, bacon, and cheese, and serve." },
    { name: "Caesar Salad", ingredients: ["lettuce", "croutons", "parmesan", "Caesar dressing"], instructions: "Toss lettuce with croutons, parmesan, and dressing." },
    { name: "BBQ Ribs", ingredients: ["ribs", "BBQ sauce", "spices"], instructions: "Cook ribs with BBQ sauce and spices until tender." }
];

// Function to display the list of recipes
function displayRecipes(recipes) {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = ""; // Clear the list before populating

    recipes.forEach(recipe => {
        const recipeItem = document.createElement("div");
        recipeItem.classList.add("recipe-item");

        const recipeName = document.createElement("h3");
        recipeName.textContent = recipe.name;

        const recipeIngredients = document.createElement("p");
        recipeIngredients.textContent = "Ingredients: " + recipe.ingredients.join(", ");

        const recipeInstructions = document.createElement("p");
        recipeInstructions.textContent = "Instructions: " + recipe.instructions;

        recipeItem.appendChild(recipeName);
        recipeItem.appendChild(recipeIngredients);
        recipeItem.appendChild(recipeInstructions);

        recipeList.appendChild(recipeItem);
    });
}

// Search function to filter recipes based on user input
function searchRecipes(query) {
    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query.toLowerCase()) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query.toLowerCase()))
    );
    displayRecipes(filteredRecipes);
}

// Event listener for recipe search
document.getElementById("recipe-search").addEventListener("input", (event) => {
    const searchQuery = event.target.value;
    searchRecipes(searchQuery);
});

// Initial load of all recipes
document.addEventListener("DOMContentLoaded", () => {
    displayRecipes(recipes);
});
