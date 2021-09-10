const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    category: [{
        type: String
    }]
});



module.exports = mongoose.model('Users', userSchema)