import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ItemCard from './ItemCard';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('ItemCard', () => {

	const item = {
		id: 'MLA813873495',
		title: 'Gorra Trucker',
		price: {
			currency: 'ARS',
			amount: 949,
			decimals: 0,
		},
		picture: 'http://http2.mlstatic.com/D_659459-MLA32128006890_092019-O.jpg',
		condition: 'new',
		freeShipping: false,
		province: 'Mendoza',
	};

	it('should render the item thumbnail', () => {
	  	const { queryByTestId } = render(<ItemCard item={item} />);

	  	expect(queryByTestId('item-thumbnail')).not.toBeNull();
	});

	it('should render the item title', () => {
	  	const { getByTestId } = render(<ItemCard item={item} />);
	  	const itemTitle = getByTestId('item-title');

	  	expect(itemTitle.textContent).toBe(item.title);
	});

	it('should render the item price', () => {
	  	const { getByTestId } = render(<ItemCard item={item} />);
	  	const itemPrice = getByTestId('item-price');

	  	expect(itemPrice.textContent).toBe('$ 949,00');
	});

	it('should not render the free shipping image when the item does not have free shipping', () => {
		const { queryByTestId } = render(<ItemCard item={item} />);
	  	
	  	expect(queryByTestId('free-shipping')).toBeNull();
	});

	it('should render the free shipping image when the item has free shipping', () => {
		const { queryByTestId } = render(
			<ItemCard
			item={
				{
					...item,
					freeShipping: true,
				}
			} 
		/>);
	  	
	  	expect(queryByTestId('free-shipping')).not.toBeNull();
	});

	it('should render the item location', () => {
	  	const { getByTestId } = render(<ItemCard item={item} />);
	  	const itemLocation = getByTestId('item-location');

	  	expect(itemLocation.textContent).toBe(item.province);
	});

	it('should redirect to the item page when the thumbnail is clicked', () => {
		const { getByTestId } = render(<ItemCard item={item} />);
	  	const itemThumbnail = getByTestId('item-thumbnail');

	  	fireEvent.click(itemThumbnail);
	  	expect(mockHistoryPush).toHaveBeenCalledWith(`/items/${item.id}`);
	});

	it('should redirect to the item page when the item title is clicked', () => {
		const { getByTestId } = render(<ItemCard item={item} />);
	  	const itemTitle = getByTestId('item-title');

	  	fireEvent.click(itemTitle);
	  	expect(mockHistoryPush).toHaveBeenCalledWith(`/items/${item.id}`);
	});
});
