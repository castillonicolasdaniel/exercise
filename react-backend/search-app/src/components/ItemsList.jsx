import React, {Fragment} from 'react';

import ItemCard from './ItemCard';

const ItemsList = ({items = [], isLoading}) => {
	console.log('isLoading', isLoading)
	console.log('items', items)
	if (isLoading) {
		return (
			<div>Buscando...</div>
		);
	}

	if (!items.length) {
		return (
			<div>Sin resultados</div>
		);
	}

  	return (
		<div>
			{
				items.map((item) => (
					<Fragment key={item.id}>
						<ItemCard {...item} />
					</Fragment>
				))
			}
		</div>
	);
}

export default ItemsList;
