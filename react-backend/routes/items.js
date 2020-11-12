var express = require('express');
var router = express.Router();

/* GET items. */
router.get('/items', function(req, res, next) {
	console.log("requests params" +req.params);
	res.json([{
		id: 1,
		username: "samsepi0l"
	}, {
		id: 2,
		username: "D0loresH4ze"
	}]);
});

module.exports = router;
