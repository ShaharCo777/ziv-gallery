const mongoose = require('mongoose')
            
const PhotoSchema = new mongoose.Schema({
    src:{
        type: String
    },
    subject:{
        type: String
    },
    headLine:{
        type: String
    },
    info:{
        type: String
    },
    price:{
        type:Number
    },
    date: {
        type: Date,
    }

})

module.exports = Photo = mongoose.model('photo', PhotoSchema)