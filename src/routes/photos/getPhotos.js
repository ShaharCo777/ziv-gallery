Photo = require("../../models/photo")

module.exports = async(req, res) => {

try{
const Photos = await Photo.find()
res.json(Photos)
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