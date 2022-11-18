const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    allowed: {
        type: Boolean,
        default: false
    },
    numberOfSelections: {
        type: Number,
        default: 1
    },
    selectedCount: {
        type: Number,
        default: 0
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;