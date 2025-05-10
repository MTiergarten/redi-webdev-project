# Idea: Meal Rotation Planning App

## Jobs to be Done

### 1. Pre-prepped Meals
- **WHEN** it’s time to eat, or I’m feeling hungry,
- **I WANT TO** have a meal already prepared and waiting,
- **SO I CAN** eat right away without having to make decisions or use mental energy when I’m tired or low on focus.

### 2. Quick Familiar Meal Decisions
- **WHEN** it’s time to eat, or I’m feeling hungry,
- **I WANT TO** haves access to easy meals that are familiar to me,
- **SO I CAN** cook something quickly and effortlessly without having to think or search for options.

## Core Problem
- Decision fatigue and low energy around mealtimes.
- I want to avoid the mental load of choosing or planning when it’s time to eat.

## Functional Job
- Make meals easier by having them pre-decided or pre-prepped.
- Reduce the time and energy required during mealtimes.

## Emotional Job
- Avoid stress and frustration when hungry.
- Feel in control and cared for by your past self.

# Development Plan **(due 26/05)**
## **Phase 1 (due 13/05)** (working output with limited flexibility)
- User selects intolerances, allergies or preferences (e.g. don't recommend peanuts / gluten)
  - [ ] To do: form to select intolerances
- App fetches and displays recipes from local database based on user preferences
  - [x] ~~To do: Create hardcoded recipe database for testing (while no API)~~
  - [ ] To do: filter arrays by ingredients, return recipes matching the preferences
- User selects their preferred recipes or randomizes from a list
  - [ ] To do: DOM manipulation: allow user to select recipes or randomize
- App generates a 1-week meal plan (e.g. 3 meals for lunch, 3 for dinner + quick breakfast and snacks, reused across the week)
  - [ ] To do: return plan with selected meals or randomized recipes to yield enough meals for a week

## Phase 2 (more personalization)
- User selects main ingredient for breakfast (e.g. eggs, yoghurt, fruit, cheese)
- User selects preferred types of snack (e.g. savory, sweet, hot, cold)
- User selects types of carb and protein for lunch and dinner (e.g. potatoes, rice, chicken, tofu)
- User defines a meal plan structure (e.g. meals/day, number of days, recipe yield)

## Phase 3 (includes API + more polished output)
- App integrates with external recipe API
- App generates a grocery shopping list


## Wishlist - things I might get into after delivering the initial project
- Show calories and macros for each portion
- Allow user to add their own recipes
- Allow user to customize portion size (maybe according to calories / macro goals)
- Import recipes from links (eg recipe blogs)
- Rating: suggest more/less/nothing of a recipe
  - Allow users to save recipes in a collection (consider Window:local storage https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage ?)
- Automate rotation plan based on liked and saved recipes, instead of inputting preferences every time. User can then customize plan