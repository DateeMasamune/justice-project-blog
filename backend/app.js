const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const passport = require('passport')
const path = require('path');
const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const articlesRoutes = require('./routes/articles')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')
const profileRoutes = require('./routes/profile')
const app = express()
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI)
	.then(() => console.log('mongoDB connected'))
	.catch(error => console.log(error))

app.use(passport.initialize())
require('./middleware/passport')(passport)
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'uploads')))
console.log('===>pro', path.join(__dirname, 'uploads'));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/auth',authRoutes)
app.use('/api/analytics',analyticsRoutes)
app.use('/api/articles',articlesRoutes)
app.use('/api/order',orderRoutes)
app.use('/api/position',positionRoutes)
app.use('/api/profile', profileRoutes)
module.exports = app