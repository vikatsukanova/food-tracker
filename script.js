$(function() {

	const recipesApp = {};

	recipesApp.foodListHtml = $('.ingredients-list');
	recipesApp.recipesHtml = $('#recipes');
	recipesApp.recipesWrapper = $('#recipes-wrapper');

	// 1. Create a list of recipes
	recipesApp.recipes = [
		{
			name: 'Carbonara',
			ingredients: ['bacon', 'spaghetti', 'egg', 'cheese'],
			level: 'medium',
			img: 'https://media.eggs.ca/assets/RecipePhotos/_resampled/FillWyIxMjgwIiwiNzIwIl0/Linguine-Carbonara-CMS.jpg',
		},
		{
			name: 'Butter Chicken',
			ingredients: ['chicken', 'rice'],
			level: 'medium',
			img: 'https://www.cbc.ca/food/content/images/recipes/VegButterChicken.jpg',	
		},
		{
			name: 'Lemon Chicken with Potatoes',
			ingredients: ['chicken', 'potatoes', 'lemon juice'],
			level: 'medium',
			img: 'https://img.delicious.com.au/n9AP88pr/w759-h506-cfill/del/2018/05/roast-lemon-chicken-and-potatoes-80483-2.jpg',		
		}
	];

	// 2. Create a list of food
	recipesApp.foodList = ['egg', 'spinach'];

	// 3. Show a list of ingredients to a user
	recipesApp.showFoodList = function() {
		recipesApp.foodList.forEach(function(foodItem, index){
			const listItem = `
				<li class="list-item">${foodItem}</li>`;

			recipesApp.foodListHtml.append(listItem);
		});
	}

	// 4. Write a function to filter out and return the recipes that have at least one ingridient that matches ingredients from the list
	recipesApp.getrecipes = function() {
		let matchedRecipes = [];

		recipesApp.foodList.forEach(function(foodItem, foodIndex){

			recipesApp.recipes.forEach(function(recipe, recipeIndex){

				const { name, ingredients, level, img } = recipe;

				ingredients.forEach(function(ingredient, index){

					if (ingredient === foodItem) {

						const duplicates = matchedRecipes.filter(item => item.name === name);
						if (duplicates.length === 0) {
							matchedRecipes.push({name, img});
						}
					}
				});
			});

		});

		return matchedRecipes;
	}

	// 5. Prompt a user to add items to the ingredients list
	recipesApp.addNewFoodItem = function() {
		matchedRecipes = [];
		const newFood = $('#item').val();

		if (newFood) {
			$('#item').val('');

			const formattedNewFood = `<li class="list-item">${newFood}</li>`

			recipesApp.foodList.push(newFood);
			recipesApp.foodListHtml.append(formattedNewFood);
		}
	}

	// 6. Write a function to filter out and return the recipes that have at least two food items that match ingredients from the list
	recipesApp.showRecipes = function() {

		const matchedRecipes = recipesApp.getrecipes();

		recipesApp.recipesWrapper.empty();
		matchedRecipes.forEach(function(matchedRecipe, index){

			const { name, img } = matchedRecipe;

			const recipeItem = `
				<div class="recipe">
					<img style="width:100%" src="${img}"/>
					<span class="recipe-name">${name}</span>
				</div>
			`;

			recipesApp.recipesWrapper.append(recipeItem);
		});
	}

	recipesApp.showFoodList();

	recipesApp.init = function() {
		$(recipesApp.recipesHtml).on('click', function() {
			recipesApp.showRecipes();
		});

		$('form').on('submit', function(e) {
			e.preventDefault();

			recipesApp.addNewFoodItem();
		});
	}

	recipesApp.init();
});
