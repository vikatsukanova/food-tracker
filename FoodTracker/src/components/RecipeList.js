import React, { Component } from 'react';
import axios from 'axios';

class RecipeList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			recipes: [],
		};
	}

	componentDidMount() {
		this.getRecipeData();
	}

	renderLoader() {
		return <div>... Loader</div>;
	}

	async getRecipeData() {

		try {

			const recipeData = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?', {
				params: { 
					i: `${this.props.ingredients[Math.floor(Math.random()* this.props.ingredients.length)]}`
				}
			});

			const { data } = recipeData;

			this.setState({
				recipes: data.meals
			});

		} catch(err) {
			console.error(err);
		}
	}

	renderRecipes() {

		const { recipes } = this.state;

		const recipeHtml = recipes.map((recipe, index) => {

			const { idMeal: id, strMeal: name, strMealThumb: img } = recipe;

			return (
				<div key={ id } className="recipe">
					<img src={ img } alt= { name }/>
					<span className="recipe-name">{ name }</span>
				</div>
			)
		});

		return recipeHtml;
	}

	render() {

		return (
			<div>
				{ this.state.recipes.length ? this.renderRecipes() : this.renderLoader() }
			</div>
		)

	}
}

export default RecipeList;