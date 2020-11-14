import React from 'react';

import { parsePrice } from '../utils/transformations';

import './ItemContent.scss';

const ITEM_CONDITION_MAP = {
	'new': 'Nuevo',
	'used': 'Usado',
};

const ItemContent = ({isLoading, itemInfo = {}, onBuyClick}) => {
	const {
		title,
		picture,
		description,
		condition,
		price: {
			amount = 0,
		} = {},
		soldQuantity,
	} = itemInfo;
	let content;

	const _getItemStatusabel = ({itemCondition, itemSoldQuantity}) => {
		return `${ITEM_CONDITION_MAP[itemCondition]} - ${itemSoldQuantity} vendidos`;
	};

	if (isLoading) {
		content = (
			<div
				className="item-loading"
				data-testid="is-loading"
			>
				<h3 className="item-message">
					Cargando...
				</h3>
			</div>
		);
	} else {
		content = (
			<div className="item-detail">
				<div>
					<img
						className="image"
						data-testid="item-image"
						src={picture}
						alt={title}
					/>
					<div className="description">
						<h4 className="description-title">Descripción del producto</h4>
						<span
							className="description-text"
							data-testid="item-description"
						>
							{description}
						</span>
					</div>
				</div>
				<div>
					<div
						className="item-condition-label"
						data-testid="item-condition"
					>
						{
							_getItemStatusabel({
								itemSoldQuantity: soldQuantity,
								itemCondition: condition,
							})
						}
					</div>
					<div
						className="item-title"
						data-testid="item-title"
					>
						{title}
					</div>
					<div
						className="item-price"
						data-testid="item-price"
					>
						{parsePrice(amount)}
					</div>
					<div className="item-actions">
						<button 
							className="buy-button"
							data-testid="buy-button"
							onClick={onBuyClick}
						>
							Comprar ahora
						</button>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="item-content">
  			{content}
		</div>
	);
}

export default ItemContent;
