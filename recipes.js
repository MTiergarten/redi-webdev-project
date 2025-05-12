class recipe {

    static allRecipes = [];
    //used ChatGPT to understand how I could create a command or function inside my class "recipe" to updates my array of recipes when I create a new instance, instead of having to do this manually, so it suggested using the static property

    constructor(type, name, ingredients, portions) {
        this.type = type;
        this.name = name;
        this.ingredients = ingredients;
        this.portions = portions;
        recipe.allRecipes.push(this);
    }

    printRecipe(type, name, ingredients, portions) {
        console.log(this.type.toString());
        console.log(this.name);
        console.log("Ingredients: " + this.ingredients.toString());
        console.log("Portions: " + this.portions);
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

const couscous = new recipe(
    'Corn Couscous With Cheese',
    ['Breakfast'],
    ['40g corn couscous', '1 tsp butter', '60ml water', 'Salt to taste', '20g cheese of choice'],
    1);

const oatmeal = new recipe(
    'High Protein Oatmeal',
    ['Breakfast'],
    ['1 banana', '120ml milk of choice', '1 tbsp peanut butter', '20g whey protein', '25g oats'],
    1);

const bolognese = new recipe(
    'Simplified Bolognese Pasta',
    ['Lunch', 'Dinner'],
    ['250g whole wheat fusilli pasta', '400g minced meat', '200g tomato sauce', '1 tbsp tomato sauce', '1/2 finely diced onion', '1 grated clove of garlic', 'Season to taste: salt, black pepper, cayenne pepper, smoked paprika'],
    3);

const chicken = new recipe(
    'Grilled Chicken with Herb Potatoes',
    ['Lunch', 'Dinner'],
    ['400g chicken breast (butterflied)', '1 lime', '1 grated clove or garlic', '2 tbsp olive oil', 'Season to taste: salt and black pepper', '700g potatoes, cut into 1 inch cubes: season to taste with wild garlic, pesto or parsley after boiling'],
    3);

const pork = new recipe(
    'Roasted Pork Tenderloin with Mashed Potatoes',
    ['Lunch', 'Dinner'],
    ['700g potatoes (peeled and quartered)', '30g butter', '100ml milk of choice', 'Season to taste: salt, nutmeg, garlic powder and black pepper', '400g pork tenderloin', '2 tbsp olive oil', '2 cloves garlic', '1 tsp paprika', 'Season to taste: salt and black pepper'],
    3);

const salad1 = new recipe(
    'Green Salad',
    ['Lunch', 'Dinner'],
    ['Mixed fresh green leaves', 'Olive oil and balsamic dressing'],
    1);

const salad2 = new recipe(
    'Mixed Salad',
    ['Lunch', 'Dinner'],
    ['Diced tomatoes', 'Sliced cucumber', 'Sliced red onion', 'Sliced bell peppers', 'Lettuce or rucola', 'Olive oil and apple cider vinegar dressing'],
    1);

const veggies = new recipe(
    'Steamed Veggie Mix',
    ['Lunch', 'Dinner'],
    ['Mixed veggies fresh or frozen', 'Butter and mustard dressing'],
    1);

const tuna = new recipe(
    'Tuna Sandwich',
    ['Snack'],
    ['1 can of tuna (in brine)', '2 tbsp light teriyaki sauce', '2 tbsp light mayo', '4 slices of toast', 'Optional: cheese, lettuce, sliced red onion'],
    2);

const yoghurt = new recipe(
    'Yoghurt Bowl with Fruits',
    ['Snack'],
    ['150g greek yoghurt', '15g whey protein', '150g fruit of choice', 'Optional: 1 tbsp honey'],
    1);

const grilledCheese = new recipe(
    'Grilled Cheese',
    ['Snack'],
    ['2 slices of toast', '25g soft cheese of choice', '1 tsp butter'],
    1);

//userPreferences = recipe.allRecipes.filter(recipe => !recipe.ingredients.includes('toast'))
//console.log(userPreferences)
//"includes" checks the entire array element - so it will only remove the recipes containing toast if the array element is "toast" and not "2 slices of toast" as in the grilled cheese - solutions": create a new parameter "preferences/allergens" or separate parameter ingredients ("ingredient"/ "amount") - this would probably depend on how the data is organized on the API I'll be using

// static removeRecipe(name) {
//     Recipe.allRecipes = Recipe.allRecipes.filter(recipe => recipe.name !== name);
//     console.log(`Removed ${name} from the recipe list`);
// }