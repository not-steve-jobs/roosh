const mongoose = require('mongoose')
const Schema = mongoose.Schema

const navSchema = new Schema ({
    name: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Navbar', navSchema);