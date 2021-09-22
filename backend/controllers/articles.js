const Articles = require('../models/Articles')
const Position = require('../models/Position')
const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')

module.exports.getByUser = async (req,res) => { /*все статьи авторизованного пользователя*/
	try {
		const articles = await Articles.find({userCreate: req.user.id})
		res.status(200).json(articles)
	} catch (e) {
		errorHandler(res,e)
	}
}

module.exports.getById = async (req,res) => { /*получить статью по айди*/
	try {
		const articles = await Articles.findById(req.params.id)
		res.status(200).json(articles)
	} catch (e) {
		errorHandler(res,e)
	}
}

module.exports.getUser = async (req,res) => {
	try {
		const user = await User.findById(req.user.id)
		res.status(200).json(user)
	} catch (e) {
		errorHandler(res,e)
	}
}

module.exports.getAll = async (req,res) => { /*получить все статьи из базы данных*/
	try {
		const articles = await Articles.find()
		res.status(200).json(articles)
	} catch (e) {
		errorHandler(res,e)
	}
}

module.exports.remove = async (req,res) => { /*удаление статьи*/
	try {
		await Articles.remove({_id: req.params.id})
		await Position.remove({category: req.params.id})
		res.status(200).json({
			message: 'Articles delete'
		})
	} catch (e) {
		errorHandler(res,e)
	}
}

module.exports.create = async (req,res) => { /*создание статьи*/
	console.log(req.file)
	const article = new Articles({
		nameArticle: req.body.nameArticle,
		userCreate: req.user.id,
		pictureSrc: req.file ? req.file.path : '',
		description: req.body.description,
		viewNum: req.body.viewNum,
		date: req.body.date,
		viewSrc: req.body.viewSrc,
		hasTag: req.body.hasTag,
		iconSrc: req.body.iconSrc
	})
	try {
		await article.save()
		res.status(201).json(article)
	} catch (e) {
		errorHandler(res,e)
	}
}

module.exports.update = async (req,res) => {
	const updated = {
		nameArticle: req.body.name
	}
	if (req.file) {
		updated.imageSrc = req.file.path
	}
	try {
		const category = await Articles.findOneAndUpdate(
			{_id: req.params.id},
			{$set: updated},
			{new: true}
		)
		res.status(200).json(category)
	} catch (e) {
		errorHandler(res,e)
	}
}

module.exports.addCount = async (req, res) => { /*обновление данных в базе*/
	const updated = {
		nameArticle: req.body.nameArticle,
		viewNum: req.body.viewNum
	}
	try {
		const category = await Articles.findOneAndUpdate(
			{_id: req.params.id},
			{$set: updated},
			{new: true}
		)
		res.status(200).json(category)
	} catch (e) {
		errorHandler(res,e)
	}
}