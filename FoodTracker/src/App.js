import React, { Component } from 'react';
import './App.css';

import FoodList from './components/FoodList';
import RecipeList from './components/RecipeList';

class App extends Component {
  render() {

    return (
      <div className="container">
        <h1>Food Tracker and Recipes</h1>
        <form>
          <label htmlFor="item">Add an item:</label>
          <input className="" type="text" id="item" placeholder="Add an ingredient"/>
          <input id="ingredient" type="submit" value="Add Item"/>
        </form>
        <FoodList />
        <button id="recipes">Show Recipes</button>
        <div className="recipes-wrapper">
          <RecipeList />
        </div>
    </div>
    );
  }
}

export default App;
