const userPreferences = document.getElementById('userPreferences');
const checkDietaryPreferences = userPreferences.querySelectorAll('input[type="checkbox"]');
//used chatGPT to understand the difference between elements that can / can't be iterable in a DOM manipulation - and how to create a variable to target all the checkboxes in my form to run in a loop

// arrays with possible options for diet and intolerance (according to parameters and values of the API)
const dietOptions = ['vegetarian', 'vegan']
const intoleranceOptions = ['dairy', 'gluten', 'peanut', 'shellfish']

// meal plan output
const mealPlan = document.getElementById('mealPlan');
const breakfastTitle = document.getElementById('breakfastTitle');
const breakfastContainer = document.getElementById('breakfast');
const breakfast = document.getElementById('breakfast');
const lunchTitle = document.getElementById('lunchTitle');
const lunchContainer = document.getElementById('lunch');
const lunch = document.getElementById('lunch');
const snackTitle = document.getElementById('snackTitle');
const snackContainer = document.getElementById('snack');
const snack = document.getElementById('snack');
const dinnerTitle = document.getElementById('dinnerTitle');
const dinnerContainer = document.getElementById('dinner');
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

    const selectedDietaryPreferences = []
    for (let item of checkDietaryPreferences) {
        if (item.checked) {
            selectedDietaryPreferences.push(item.id);
        }
    }

    // isolating intolerance and diet inputs to add to API request query, separated by comma as per API docs
    function getIntolerances(selectedDietaryPreferences, dietOptions) {
        const filterDiets = selectedDietaryPreferences.filter(function(item) {
            return !dietOptions.includes(item);
        });
        return filterDiets.join(',');
    }

    const intolerances = getIntolerances(selectedDietaryPreferences, dietOptions);

    function getDiets(selectedDietaryPreferences, intoleranceOptions) {
        const filterIntolerances = selectedDietaryPreferences.filter(function(item) {
            return !intoleranceOptions.includes(item);
        });
        return filterIntolerances.join(',');
    }

    const diets = getDiets(selectedDietaryPreferences, intoleranceOptions);

    // adding user input values to URL string (used chatGPT to understand how to add these values to endpoint string
    // added properties: number=50 (default was 10 - too low to get 2 ideas for each of the 4 types AND addRecipeInformation=true , so that I could filter the results by dishTypes (this property isn't included in the default results)
    // docs say that "addRecipeInstructions"=true gets analyzed instructions for each recipe returned, but not working.
    // to add recipe ingredients and instructions, need to search by recipe ID in a different endpoint: https://api.spoonacular.com/recipes/{id}/analyzedInstructions
    // workaround, use  sourceUrl or spoonacularSourceUrl to add a link to recipe

    const endpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=582a62bc2bef47c9a0e3aededb18d8bc&number=50&addRecipeInstructions&addRecipeInformation=true&diet=${diets}&intolerances=${intolerances}`; // question mark at end of endpoint url (https://api.spoonacular.com/recipes/complexSearch) indicates that parameters are starting

    async function findPreferences(){
        const fetchResponse = await fetch(endpoint); //sending request to API. Fetch returns a response object, not actual data yet
        const convertResponse = await fetchResponse.json(); //parsing this HTTP object into a usable JavaScript object
        return convertResponse.results; //accessing the "results" field of the JS object, which is an array of objects that can now have array methods applied to it
    }

    // used chatGPT to understand how to properly run my async function - using then or await to consider the promise return "async function always returns a promise, and you must handle it like one"
    // running the async function, where recipesArray is the value returned by findPreferences() and then manipulated inside the function
    findPreferences().then(function(recipesArray){
        console.log(recipesArray);
        randomize(recipesArray);

        mealPlan.innerHTML = `<h1 class="meal-plan">📝 My Meal Plan:</h1>`;

        breakfastTitle.innerHTML = `<h3>🧇 Breakfast</h3>`;
        breakfastContainer.innerHTML = '';
        breakfast.classList.add('meal-container');
        breakfast.classList.add('container-bg');

        const breakfastArray = recipesArray.filter(function(item) {
            return item.dishTypes.includes('breakfast');
        })

        let a = 0
        while (a <= 1) {
            if (breakfastArray.length >=1) {
                const breakfastWrapper = document.createElement('div');
                breakfastWrapper.classList.add('meal-item');
                const breakfastImg = document.createElement('img');
                breakfastImg.src = breakfastArray[a].image;
                const breakfastRecipes = document.createElement('li');
                breakfastRecipes.textContent = breakfastArray[a].title;
                breakfastRecipes.classList.add('meal-title');
                // const shuffle = document.createElement('input');
                // shuffle.id = 'shuffle'; how can I make each shuffle icon have its own ID, so that it randomizes only the respective recipe?
                // shuffle.value = '🔀';
                // shuffle.type = 'submit';
                // shuffle.classList.add('icon');
                breakfastWrapper.appendChild(breakfastImg);
                breakfastWrapper.appendChild(breakfastRecipes);
                // breakfastWrapper.appendChild(shuffle);
                document.getElementById('breakfast').appendChild(breakfastWrapper);
                a++
            } else {
                const breakfastRecipes = document.createElement('li');
                breakfastRecipes.textContent = 'Couldn\'t find recipes';
                document.getElementById('breakfast').appendChild(breakfastRecipes);
                break
            }
        }

        const lunchArray = recipesArray.filter(function(item) {
            return item.dishTypes.includes('lunch');
        })

        lunchTitle.innerHTML = `<h3>🥘 Lunch</h3>`;
        lunchContainer.innerHTML = '';
        lunch.classList.add('meal-container');
        lunch.classList.add('container-bg');
        let b = 0
        while (b <= 1) {
            if (lunchArray.length >= 1) {
                const lunchWrapper = document.createElement('div');
                lunchWrapper.classList.add('meal-item');
                const lunchImg = document.createElement('img');
                lunchImg.src = lunchArray[b].image;
                const lunchRecipes = document.createElement('li');
                lunchRecipes.textContent = lunchArray[b].title;
                lunchRecipes.classList.add('meal-title');
                lunchWrapper.appendChild(lunchImg);
                lunchWrapper.appendChild(lunchRecipes);
                document.getElementById('lunch').appendChild(lunchWrapper);
                b++
            } else {
                const lunchRecipes = document.createElement('li');
                lunchRecipes.textContent = 'Couldn\'t find recipes';
                document.getElementById('lunch').appendChild(lunchRecipes);
                break
            }
        }

        const snackArray = recipesArray.filter(function(item) {
            return item.dishTypes.includes('snack');
        })

        snackTitle.innerHTML = `<h3>🍎 Snacks</h3>`;
        snackContainer.innerHTML = '';
        snack.classList.add('meal-container');
        snack.classList.add('container-bg');
        let c = 0
        while (c <= 1) {
            if (snackArray.length >= 1) {
                const snackWrapper = document.createElement('div');
                snackWrapper.classList.add('meal-item');
                const snackImg = document.createElement('img');
                snackImg.src = snackArray[c].image;
                const snackRecipes = document.createElement('li');
                snackRecipes.textContent = snackArray[c].title;
                snackRecipes.classList.add('meal-title');
                snackWrapper.appendChild(snackImg);
                snackWrapper.appendChild(snackRecipes);
                document.getElementById('snack').appendChild(snackWrapper);
                c++
            } else {
                const snackRecipes = document.createElement('li');
                snackRecipes.textContent = 'Couldn\'t find recipes';
                document.getElementById('snack').appendChild(snackRecipes);
                break
            }
        }

        const dinnerArray = recipesArray.filter(function(item) {
            return item.dishTypes.includes('dinner');
        })

        randomize(dinnerArray);

        dinnerTitle.innerHTML = `<h3>🌯 Dinner</h3>`;
        dinnerContainer.innerHTML = '';
        dinner.classList.add('meal-container');
        dinner.classList.add('container-bg');

        let d = 0
        while (d <= 1) {
            if (dinnerArray.length >= 2) {
                const dinnerWrapper = document.createElement('div');
                dinnerWrapper.classList.add('meal-item');
                const dinnerImg = document.createElement('img');
                dinnerImg.src = dinnerArray[d].image;
                const dinnerRecipes = document.createElement('li');
                dinnerRecipes.textContent = dinnerArray[d].title;
                dinnerRecipes.classList.add('meal-title');
                dinnerWrapper.appendChild(dinnerImg);
                dinnerWrapper.appendChild(dinnerRecipes);
                document.getElementById('dinner').appendChild(dinnerWrapper);
                d++
            } else {
                const dinnerRecipes = document.createElement('li');
                dinnerRecipes.textContent = 'Couldn\'t find recipes';
                document.getElementById('dinner').appendChild(dinnerRecipes);
                break
            }
        }
    })
});
