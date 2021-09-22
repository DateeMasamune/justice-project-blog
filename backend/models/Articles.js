const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articlesSchema = new Schema({
	nameArticle: {
		type: String,
		required: true
	},
	pictureSrc: {
		type: String,
		default: ''
	},
	userCreate: {
		ref: 'users',
		type: Schema.Types.ObjectId
	},
	description: {
		type: String,
		required: true
	},
	viewNum: {
		type: Number,
		required: true
	},
	date: {
		type: String,
		required: true
	},
	viewSrc: {
		type: String,
		required: true
	},
	hasTag: {
		type: String,
		required: true
	},
	iconSrc: {
		type: String,
		required: true
	}
})

module.exports = mongoose.model('articles', articlesSchema)