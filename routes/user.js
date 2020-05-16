const express = require('express')
const router = express.Router()


const UserController = require('../controllers/user')

router.post('/signup',UserController.user_signup)

router.post('/login',UserController.login)

router.delete('/:userId',UserController.delete_user_by_id)

module.exports = router