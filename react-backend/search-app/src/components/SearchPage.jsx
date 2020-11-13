import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router";
import queryString from 'query-string';

import ItemsList from './ItemsList';
import SearchBar from './SearchBar';

const SearchPage = (props) => {
	const [searchResults, setSearchResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const location = useLocation();
	const {
		search: searchTerms,
	} = queryString.parse(location.search);

	useEffect(() => {
		const searchItems = async(searchValue) => {
			if (searchValue) {
				setIsLoading(true);
				const qQuery = queryString.stringify({
					q: searchValue,
				});
				const response = await fetch(`/api/items?${qQuery}`);

				if (response.ok) {
					const {items} = await response.json();
					
					setSearchResults(items);
				} else {
					console.log('ERROR'); // TypeError: failed to fetch
				}
				setIsLoading(false);
			}
		};
		
		searchItems(searchTerms);
	}, [searchTerms]);

	console.log('isLoading', isLoading)
	return (
		<div>
			<SearchBar searchTerms={searchTerms}/>
			{
				searchTerms ? (
					<ItemsList items={searchResults} isLoading={isLoading} />
				) : (
					<div>Busca entre miles de productos</div>
				)
			}
		</div>
	);
}

export default SearchPage;
