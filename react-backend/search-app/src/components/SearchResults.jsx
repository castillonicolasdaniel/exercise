import React, {Fragment} from 'react';

import ItemCard from './ItemCard';

import './SearchResults.scss';

const NoResultsBox = ({message}) => (
	<div
		className="no-results-box"
	>
		<h3 className="no-results-message">
			{message}
		</h3>
	</div>
);

const ItemsList = ({items}) => items.map((item) => (
	<Fragment key={item.id}>
		<ItemCard item={item} />
	</Fragment>
));

const SearchResults= ({items = [], hasSearch, isLoading}) => {
	let content = (
		<NoResultsBox
			message="No hay publicaciones que coincidan con tu búsqueda."
		/>
	);

	if (!hasSearch) {
		content = (
			<NoResultsBox
				message="Busca entre miles de productos"
			/>
		);
	} else if (isLoading) {
		content = (
			<NoResultsBox
				message="Buscando..."
			/>
		);
	} else if (items.length) {
		content = <ItemsList items={items} />;
	}

  	return (
		<div className="search-results">
			{content}
		</div>
	);
}

export default SearchResults;
