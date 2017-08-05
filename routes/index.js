const express = require('express');
const router = express.Router();

const routes = {
	index: require('./views/index.js'),
};

router.use('/', routes.index);

module.exports = router;
