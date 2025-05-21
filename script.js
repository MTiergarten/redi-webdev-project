class Recipe { //classes should be named starting with capital letter

    static allRecipes = [];
    //used ChatGPT to understand how I could create a command or function inside my class "recipe" to updates my array of recipes when I create a new instance, instead of having to do this manually, so it suggested using the static property

    constructor(name, type, ingredients, portions, dietaryPreferences) {
        this.name = name;
        this.type = type;
        this.ingredients = ingredients;
        this.portions = portions;
        this.dietaryPreferences = dietaryPreferences;
        Recipe.allRecipes.push(this);
    }

    printRecipe(name, type, ingredients, portions) {
        console.log(this.name);
        console.log(this.type.toString());
        console.log("Ingredients: " + this.ingredients.toString());
        console.log("Portions: " + this.portions);
        console.log("Category: " + this.dietaryPreferences.toString());
    }

    static listRecipes() {
        return Recipe.allRecipes;
    }
}

const dietaryPreferences = ['dairy', 'gluten', 'nuts', 'seafood', 'vegetarian', 'vegan'];

const eggs = new Recipe(
    'Eggs On Toast With Cheese',
    ['breakfast'],
    ['50g bread (1 bun or 2 slices of toast)', '2 eggs (scrambled or omelet)', '20g cheese of choice'],
    1);
eggs.dietaryPreferences = ['nuts', 'seafood', 'vegetarian']

const couscous = new Recipe(
    'Corn Couscous With Cheese',
    ['breakfast'],
    ['40g corn couscous', '1 tsp butter', '60ml water', 'Salt to taste', '20g cheese of choice'],
    1);
couscous.dietaryPreferences = ['gluten', 'nuts', 'seafood', 'vegetarian'];

const oatmeal = new Recipe(
    'High Protein Oatmeal',
    ['breakfast'],
    ['1 banana', '120ml milk of choice', '1 tbsp peanut butter', '20g protein powder of choice', '25g oats'],
    1);
oatmeal.dietaryPreferences = ['dairy', 'gluten', 'seafood', 'vegetarian', 'vegan'];

const bolognese = new Recipe(
    'Simplified Bolognese Pasta',
    ['lunch', 'dinner'],
    ['250g whole wheat fusilli pasta', '400g minced meat', '200g tomato sauce', '1 tbsp tomato sauce', '1/2 finely diced onion', '1 grated clove of garlic', 'Season to taste: salt, black pepper, cayenne pepper, smoked paprika'],
    3);
bolognese.dietaryPreferences = ['dairy', 'gluten', 'seafood', 'nuts'];

const chicken = new Recipe(
    'Grilled Chicken with Herb Potatoes',
    ['lunch', 'dinner'],
    ['400g chicken breast (butterflied)', '1 lime', '1 grated clove or garlic', '2 tbsp olive oil', 'Season to taste: salt and black pepper', '700g potatoes, cut into 1 inch cubes: season to taste with wild garlic, pesto or parsley after boiling'],
    3);
chicken.dietaryPreferences = ['dairy', 'gluten', 'seafood', 'nuts'];

const pork = new Recipe(
    'Roasted Pork Tenderloin with Mashed Potatoes',
    ['lunch', 'dinner'],
    ['700g potatoes (peeled and quartered)', '30g butter', '100ml milk of choice', 'Season to taste: salt, nutmeg, garlic powder and black pepper', '400g pork tenderloin', '2 tbsp olive oil', '2 cloves garlic', '1 tsp paprika', 'Season to taste: salt and black pepper'],
    3);
pork.dietaryPreferences = ['gluten', 'seafood', 'nuts'];

const wrap = new Recipe(
    'Chicken Wrap',
    ['lunch', 'dinner'],
    ['400g chicken breast', '400g tomato basil sauce', '1/2 finely diced onion', '1 grated garlic clove', 'Season to taste: salt, black pepper', '60g light mayo', '3 tortillas'],
    3,
    ['dairy', 'nuts', 'seafood']
)

const salad1 = new Recipe(
    'Green Salad',
    ['veggies'],
    ['Mixed fresh green leaves', 'Olive oil and balsamic dressing'],
    1);
