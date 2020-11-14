import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('SearchBar', () => {

	const searchTerms = 'Remera azul';

	it('should render the search logo', () => {
	  	const { queryByTestId } = render(<SearchBar searchTerms={searchTerms} />);

	  	expect(queryByTestId('search-logo')).not.toBeNull();
	});

	it('should render the search input', () => {
	  	const { queryByTestId } = render(<SearchBar searchTerms={searchTerms} />);

	  	expect(queryByTestId('search-input')).not.toBeNull();
	});

	it('should render the search button', () => {
	  	const { queryByTestId } = render(<SearchBar searchTerms={searchTerms} />);

	  	expect(queryByTestId('search-button')).not.toBeNull();
	});

	it('pressing enter should redirect to the search results page', () => {
	  	const { getByTestId } = render(<SearchBar searchTerms={searchTerms} />);
	  	const searchInput = getByTestId('search-input');

	  	fireEvent.keyUp(searchInput, { key: 'Enter', code: 'Enter' });
	  	expect(mockHistoryPush).toHaveBeenCalledWith('/items?search=Remera%20azul');
	});

	it('clicking the search button should redirect to the search results page', () => {
		const { getByTestId } = render(<SearchBar searchTerms={searchTerms} />);
		const searchButton = getByTestId('search-button');

		fireEvent.click(searchButton);
	  	expect(mockHistoryPush).toHaveBeenCalledWith('/items?search=Remera%20azul');
	});
});
