const express = require('express')
const controller = require('../controllers/profile')
const passport = require("passport");
const upload = require("../middleware/upload");
const router = express.Router()

//localhost:5000/api/auth/login
router.patch('/update/:id',passport.authenticate('jwt',{session:false}), upload.single('image'), controller.update)
router.patch('/update_avatar/:id',passport.authenticate('jwt',{session:false}), upload.single('image'), controller.updateAvatar)
router.patch('/delete_avatar/:id',passport.authenticate('jwt',{session:false}), upload.single('image'), controller.deleteAvatar)

module.exports = router