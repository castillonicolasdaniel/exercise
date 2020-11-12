import React, { useState } from 'react';
import queryString from 'query-string';
import { useHistory } from "react-router-dom";

const SearchBar = ({searchTerms}) => {
	const history = useHistory();
	const [searchValue, setSearchValue] = useState(searchTerms);

	const _handleSearch = () => {
		if (searchValue) {
			const searchQuery = queryString.stringify({
				search: searchValue,
			});

			history.push(`/items?${searchQuery}`);
		}
	}

	const _handleKeyUp = (e) => {
		const {
			key,
			target: {
				value,
			},
		} = e;
		
		if (key === 'Enter') {
			_handleSearch();
		} else {
			setSearchValue(value);
		}
	};

	return (
		<div>
			<input
				type="text"
				name="searchTerms"
				placeholder="Buscar productos, marcas y más..."
				defaultValue={searchTerms}
				onKeyUp={_handleKeyUp}
			/>
			<button onClick={_handleSearch}>
				Search
			</button>
		</div>
  	);
}

export default SearchBar;
