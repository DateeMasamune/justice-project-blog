const express = require('express')
const passport = require('passport')
const upload = require('../middleware/upload')
const controller = require('../controllers/articles')
const router = express.Router()

router.get('/', passport.authenticate('jwt',{session:false}), controller.getByUser)
router.get('/:id', passport.authenticate('jwt',{session:false}), controller.getById)
router.post('/get_user', passport.authenticate('jwt',{session:false}), controller.getUser)
router.post('/get_user/:id', passport.authenticate('jwt',{session:false}), controller.getUserId)
router.post('/get_all', passport.authenticate('jwt',{session:false}), controller.getAll)
router.delete('/:id', passport.authenticate('jwt',{session:false}), controller.remove)
router.post('/', passport.authenticate('jwt',{session:false}), upload.single('image') ,controller.create)
router.patch('/:id', passport.authenticate('jwt',{session:false}), upload.single('image') ,controller.update)
router.patch('/add/:id', passport.authenticate('jwt',{session:false}), upload.single('image') ,controller.addCount)

module.exports = router