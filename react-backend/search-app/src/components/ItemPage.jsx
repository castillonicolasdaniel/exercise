import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';

const ItemPage = ({match}) => {
	// const [searchResults, setSearchResults] = useState([]);
	// const [isLoading, setIsLoading] = useState(false);

	// const location = useLocation();
	// const {
	// 	search: searchTerms,
	// } = queryString.parse(location.search);

	// useEffect(() => {
	// 	const searchItems = async(searchValue) => {
	// 		if (searchValue) {
	// 			setIsLoading(true);
	// 			const qQuery = queryString.stringify({
	// 				q: searchValue,
	// 			});
	// 			const response = await fetch(`/api/items?${qQuery}`);

	// 			if (response.ok) {
	// 				const {items} = await response.json();
					
	// 				setSearchResults(parseItemsResults(items));
	// 			} else {
	// 				console.log('ERROR'); // TypeError: failed to fetch
	// 			}
	// 			setIsLoading(false);
	// 		}
	// 	};
		
	// 	searchItems(searchTerms);
	// }, [searchTerms]);

	// return (
	// 	<div>
	// 		<SearchBar searchTerms={searchTerms}/>
	// 		<SearchResults
	// 			items={searchResults}
	// 			isLoading={isLoading}
	// 			hasSearch={!!searchTerms}
	// 		/>
	// 	</div>
	// );

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
				setItemInfo(resultado);
			} else {
				console.log('ERROR'); // TypeError: failed to fetch
			}
			setIsLoading(false);
		};
		
		getItemInfo(id);
	}, [id]);

  	return (
  		<div>
  			<SearchBar />
			<h1>
				{
					`Hello, I'm the item detail page for item ID ${id}!`
				}
			</h1>
		</div>
	);
}

export default ItemPage;

