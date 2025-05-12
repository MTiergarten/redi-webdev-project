class recipe {

    static allRecipes = [];
    //used ChatGPT to understand how I could create a command or function inside my class "recipe" to updates my array of recipes when I create a new instance, instead of having to do this manually, so it suggested using the static property

    constructor(name, type, ingredients, portions, category) {
        this.name = name;
        this.type = type;
        this.ingredients = ingredients;
        this.portions = portions;
        this.category = category;
        recipe.allRecipes.push(this);
    }

    printRecipe(name, type, ingredients, portions) {
        console.log(this.name);
        console.log(this.type.toString());
        console.log("Ingredients: " + this.ingredients.toString());
        console.log("Portions: " + this.portions);
        console.log("Category: " + this.category.toString());
    }

    static listRecipes() {
        return recipe.allRecipes;
    }

    //to do: function to filter preferences
}

const eggs = new recipe(
    'Eggs On Toast With Cheese',
    ['Breakfast'],
    ['50g bread (1 bun or 2 slices of toast)', '2 eggs (scrambled or omelet)', '20g cheese of choice'],
    1);
eggs.category = ['nuts', 'seafood', 'vegetarian']

const couscous = new recipe(
    'Corn Couscous With Cheese',
    ['Breakfast'],
    ['40g corn couscous', '1 tsp butter', '60ml water', 'Salt to taste', '20g cheese of choice'],
    1);
couscous.category = ['gluten', 'nuts', 'seafood', 'vegetarian'];

const oatmeal = new recipe(
    'High Protein Oatmeal',
    ['Breakfast'],
    ['1 banana', '120ml milk of choice', '1 tbsp peanut butter', '20g protein powder of choice', '25g oats'],
    1);
oatmeal.category = ['dairy', 'gluten', 'seafood', 'vegetarian', 'vegan'];

const bolognese = new recipe(
    'Simplified Bolognese Pasta',
    ['Lunch', 'Dinner'],
    ['250g whole wheat fusilli pasta', '400g minced meat', '200g tomato sauce', '1 tbsp tomato sauce', '1/2 finely diced onion', '1 grated clove of garlic', 'Season to taste: salt, black pepper, cayenne pepper, smoked paprika'],
    3);
bolognese.category = ['dairy', 'gluten', 'seafood', 'nuts'];

const chicken = new recipe(
    'Grilled Chicken with Herb Potatoes',
    ['Lunch', 'Dinner'],
    ['400g chicken breast (butterflied)', '1 lime', '1 grated clove or garlic', '2 tbsp olive oil', 'Season to taste: salt and black pepper', '700g potatoes, cut into 1 inch cubes: season to taste with wild garlic, pesto or parsley after boiling'],
    3);
chicken.category = ['dairy', 'gluten', 'seafood', 'nuts'];

const pork = new recipe(
    'Roasted Pork Tenderloin with Mashed Potatoes',
    ['Lunch', 'Dinner'],
    ['700g potatoes (peeled and quartered)', '30g butter', '100ml milk of choice', 'Season to taste: salt, nutmeg, garlic powder and black pepper', '400g pork tenderloin', '2 tbsp olive oil', '2 cloves garlic', '1 tsp paprika', 'Season to taste: salt and black pepper'],
    3);
pork.category = ['gluten', 'seafood', 'nuts'];

const salad1 = new recipe(
    'Green Salad',
    ['Lunch', 'Dinner'],
    ['Mixed fresh green leaves', 'Olive oil and balsamic dressing'],
    1);
salad1.category = ['dairy', 'gluten', 'nuts', 'seafood', 'vegetarian', 'vegan'];

const salad2 = new recipe(
    'Mixed Salad',
    ['Lunch', 'Dinner'],
    ['Diced tomatoes', 'Sliced cucumber', 'Sliced red onion', 'Sliced bell peppers', 'Lettuce or arugula', 'Olive oil and apple cider vinegar dressing'],
    1);
salad2.category = ['dairy', 'gluten', 'nuts', 'seafood', 'vegetarian', 'vegan'];

const veggies = new recipe(
    'Steamed Veggie Mix',
    ['Lunch', 'Dinner'],
    ['Mixed veggies fresh or frozen', 'Season to taste: salt, black pepper, paprika'],
    1);
veggies.category = ['dairy', 'gluten', 'nuts', 'seafood', 'vegetarian', 'vegan'];

const tuna = new recipe(
    'Tuna Sandwich',
    ['Snack'],
    ['1 can of tuna (in brine)', '2 tbsp light teriyaki sauce', '2 tbsp light mayo', '4 slices of toast', 'Optional: lettuce, sliced red onion'],
    2);
tuna.category = ['dairy', 'nuts'];

const yoghurt = new recipe(
    'Yoghurt Bowl with Fruits',
    ['Snack'],
    ['150g greek yoghurt', '15g protein of choice', '150g fruit of choice', 'Optional: 1 tbsp honey'],
    1);
yoghurt.category = ['gluten', 'nuts', 'seafood', 'vegetarian'];

const grilledCheese = new recipe(
    'Grilled Cheese',
    ['Snack'],
    ['2 slices of toast', '25g soft cheese of choice', '1 tsp butter'],
    1);
grilledCheese.category = ['nuts', 'seafood', 'vegetarian'];


const userPreferences = document.getElementById('userPreferences');
const checkRestrictions = userPreferences.querySelectorAll('input[type="checkbox"]');
//used chatGPT to understand the difference between elements that can / can't be iterable in a DOM manipulation - and how to create a variable to target all the checkboxes in my form to run in a loop

userPreferences.addEventListener('submit', function(event) {
    event.preventDefault();

    const restrictions = []
    for (let item of checkRestrictions) {
        if (item.checked) {
            restrictions.push(item.id);
        }
    }

    let filteredRecipes = recipe.allRecipes.filter(recipe => restrictions.every(restriction => recipe.category.includes(restriction))
    ); //used chatGPT to understand how I could use each item in the array as a condition for my filter - it suggested using the 'every' method

    console.log(restrictions);
    console.log(filteredRecipes.length);
    console.log(filteredRecipes);

});
