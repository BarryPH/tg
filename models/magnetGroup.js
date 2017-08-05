const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

const MagnetGroupSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	magnets: {
		type: ObjectId,
		ref: 'Magnet',
	},
});

mongoose.model('MagnetGroup', MagnetGroupSchema);

module.exports = MagnetGroupSchema;
