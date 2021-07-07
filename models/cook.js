const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cookSchema = new Schema ({
    name: {
        type: String,
        minLength: 2,
        maxLength: 256,
        required: true,
    },
    surname: {
        type: String,
        minLength: 2,
        maxLength: 256,
        required: true
    },
    address: {
        type: String,
        minLength: 2,
        maxLength: 256,
        required: true,
    },
    email: {
        type: String,
        minLength: 2,
        maxLength: 256,
        required: true,
    },
    phone: {
        type: String,
        minLength: 2,
        maxLength: 256,
        required: true,
    },
    desc: {
        type: String,
        minLength: 2,
        maxLength: 256,
        required: true
    },
    facebook: {
        type: String
    },
    instagram: {
        type: String
    },
    youtube: {
        type: String
    },
    referral: {
        type: String
    }
})

module.exports = mongoose.model('cook', cookSchema);