salad1.dietaryPreferences = ['dairy', 'gluten', 'nuts', 'seafood', 'vegetarian', 'vegan'];

const salad2 = new Recipe(
    'Mixed Salad',
    ['veggies'],
    ['Diced tomatoes', 'Sliced cucumber', 'Sliced red onion', 'Sliced bell peppers', 'Lettuce or arugula', 'Olive oil and apple cider vinegar dressing'],
    1);
salad2.dietaryPreferences = ['dairy', 'gluten', 'nuts', 'seafood', 'vegetarian', 'vegan'];

const veggies = new Recipe(
    'Steamed Veggie Mix',
    ['veggies'],
    ['Mixed veggies fresh or frozen', 'Season to taste: salt, black pepper, paprika'],
    1);
veggies.dietaryPreferences = ['dairy', 'gluten', 'nuts', 'seafood', 'vegetarian', 'vegan'];

const tuna = new Recipe(
    'Tuna Sandwich',
    ['snack'],
    ['1 can of tuna (in brine)', '2 tbsp light teriyaki sauce', '2 tbsp light mayo', '4 slices of toast', 'Optional: lettuce, sliced red onion'],
    2);
tuna.dietaryPreferences = ['dairy', 'nuts'];

const yoghurt = new Recipe(
    'Yoghurt Bowl with Fruits',
    ['snack'],
    ['150g greek yoghurt', '15g protein of choice', '150g fruit of choice', 'Optional: 1 tbsp honey'],
    1);
yoghurt.dietaryPreferences = ['gluten', 'nuts', 'seafood', 'vegetarian'];

const grilledCheese = new Recipe(
    'Grilled Cheese',
    ['snack'],
    ['2 slices of toast', '25g soft cheese of choice', '1 tsp butter'],
    1);
grilledCheese.dietaryPreferences = ['nuts', 'seafood', 'vegetarian'];


const userPreferences = document.getElementById('userPreferences');
const checkRestrictions = userPreferences.querySelectorAll('input[type="checkbox"]');
//used chatGPT to understand the difference between elements that can / can't be iterable in a DOM manipulation - and how to create a variable to target all the checkboxes in my form to run in a loop
// const recipesFound = document.getElementById('recipesFound');
const mealPlan = document.getElementById('mealPlan');
const breakfastTitle = document.getElementById('breakfastTitle');
const breakfast = document.getElementById('breakfast');
const lunchTitle = document.getElementById('lunchTitle');
const lunch = document.getElementById('lunch');
const snackTitle = document.getElementById('snackTitle');
const snack = document.getElementById('snack');
const dinnerTitle = document.getElementById('dinnerTitle');
const dinner = document.getElementById('dinner');


function randomize(arr) {
    for (let i = arr.length -1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i+1));
        let currentElement = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = currentElement;
    }
}

