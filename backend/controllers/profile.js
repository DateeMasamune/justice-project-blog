const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')

module.exports.update = async (req,res) => {
	const updated = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		description: req.body.description
	}
	if (req.file) {
		updated.imageSrc = req.file.path
	}
	try {
		const user = await User.findOneAndUpdate(
			{_id: req.params.id},
			{$set: updated},
			{new: true}
		)
		res.status(200).json(user)
	} catch (e) {
		errorHandler(res,e)
	}
}


module.exports.updateAvatar = async (req,res) => {
	console.log('===>req.file', req.file);
	const updated = {}
	if (req.file) {
		updated.avatar = req.file.path
	}
	try {
		const user = await User.findOneAndUpdate(
			{_id: req.params.id},
			{$set: updated},
			{new: true}
		)
		res.status(200).json(user)
	} catch (e) {
		errorHandler(res,e)
	}
}

module.exports.deleteAvatar = async (req,res) => {

	const updated = {}
		updated.avatar = ''
	try {
		const user = await User.findOneAndUpdate(
			{_id: req.params.id},
			{$unset: updated},
			{new: true}
		)
		res.status(200).json(user)
	} catch (e) {
		errorHandler(res,e)
	}
}