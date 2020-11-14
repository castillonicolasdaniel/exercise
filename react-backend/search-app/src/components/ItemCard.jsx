import React from 'react';

import { parsePrice } from '../utils/transformations';

import freeShippingImg from '../assets/free_shipping.png';
import './ItemCard.scss';

const ItemCard = (item) => {
	const {
		id,
		title,
		price: {
			amount,
		},
		picture,
		freeShipping,
	} = item;

	return (
		<div className="item-card">
			<div>
				<img
					className="item-image"
					width="160"
					height="160"
					src={picture}
					alt={title}
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
				<h4 className="item-title">
					{title}
				</h4>
			</div>
		</div>
	)
};

export default ItemCard;
