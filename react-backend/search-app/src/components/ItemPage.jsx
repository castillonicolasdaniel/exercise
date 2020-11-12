import React from 'react';

const ItemPage = ({match}) => {
	const {
		params: {
			id,
		},
	} = match;

  	return (
		<h1>
			{
				`Hello, I'm the item detail page for item ID ${id}!`
			}
		</h1>
	);
}

export default ItemPage;
