import React, { useState } from 'react';
import queryString from 'query-string';
import { useHistory } from "react-router-dom";

import logo from '../assets/logo_ml.png';
import MagnifyingGlass from '../icons/MagnifyingGlass';

import './SearchBar.scss';

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

	const _handleLogoClick = () => {
		history.push('/');
	};

	return (
		<div className="search-bar">
			<div className="search-elements">
				<img
					className="search-logo"
					onClick={_handleLogoClick}
					src={logo}
					alt="Logo"
				/>
				<input
					className="search-input"
					type="text"
					name="searchTerms"
					placeholder="Nunca dejes de buscar"
					defaultValue={searchTerms}
					onKeyUp={_handleKeyUp}
				/>
				<button
					className="search-button"
					onClick={_handleSearch}
				>
					<MagnifyingGlass />
				</button>
			</div>
		</div>
  	);
}

export default SearchBar;
