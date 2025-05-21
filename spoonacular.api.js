// Spoonacular Doc: https://spoonacular.com/food-api/docs

async function findVegetarian() {
    const apiKey = '582a62bc2bef47c9a0e3aededb18d8bc';
    let endpoint = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=582a62bc2bef47c9a0e3aededb18d8bc&diet=vegetarian'; // question mark at end of endpoint url (https://api.spoonacular.com/recipes/complexSearch) indicates that parameters are starting
    const fetchResponse = await fetch(endpoint);
    const convertResponse = await fetchResponse.json();
    console.log(convertResponse);
}

// dietaryPreferences (['dairy', 'gluten', 'nuts', 'seafood', 'vegetarian', 'vegan']
// https://spoonacular.com/food-api/docs#Diets : Gluten Free, Vegetarian, Vegan
// https://spoonacular.com/food-api/docs#Intolerances : Dairy, Gluten, Peanut, Seafood

findVegetarian();
// Recipes: https://spoonacular.com/food-api/docs#Search-Recipes-Complex --- This method combines searching by query, by ingredients, and by nutrients into one endpoint
// Images: https://spoonacular.com/food-api/docs#Show-Images
// https://spoonacular.com/food-api/docs#Authentication
// https://spoonacular.com/food-api/docs#Get-Shopping-List
// sweet or savory breakfast https://spoonacular.com/food-api/docs#Taste-by-ID
// filter by ingredient https://spoonacular.com/food-api/docs#Detect-Food-in-Text / https://spoonacular.com/food-api/docs#Ingredient-Search