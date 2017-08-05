const express = require('express');
const router = express.Router();

router.route('/')
	.get((req, res) => {
		res.render('create');
	})
	.post((req, res) => {
		console.log('Body:', req.body);
	});

module.exports = router;
