const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    address: {
        type: String
    },
    email_address: {
        type: String
    },
    contact_no: {
        type: Number
    },
    username: {
        type: String
    },
    password: {
        type: String
    }
}, {
    collection: 'useraccounts'
})

module.exports = User = mongoose.model('users', UserSchema)