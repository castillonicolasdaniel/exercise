import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router";
import queryString from 'query-string';

import ItemsList from './ItemsList';
import SearchBar from './SearchBar';

const SearchPage = (props) => {
	const [searchResults, setSearchResults] = useState([]);

	const location = useLocation();
	const {
		search: searchTerms,
	} = queryString.parse(location.search);

	useEffect(() => {
		if (searchTerms) {
			const qQuery = queryString.stringify({
				q: searchTerms,
			});

			fetch(`/api/items?${qQuery}`)
				.then(res => res.json())
				.then(users => setSearchResults(users));
		}
	}, [location]);

	return (
		<div>
			<SearchBar searchTerms={searchTerms}/>
			{
				searchTerms ? (
					<ItemsList items={searchResults} />
				) : (
					<div>Busca entre miles de productos</div>
				)
			}
		</div>
	);
}

export default SearchPage;
