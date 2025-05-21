const userPreferences = document.getElementById('userPreferences');
userPreferences.addEventListener('submit', function(event) {
    event.preventDefault();

    const checkDietaryPreferences = userPreferences.querySelectorAll('input[type="checkbox"]');
    //used chatGPT to understand the difference between elements that can / can't be iterable in a DOM manipulation - and how to create a variable to target all the checkboxes in my form to run in a loop

    const selectedDietaryPreferences = []
    for (let item of checkDietaryPreferences) {
        if (item.checked) {
            selectedDietaryPreferences.push(item.id);
        }
    }

    // arrays with possible options for diet and intolerance (according to parameters and values of the API)
    const dietOptions = ['vegetarian', 'vegan']
    const intoleranceOptions = ['dairy', 'gluten', 'peanut', 'shellfish']

    // isolating intolerance and diet inputs to add to API request query, separated by comma as per API docs
    function getIntolerances(selectedDietaryPreferences, dietOptions) {
        const filterDiets = selectedDietaryPreferences.filter(function(item) {
            return !dietOptions.includes(item);
        });
        const intolerances = filterDiets.join(',');
        return intolerances;

    }
    const intolerances = getIntolerances(selectedDietaryPreferences, dietOptions);

    function getDiets(selectedDietaryPreferences, intoleranceOptions) {
        const filterIntolerances = selectedDietaryPreferences.filter(function(item) {
            return !intoleranceOptions.includes(item);
        });
        const diets = filterIntolerances.join(',');
        return diets;
    }
    const diets = getDiets(selectedDietaryPreferences, intoleranceOptions);

    // adding user input values to URL string (used chatGPT to understand how to add these values to endpoint string
    const endpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=582a62bc2bef47c9a0e3aededb18d8bc&&diet=${diets}&intolerances=${intolerances}`; // question mark at end of endpoint url (https://api.spoonacular.com/recipes/complexSearch) indicates that parameters are starting

    const mealPlan = document.getElementById('mealPlan');
    mealPlan.innerHTML = `<h1>My Meal Plan:</h1>`;

    async function findPreferences() {
        const fetchResponse = await fetch(endpoint); //sending request to API. Fetch returns a response object, not actual data yet
        const convertResponse = await fetchResponse.json(); //parsing this HTTP object into a usable JavaScript object
        const recipesArray = convertResponse.results; //accessing the "results" field of the JS object, which is an array of objects that can now have array methods applied to it
        console.log((recipesArray.length) + ' recipes found:');
        console.log(recipesArray);

        function randomize(arr) {
            for (let i = arr.length -1; i > 0; i--) {
                let randomIndex = Math.floor(Math.random() * (i+1));
                let currentElement = arr[i];
                arr[i] = arr[randomIndex];
                arr[randomIndex] = currentElement;
            }
        }

        randomize(recipesArray);

        const breakfastTitle = document.getElementById('breakfastTitle');
        breakfastTitle.innerHTML = `<h3>Breakfast</h3>`;
        const breakfastContainer = document.getElementById('breakfast');
        breakfastContainer.innerHTML = '';
        const breakfast = document.getElementById('breakfast');
        breakfast.classList.add('meal-container');
        breakfast.classList.add('container-bg');
        let a = 0
        while (a <= 1) {
            if (recipesArray.length >=2) {
                const breakfastRecipes = document.createElement('li');
                breakfastRecipes.textContent = recipesArray[a].title;
                document.getElementById('breakfast').appendChild(breakfastRecipes);
                a++
            } else if (recipesArray.length === 1) {
                const breakfastRecipes = document.createElement('li');
                breakfastRecipes.textContent = recipesArray[a].title;
                document.getElementById('breakfast').appendChild(breakfastRecipes);
                break
            } else {
                const breakfastRecipes = document.createElement('li');
                breakfastRecipes.textContent = 'Couldn\'t find recipes';
                document.getElementById('breakfast').appendChild(breakfastRecipes);
                break
            }
        }

        const lunchTitle = document.getElementById('lunchTitle');
        lunchTitle.innerHTML = `<h3>Lunch</h3>`;
        const lunchContainer = document.getElementById('lunch');
        lunchContainer.innerHTML = '';
        const lunch = document.getElementById('lunch');
        lunch.classList.add('meal-container');
        lunch.classList.add('container-bg');
        let b = 0
        while (b <= 1) {
            if (recipesArray.length >= 2) {
                const lunchRecipes = document.createElement('li');
                lunchRecipes.textContent = recipesArray[b].title;
                document.getElementById('lunch').appendChild(lunchRecipes);
                b++
            } else if (recipesArray.length === 1) {
                const lunchRecipes = document.createElement('li');
                lunchRecipes.textContent = recipesArray[b].title;
                document.getElementById('lunch').appendChild(lunchRecipes);
                break
            } else {
                const lunchRecipes = document.createElement('li');
                lunchRecipes.textContent = 'Couldn\'t find recipes';
                document.getElementById('lunch').appendChild(lunchRecipes);
                break
            }
        }

        const snackTitle = document.getElementById('snackTitle');
        snackTitle.innerHTML = `<h3>Snacks</h3>`;
        const snackContainer = document.getElementById('snack');
        snackContainer.innerHTML = '';
        const snack = document.getElementById('snack');
        snack.classList.add('meal-container');
        snack.classList.add('container-bg');
        let c = 0
        while (c <= 1) {
            if (recipesArray.length >= 2) {
                const snackRecipes = document.createElement('li');
                snackRecipes.textContent = recipesArray[c].title;
                document.getElementById('snack').appendChild(snackRecipes);
                c++
            } else if (recipesArray.length === 1) {
                const snackRecipes = document.createElement('li');
                snackRecipes.textContent = recipesArray[c].title;
                document.getElementById('snack').appendChild(snackRecipes);
                break
            } else {
                const snackRecipes = document.createElement('li');
                snackRecipes.textContent = 'Couldn\'t find recipes';
                document.getElementById('snack').appendChild(snackRecipes);
                break
            }
        }

        const dinnerTitle = document.getElementById('dinnerTitle');
        dinnerTitle.innerHTML = `<h3>Dinner</h3>`;
        const dinnerContainer = document.getElementById('dinner');
        dinnerContainer.innerHTML = '';
        const dinner = document.getElementById('dinner');
        dinner.classList.add('meal-container');
        dinner.classList.add('container-bg');
        randomize(recipesArray)
        let d = 0
        while (d <= 1) {
            if (recipesArray.length >= 2) {
                const dinnerRecipes = document.createElement('li');
                dinnerRecipes.textContent = recipesArray[d].title;
                document.getElementById('dinner').appendChild(dinnerRecipes);
                d++
            } else if (recipesArray.length === 1) {
                const dinnerRecipes = document.createElement('li');
                dinnerRecipes.textContent = recipesArray[d].title;
                document.getElementById('dinner').appendChild(dinnerRecipes);
                break
            } else {
                const dinnerRecipes = document.createElement('li');
                dinnerRecipes.textContent = 'Couldn\'t find recipes';
                document.getElementById('dinner').appendChild(dinnerRecipes);
                break
            }
        }
    }
    findPreferences();
});
