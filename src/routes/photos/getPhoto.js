Photo = require("../../models/photo")

module.exports = async(req, res) => {
const photoId = req.body.photoId
try{
const photo = await Photo.findById(photoId)
res.json(photo)
} catch (e) {
    console.log('request to create a task has failed')
    console.log(e)
    res.status(400).json({
      success: false,
      error: e,
      message: 'upload photo failed',
    })
  }
}