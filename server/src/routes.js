const router = require('express').Router()
const UserController = require('./controllers/UserController')
const Controller = require('./controllers/Controller')
// const HomeController = require('./controllers/HomeController')

// router.use(HomeController)
router.use('/users', UserController)
router.use('/posts', Controller)

module.exports = router