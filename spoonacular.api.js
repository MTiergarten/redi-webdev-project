// Spoonacular Doc: https://spoonacular.com/food-api/docs

async function findVegetarian() {
    const apiKey = '582a62bc2bef47c9a0e3aededb18d8bc';
    let endpoint = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=4b9edfca8285433db4ff655bddb9d300&diet=paleo'; // question mark at end of endpoint url (https://api.spoonacular.com/recipes/complexSearch) indicates that parameters are starting
    const response = await fetch(endpoint);
    const results = await response.json();
    console.log(results.results);
}

findVegetarian();