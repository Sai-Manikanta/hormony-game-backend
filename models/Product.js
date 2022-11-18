const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
        unique: true
    },
    selected: {
        type: Boolean,
        default: false
    },
    selectedBy: {
        type: String
    }
});

const Product = mongoose.model('GameProduct', productSchema);
module.exports = Product;