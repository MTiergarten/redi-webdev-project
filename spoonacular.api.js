async function findVegetarian() {
    const apiKey = '4b9edfca8285433db4ff655bddb9d300';
    let endpoint = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=4b9edfca8285433db4ff655bddb9d300&diet=paleo'; // question mark at end of endpoint url (https://api.spoonacular.com/recipes/complexSearch) indicates that parameters are starting
    const response = await fetch(endpoint);
    const results = await response.json();
    console.log(results.results);
}

findVegetarian();