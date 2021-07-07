const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema ({
    url: {
        type: String,
        minLength: 2,
        maxLength: 256,
        required: true,
        unique:true
    },
    title: {
        type: String,
        minLength: 2,
        maxLength: 256,
        required: true
    },
    desc: {
        type: String,
        minLength: 2,
        maxLength: 256,
        required: true,
    },
    desc1: {
        type: String,
        minLength: 2,
        maxLength: 256,
        required: true,
    },
    desc2: {
        type: String,
        minLength: 2,
        maxLength: 256,
        required: true,
    },
    uploadPhoto: {
        type: String,
        minLength: 2,
        maxLength: 256,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('blog', blogSchema);