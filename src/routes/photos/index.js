const express = require('express')

// const { isLoggedIn } = require('../../auth')

const router = express.Router()

// TODO: make it an mannager and guess option

const getPhoto = require('./getPhoto')
const getPhotos = require('./getPhotos')
const searchPhoto = require('./searchPhoto')
const createMood = require('./uploadPhoto')

router.get('/getPhotos', getPhotos)
router.put('/getPhoto', getPhoto)
router.put('/search', searchPhoto)
router.post('/uploadPhoto', createMood)

module.exports = router
