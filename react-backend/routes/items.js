const express = require('express');
const router = express.Router();
const got = require('got');

const {
	parseGetItemResult,
	parseSearchItemsResults,
} = require('./utils');


/* GET items. */
router.get('/items', async(req, res, next) => {
	const {
		query: {
			q: searchQuery,
		},
	} = req;

	if (searchQuery) {
	    try {
			const response = await got(
				'https://api.mercadolibre.com/sites/MLA/search',
				{
					searchParams: {
						q: searchQuery,
					},
					responseType: 'json',
				},
			);
			const parsedItems = parseSearchItemsResults(response.body.results);

			res.json({
				items: parsedItems,
			});
		} catch (error) {
			res.status(500).send('Something went wrong');
		}
	}
});

/* GET items. */
router.get('/items/:id', async(req, res, next) => {
	const {
		id,
	} = req.params;

    try {
		const itemInfo = await got(
			`https://api.mercadolibre.com/items/${id}`,
			{
				responseType: 'json',
			},
		);
		const itemDescription = await got(
			`https://api.mercadolibre.com/items/${id}/description`,
			{
				responseType: 'json',
			},
		);

		res.json({
			item: parseGetItemResult({
				info: itemInfo.body,
				description: itemDescription.body,
			}),
		});
	} catch (error) {
		console.log('error', error)
		res.status(500).send('Something went wrong');
	}
});

module.exports = router;
