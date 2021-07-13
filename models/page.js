const mongoose = require('mongoose')
const Schema = mongoose.Schema

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy

const pageSchema = new Schema ({
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
    },
    addDate: {
        type: String,
        default: today
    }
})


module.exports = mongoose.model('page', pageSchema);