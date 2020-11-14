import React from 'react';
import { useHistory } from "react-router-dom";

import { parsePrice } from '../utils/transformations';

import freeShippingImg from '../assets/free_shipping.png';
import './ItemCard.scss';

const ItemCard = (item) => {
	const history = useHistory();
	const {
		id,
		title,
		price: {
			amount,
		},
		picture,
		freeShipping,
	} = item;

	const _handleItemClick = () => {
		history.push(`/items/${id}`);
	};

	return (
		<div className="item-card">
			<div>
				<img
					className="item-thumbnail"
					src={picture}
					alt={title}
					onClick={_handleItemClick}
				/>
			</div>
			<div className="item-details">
				<div className="item-price-line">
					<h3 className="item-price-amount">
						{parsePrice(amount)}
					</h3>
					{
						freeShipping ? (
							<img
								className="free-shipping-img"
								src={freeShippingImg}
								alt="Envio gratis"
							/>
						) : undefined
					}
				</div>
				<h4
					className="item-title"
					onClick={_handleItemClick}
				>
					{title}
				</h4>
			</div>
		</div>
	)
};

export default ItemCard;
