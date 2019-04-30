import React from 'react';

function FoodList(props) {
	return (
		<ul className="ingredients-list">
			{
				props.ingredients.map((ingredient, index) => {
					return (
						<li key={ index }>{ ingredient }</li>
					);
				})
			}
		</ul>
	)
}

export default FoodList;