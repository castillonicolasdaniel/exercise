import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router";
import queryString from 'query-string';

import { parseItemsResults } from '../utils/transformations';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

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
					
					setSearchResults(parseItemsResults(items));
				} else {
					console.log('ERROR'); // TypeError: failed to fetch
				}
				setIsLoading(false);
			}
		};
		
		searchItems(searchTerms);
	}, [searchTerms]);

	return (
		<div>
			<SearchBar searchTerms={searchTerms}/>
			<SearchResults
				items={searchResults}
				isLoading={isLoading}
				hasSearch={!!searchTerms}
			/>
		</div>
	);
}

export default SearchPage;
