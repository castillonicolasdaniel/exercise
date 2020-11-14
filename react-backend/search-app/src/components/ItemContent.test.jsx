import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ItemContent from './ItemContent';


describe('ItemContent', () => {

	const itemInfo = {
		id: 'MLA813873495',
		title: 'Gorra Trucker',
		price: {
			currency: 'ARS',
			amount: 949,
			decimals: 0,
		},
		picture: 'http://http2.mlstatic.com/D_659459-MLA32128006890_092019-O.jpg',
		condition: 'new',
		description: 'Una gorra genial',
		soldQuantity: 37,
	};

	const isLoading = false;

	const onBuyClick = jest.fn();

	it('should render the loading component when is loading', () => {
	  	const { queryByTestId } = render(
	  		<ItemContent
	  			itemInfo={itemInfo}
	  			isLoading={true}
	  			onBuyClick={onBuyClick}
	  		/>
	  	);

	  	expect(queryByTestId('is-loading')).not.toBeNull();
	});

	it('should not render the loading component when is not loading', () => {
	  	const { queryByTestId } = render(
	  		<ItemContent
	  			itemInfo={itemInfo}
	  			isLoading={isLoading}
	  			onBuyClick={onBuyClick}
	  		/>
	  	);

	  	expect(queryByTestId('is-loading')).toBeNull();
	});

	it('should render the item image', () => {
	  	const { queryByTestId } = render(
	  		<ItemContent
	  			itemInfo={itemInfo}
	  			isLoading={isLoading}
	  			onBuyClick={onBuyClick}
	  		/>
	  	);

	  	expect(queryByTestId('item-image')).not.toBeNull();
	});

	it('should render the item description with the expected value', () => {
	  	const { getByTestId } = render(
	  		<ItemContent
	  			itemInfo={itemInfo}
	  			isLoading={isLoading}
	  			onBuyClick={onBuyClick}
	  		/>
	  	);
	  	const itemDescription = getByTestId('item-description');

	  	expect(itemDescription.textContent).toBe(itemInfo.description);
	});

	it('should render the item condition with the expected value', () => {
		const { getByTestId } = render(
	  		<ItemContent
	  			itemInfo={itemInfo}
	  			isLoading={isLoading}
	  			onBuyClick={onBuyClick}
	  		/>
	  	);
	  	const itemCondition = getByTestId('item-condition');

	  	expect(itemCondition.textContent).toBe('Nuevo - 37 vendidos');
	});

	it('should render the item title with the expected value', () => {
		const { getByTestId } = render(
	  		<ItemContent
	  			itemInfo={itemInfo}
	  			isLoading={isLoading}
	  			onBuyClick={onBuyClick}
	  		/>
	  	);
	  	const itemTitle = getByTestId('item-title');

	  	expect(itemTitle.textContent).toBe(itemInfo.title);
	});

	it('should render the item price with the expected value', () => {
		const { getByTestId } = render(
	  		<ItemContent
	  			itemInfo={itemInfo}
	  			isLoading={isLoading}
	  			onBuyClick={onBuyClick}
	  		/>
	  	);
	  	const itemPrice = getByTestId('item-price');

	  	expect(itemPrice.textContent).toBe('$ 949,00');
	});

	it('should render the buy button', () => {
	  	const { queryByTestId } = render(
	  		<ItemContent
	  			itemInfo={itemInfo}
	  			isLoading={isLoading}
	  			onBuyClick={onBuyClick}
	  		/>
	  	);

	  	expect(queryByTestId('buy-button')).not.toBeNull();
	});

	it('should call the onBuyClick function when the buy button is clicked', () => {
		const { getByTestId } = render(
	  		<ItemContent
	  			itemInfo={itemInfo}
	  			isLoading={isLoading}
	  			onBuyClick={onBuyClick}
	  		/>
	  	);
	  	const buyButton = getByTestId('buy-button');

	  	fireEvent.click(buyButton)
	  	expect(onBuyClick).toHaveBeenCalled();
	});
});
