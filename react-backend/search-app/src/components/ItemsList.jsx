import React, {Fragment} from 'react';

import ItemCard from './ItemCard';

const ItemsList = ({items = []}) => {
	console.log('ITEMS ENCONTRADOS', items)
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
