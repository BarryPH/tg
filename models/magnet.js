const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Magnet = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	downloads: Number,
});

mongoose.model('Magnet', MagnetSchema);

module.exports = MagnetSchema;
