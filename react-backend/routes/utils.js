const parseSearchItemsResults = (searchItemsResults = []) => (
	searchItemsResults.map((result) => ({
		id: result.id,
		title: result.title,
		price: {
			currency: result['currency_id'],
			amount: result.price,
			decimals: 0, // Hardcoded value as this info does not seem to be included in MELI's API response
		},
		picture: result.thumbnail,
		condition: result.condition,
		'free_shipping': result.shipping['free_shipping'],
		province: result.address['state_name'],
	}))
);

const parseGetItemResult = ({info, description}) => ({
	id: info.id,
	title: info.title,
	price: {
		currency: info['currency_id'],
		amount: info.price,
		decimals: 0,
	},
	picture: info.pictures[0].url || info.thumbnail,
	condition: info.condition,
	'free_shipping': info.shipping['free_shipping'],
	'sold_quantity': info['sold_quantity'],
	description: description['plain_text'],

});

module.exports.parseSearchItemsResults = parseSearchItemsResults;
module.exports.parseGetItemResult = parseGetItemResult;
