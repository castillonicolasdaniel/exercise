const express = require('express');
const router = express.Router();
const got = require('got');

const {parseSearchItemsResults} = require('./utils');


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

module.exports = router;