userPreferences.addEventListener('submit', function(event) {
    event.preventDefault();

    const restrictions = []
    for (let item of checkRestrictions) {
        if (item.checked) {
            restrictions.push(item.id);
        }
    }

    let filteredRecipes = Recipe.allRecipes.filter(recipe => restrictions.every(restriction => recipe.dietaryPreferences.includes(restriction)));
    //used chatGPT to understand how I could use each item in the array as a condition for my filter - it suggested using the 'every' method

    randomize(filteredRecipes);

    // recipesFound.innerHTML = `<h2>Recipes Found:</h2>`;

    // for (let item of filteredRecipes) {
    //     const planRecipes = document.createElement('li');
    //     planRecipes.textContent = item.name;
    //     document.getElementById('recipesFound').appendChild(planRecipes);
    // }

    mealPlan.innerHTML = `<h1>My Meal Plan:</h1>`;

    breakfastTitle.innerHTML = `<h3>Breakfast</h3>`;
    const breakfastContainer = document.getElementById('breakfast');
    breakfastContainer.innerHTML = '';
    breakfast.classList.add('meal-container');
    breakfast.classList.add('container-bg');
    let breakfastPlan = filteredRecipes.filter(recipe => recipe.type.includes('breakfast'));
    console.log(breakfastPlan);
    let a = 0
    while (a <= 1) {
        if (breakfastPlan.length >=2) {
            const breakfastRecipes = document.createElement('li');
            breakfastRecipes.textContent = breakfastPlan[a].name;
            document.getElementById('breakfast').appendChild(breakfastRecipes);
            a++
        } else if (breakfastPlan.length === 1) {
            const breakfastRecipes = document.createElement('li');
            breakfastRecipes.textContent = breakfastPlan[a].name;
            document.getElementById('breakfast').appendChild(breakfastRecipes);
            break
        } else {
            const breakfastRecipes = document.createElement('li');
            breakfastRecipes.textContent = 'Couldn\'t find recipes';
            document.getElementById('breakfast').appendChild(breakfastRecipes);
            break
        }
    }

    lunchTitle.innerHTML = `<h3>Lunch</h3>`;
    const lunchContainer = document.getElementById('lunch');
    lunchContainer.innerHTML = '';
    lunch.classList.add('meal-container');
    lunch.classList.add('container-bg');
    let lunchPlan = filteredRecipes.filter(recipe => recipe.type.includes('lunch'));
    let veggies = filteredRecipes.filter(recipe => recipe.type.includes('veggies'));
    let b = 0
    while (b <= 1) {
        if (lunchPlan.length >= 2) {
            const lunchRecipes = document.createElement('li');
            lunchRecipes.textContent = lunchPlan[b].name + ' and ' + veggies[b].name;
            document.getElementById('lunch').appendChild(lunchRecipes);
            b++
        } else if (lunchPlan.length === 1) {
            const lunchRecipes = document.createElement('li');
            lunchRecipes.textContent = lunchPlan[b].name + ' and ' + veggies[b].name;
            document.getElementById('lunch').appendChild(lunchRecipes);
            break
        } else {
            const lunchRecipes = document.createElement('li');
            lunchRecipes.textContent = 'Couldn\'t find recipes';
            document.getElementById('lunch').appendChild(lunchRecipes);
            break
        }
    }

    snackTitle.innerHTML = `<h3>Snacks</h3>`;
    const snackContainer = document.getElementById('snack');
    snackContainer.innerHTML = '';
    snack.classList.add('meal-container');
    snack.classList.add('container-bg');
    let snackPlan = filteredRecipes.filter(recipe => recipe.type.includes('snack'));
    let c = 0
    while (c <= 1) {
        if (snackPlan.length >= 2) {
            const snackRecipes = document.createElement('li');
            snackRecipes.textContent = snackPlan[c].name;
            document.getElementById('snack').appendChild(snackRecipes);
            c++
        } else if (snackPlan.length === 1) {
            const snackRecipes = document.createElement('li');
            snackRecipes.textContent = snackPlan[c].name;
            document.getElementById('snack').appendChild(snackRecipes);
            break
        } else {
            const snackRecipes = document.createElement('li');
            snackRecipes.textContent = 'Couldn\'t find recipes';
            document.getElementById('snack').appendChild(snackRecipes);
            break
        }
    }

    dinnerTitle.innerHTML = `<h3>Dinner</h3>`;
    const dinnerContainer = document.getElementById('dinner');
    dinnerContainer.innerHTML = '';
    dinner.classList.add('meal-container');
    dinner.classList.add('container-bg');
    let dinnerPlan = filteredRecipes.filter(recipe => recipe.type.includes('dinner'));
    randomize(dinnerPlan)
    let d = 0
    while (d <= 1) {
        if (dinnerPlan.length >= 2) {
            const dinnerRecipes = document.createElement('li');
            dinnerRecipes.textContent = dinnerPlan[d].name + ' and ' + veggies[d].name;
            document.getElementById('dinner').appendChild(dinnerRecipes);
            d++
        } else if (dinnerPlan.length === 1) {
            const dinnerRecipes = document.createElement('li');
            dinnerRecipes.textContent = dinnerPlan[d].name + ' and ' + veggies[d].name;
            document.getElementById('dinner').appendChild(dinnerRecipes);
            break
        } else {
            const dinnerRecipes = document.createElement('li');
            dinnerRecipes.textContent = 'Couldn\'t find recipes';
            document.getElementById('dinner').appendChild(dinnerRecipes);
            break
        }
    }
});
