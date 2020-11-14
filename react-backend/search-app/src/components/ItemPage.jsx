import React, { useState, useEffect } from 'react';

import { parseGetItemResult } from '../utils/transformations';
import ItemContent from './ItemContent';
import SearchBar from './SearchBar';

const ItemPage = ({match}) => {
	const {
		params: {
			id,
		},
	} = match;
	const [itemInfo, setItemInfo] = useState(undefined);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getItemInfo = async(itemId) => {
			setIsLoading(true);
			const response = await fetch(`/api/items/${itemId}`);

			if (response.ok) {
				const resultado = await response.json();
				
				console.log('resultado', resultado)
				setItemInfo(parseGetItemResult(resultado.item));
			} else {
				console.log('ERROR'); // TypeError: failed to fetch
			}

			setIsLoading(false);
		};
		getItemInfo(id);
	}, [id]);

	const _handleBuyClick = () => alert('Felicitaciones! Compraste el producto.');

  	return (
  		<div>
  			<SearchBar />
  			<ItemContent
  				isLoading={isLoading}
  				itemInfo={itemInfo}
  				onBuyClick={_handleBuyClick}
  			/>
		</div>
	);
}

export default ItemPage;

