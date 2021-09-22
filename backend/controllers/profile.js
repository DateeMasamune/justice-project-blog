const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')

module.exports.update = async (req,res) => {
	console.log('===>req.param.id', req.params.id);
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
