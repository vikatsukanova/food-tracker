import React, { Component } from 'react';
import './App.css';

import FoodList from './components/FoodList';
import RecipeList from './components/RecipeList';

class App extends Component {

  constructor(props) {
    super(props) 
      
    this.state = {
      inputValue: '',
      ingredients: ['banana', 'chicken'],
      renderRecipes: false
    }
  }

  handleInput = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      ingredients: this.state.ingredients.concat(this.state.inputValue),
      inputValue: ''
    });
  }

  showRecipes = () => {
    this.setState({
      renderRecipes: true
    })
  }

  render() {

    return (
      <div className="container">
        <h1>Food Tracker and Recipes</h1>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="item">Add an item:</label>
          <input
            type="text"
            id="item"
            placeholder="Add an ingredient"
            value={ this.state.inputValue }
            onChange={ this.handleInput }
            />
          <input id="ingredient" type="submit" value="Add Item"/>
        </form>
        <FoodList ingredients={ this.state.ingredients }/>
        <button onClick={ this.showRecipes } id="recipes">Show Recipes</button>
          { this.state.renderRecipes &&
            <div className="recipes-wrapper">
              <RecipeList ingredients={ this.state.ingredients }/>
            </div>
          }
    </div>
    );
  }
}

export default App;
