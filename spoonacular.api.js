// Document to run some tests with the API


// // Spoonacular Doc: https://spoonacular.com/food-api/docs
//
// const apiKey = '582a62bc2bef47c9a0e3aededb18d8bc';
//
// async function findPreferences() {
//     let endpoint = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=582a62bc2bef47c9a0e3aededb18d8bc&type=breakfast'; // question mark at end of endpoint url (https://api.spoonacular.com/recipes/complexSearch) indicates that parameters are starting
//     const fetchResponse = await fetch(endpoint); //sending request to API. Fetch returns a response object, not actual data yet
//     const convertResponse = await fetchResponse.json(); //parsing this HTTP object into a usable JavaScript object
//     const recipesArray = convertResponse.results; //accessing the "results" field of the JS object, which is an array of objects that can now have array methods applied to it
//     console.log((recipesArray.length) + ' recipes found:');
//     console.log(recipesArray);
// }
//
// // dietaryPreferences (['dairy', 'gluten', 'peanut', 'seafood', 'vegetarian', 'vegan']
// // https://spoonacular.com/food-api/docs#Diets : Gluten Free, Vegetarian, Vegan
// // https://spoonacular.com/food-api/docs#Intolerances : Dairy, Gluten, Peanut, Seafood
//
// //NOTE: change nuts to peanut, seafood to shellfish (according to API docs)
//
// // Dairy Free: intolerances=dairy
// // Gluten Free: intolerances=gluten
// // peanut: intolerances=peanut
// // Shellfish: intolerances=shellfish
// // Vegetarian: diet=vegetarian
// // Vegan: diet=vegan
//
//
// // mealTypes https://spoonacular.com/food-api/docs#Meal-Types
// // Breakfast: type=breakfast
// // Lunch: type=main course
// // Snack: type=snack
// // Dinner: type=main course (how to search?)
//
// findPreferences();
// // Recipes: https://spoonacular.com/food-api/docs#Search-Recipes-Complex --- This method combines searching by query, by ingredients, and by nutrients into one endpoint
// // Images: https://spoonacular.com/food-api/docs#Show-Images
// // https://spoonacular.com/food-api/docs#Authentication
// // https://spoonacular.com/food-api/docs#Get-Shopping-List
// // sweet or savory breakfast https://spoonacular.com/food-api/docs#Taste-by-ID
// // filter by ingredient https://spoonacular.com/food-api/docs#Detect-Food-in-Text / https://spoonacular.com/food-api/docs#Ingredient-Search

const endpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=582a62bc2bef47c9a0e3aededb18d8bc&number=50&addRecipeInformation=true&diet=vegetarian'`; // question mark at end of endpoint url (https://api.spoonacular.com/recipes/complexSearch) indicates that parameters are starting

async function findPreferences(){
    const fetchResponse = await fetch(endpoint); //sending request to API. Fetch returns a response object, not actual data yet
    const convertResponse = await fetchResponse.json(); //parsing this HTTP object into a usable JavaScript object
    return convertResponse.results; //accessing the "results" field of the JS object, which is an array of objects that can now have array methods applied to it
}

// running the async function, where recipesArray is the value returned by the promise in findPreferences()
findPreferences().then(function(recipesArray){
    console.log(recipesArray);
    return recipesArray;
})

//console.log(recipesArray);
// console.log(randomRecipesArray);