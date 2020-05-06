Photo = require("../../models/photo")

module.exports = async(req, res) => {

 const photo =req.body
try{

const newPhoto = new Photo({
    src: photo.src,
    subject: photo.subject,
    headLine: photo.headLine,
    info: photo.info,
    price: photo.price,
    date: photo.date
})
await newPhoto.save()
res.json(newPhoto)
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