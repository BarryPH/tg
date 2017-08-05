const express = require('express');
const router = express.Router();

const routes = {
	index: require('./views/index.js'),
	create: require('./views/create.js'),
};

router.use('/', routes.index);
router.use('/create', routes.create);

module.exports = router;
